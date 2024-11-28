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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import DashboardCardLoading from "@/components/DashboardCardLoading";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

// Button definitions
const buttons = [
  { id: "google_search", label: "Google Search", icon: Globe },
  { id: "social_media", label: "Social Media", icon: Users },
  { id: "referral", label: "Referral from a Friend", icon: Share2 },
  { id: "event", label: "Event or Conference", icon: Calendar },
  { id: "job_board", label: "Job Board", icon: BriefcaseBusiness },
  { id: "others", label: "Others", icon: Grip },
];

// OpinionCards Component
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

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [opinionResponse, entryLevelResponse, experiencedLevelResponse] =
          await Promise.all([
            axios.get("/api/get-opinion"),
            axios.get("/api/get-job?level=Entry"),
            axios.get("/api/get-job?level=Experienced"),
          ]);

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
            description:
              opinionResponse.data.message || "Failed to fetch opinions.",
            variant: "destructive",
          });
        }

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

  const chartConfig: ChartConfig = {
    "Google Search": {
      label: "Google Search",
      color: "hsl(var(--primary))",
      icon: Globe,
    },
    "Social Media": {
      label: "Social Media",
      color: "hsl(var(--secondary))",
      icon: Users,
    },
    Referral: { label: "Referral", color: "hsl(var(--accent))", icon: Share2 },
    Event: { label: "Event", color: "hsl(var(--muted))", icon: Calendar },
    "Job Board": {
      label: "Job Board",
      color: "hsl(var(--success))",
      icon: BriefcaseBusiness,
    },
    Others: { label: "Others", color: "hsl(var(--warning))", icon: Grip },
  } satisfies ChartConfig;

  const chartData = [
    ...data.opinions.map(({ label, count }) => ({ name: label, count })),
    { name: "Entry Level Jobs", count: data.entryLevel },
    { name: "Experienced Level Jobs", count: data.experiencedLevel },
  ];

  return (
    <section className="py-5 sm:px-5 px-0 h-auto w-auto flex flex-col items-center justify-center">
      <div className="grid gap-6 sm:min-w-[80vw] sm:max-w-[80vw] w-screen bg-neutral-50 sm:rounded-2xl rounded-none p-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <DashboardCardLoading key={index} />
          ))
        ) : (
          <>
            {data.opinions.map(({ buttonId, label, count }) => {
              const Icon =
                buttons.find((btn) => btn.id === buttonId)?.icon ||
                MoreHorizontal;
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

            <Card>
              <CardHeader>
                <CardTitle className="flex sm:text-base sm:flex-row flex-col-reverse gap-5 justify-between items-start sm:items-center">
                  <p>Experienced Level Jobs</p>
                  <Briefcase strokeWidth={1.5} size={20} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">
                  {data.experiencedLevel}
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Chart Section */}
      <Card className="w-full sm:w-[80vw] h-auto mt-10 bg-neutral-50">
        <CardHeader>
          <CardTitle>Opinions and Job</CardTitle>
          <CardDescription>Opinions and Job Data Overview</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className=" w-full h-[90vh] flex justify-between items-center flex-row">
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
              <Skeleton className=" w-32 h-[90vh]" />
            </div>
          ) : (
            <ChartContainer config={chartConfig} className="h-auto w-full">
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" tickLine={false} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="count"
                    fill="rgb(59 130 246)"
                    radius={[4, 4, 0, 0]}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent hideLabel />}
                    cursor={false}
                    defaultIndex={1}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default OpinionCards;
