"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, Share2 } from "lucide-react";
import axios from "axios";
import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  opinions: {
    label: "Opinions",
    color: "hsl(var(--chart-1))",
    icon: Share2,
  },
  jobs: {
    label: "Jobs",
    color: "hsl(var(--chart-2))",
    icon: Briefcase,
  },
} satisfies ChartConfig;

const OpinionJobChart = () => {
  const [chartData, setChartData] = useState<
    { label: string; opinions: number; jobs: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [opinionResponse, entryLevelResponse, experiencedLevelResponse] =
          await Promise.all([
            axios.get("/api/get-opinion"),
            axios.get("/api/get-job?level=Entry"),
            axios.get("/api/get-job?level=Experienced"),
          ]);

        // Map opinion data
        const opinionMap = new Map<string, number>(
          opinionResponse.data.data.map(
            (item: { buttonId: string; count: number }) => [
              item.buttonId,
              typeof item.count === "number" ? item.count : 0,
            ]
          )
        );

        // Prepare chart data
        const data = [
          {
            label: "Opinions",
            opinions: Array.from(opinionMap.values()).reduce(
              (sum, count) => sum + count,
              0
            ),
            jobs: 0,
          },
          {
            label: "Jobs",
            opinions: 0,
            jobs:
              (entryLevelResponse.data.jobs.length || 0) +
              (experiencedLevelResponse.data.jobs.length || 0),
          },
        ];

        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Opinions and Jobs Chart</CardTitle>
        <CardDescription>Visual representation of data counts.</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading chart...</p>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="label"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <Bar
                dataKey="opinions"
                stackId="a"
                fill="var(--color-opinions)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="jobs"
                stackId="a"
                fill="var(--color-jobs)"
                radius={[4, 4, 0, 0]}
              />
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
                cursor={false}
              />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default OpinionJobChart;
