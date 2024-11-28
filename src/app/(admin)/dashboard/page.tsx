"use client";
import React, { useEffect, useState } from "react";
import {
  Globe,
  Users,
  Share2,
  Calendar,
  Briefcase,
  MoreHorizontal,
  BriefcaseBusiness,
  Grip,
  Backpack,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import DashboardCardLoading from "@/components/DashboardCardLoading";

const buttons = [
  { id: "google_search", label: "Google Search", icon: Globe },
  { id: "social_media", label: "Social Media", icon: Users },
  { id: "referral", label: "Referral from a Friend", icon: Share2 },
  { id: "event", label: "Event or Conference", icon: Calendar },
  { id: "job_board", label: "Job Board", icon: BriefcaseBusiness },
  { id: "others", label: "Others", icon: Grip },
];

const OpinionCards = () => {
  const [data, setData] = useState<{
    opinions: { buttonId: string; count: number; label: string }[];
    entryLevel: number;
    experiencedLevel: number;
  }>({
    opinions: [],
    entryLevel: 0,
    experiencedLevel: 0,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data concurrently
        const [opinionResponse, entryLevelResponse, experiencedLevelResponse] =
          await Promise.all([
            axios.get("/api/get-opinion"),
            axios.get("/api/get-job?level=Entry"),
            axios.get("/api/get-job?level=Experienced"),
          ]);

        // Handle opinions
        if (opinionResponse.data.success) {
          const opinionMap = new Map<string, number>(
            opinionResponse.data.data.map(
              (item: { buttonId: string; count: number }) => [
                item.buttonId,
                typeof item.count === "number" ? item.count : 0,
              ]
            )
          );

          const formattedOpinions = buttons.map((button) => ({
            buttonId: button.id,
            label: button.label,
            count: opinionMap.get(button.id) ?? 0,
          }));

          setData((prevData) => ({
            ...prevData,
            opinions: formattedOpinions,
          }));
        } else {
          toast({
            title: "Error",
            description: opinionResponse.data.message || "Failed to fetch opinions.",
            variant: "destructive",
          });
        }

        // Handle job counts
        setData((prevData) => ({
          ...prevData,
          entryLevel: entryLevelResponse.data.jobs.length || 0,
          experiencedLevel: experiencedLevelResponse.data.jobs.length || 0,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: "Failed to load data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  return (
    <section className="py-5 sm:px-5 px-0 h-auto w-auto flex items-center justify-center">
      <div className="grid gap-6 sm:min-w-[81vw] sm:max-w-[80vw] w-screen bg-neutral-50 sm:rounded-2xl rounded-none p-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
           <DashboardCardLoading key={index}/>
          ))
        ) : (
          <>
            {data.opinions.map(({ buttonId, label, count }) => {
              const Icon = buttons.find((btn) => btn.id === buttonId)?.icon || MoreHorizontal;
              return (
                <Card key={buttonId}>
                  <CardHeader>
                    <CardTitle className="flex sm:text-base sm:flex-row flex-col-reverse gap-5 justify-between items-start sm:items-center">
                      <p>{label}</p>
                      <Icon strokeWidth={1.5} size={20} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-semibold">{count}</p>
                  </CardContent>
                </Card>
              );
            })}

            {/* Entry Level Jobs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex sm:text-base sm:flex-row flex-col-reverse gap-5 justify-between items-start sm:items-center">
                  <p>Entry Level Jobs</p>
                  <Backpack strokeWidth={1.5} size={20} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{data.entryLevel}</p>
              </CardContent>
            </Card>

            {/* Experienced Level Jobs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex sm:text-base sm:flex-row flex-col-reverse gap-5 justify-between items-start sm:items-center">
                  <p>Experienced Level Jobs</p>
                  <Briefcase strokeWidth={1.5} size={20} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{data.experiencedLevel}</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </section>
  );
};

export default OpinionCards;
