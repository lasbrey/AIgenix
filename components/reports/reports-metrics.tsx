"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp, Users } from "lucide-react";

const metrics = [
  {
    title: "Total Posts",
    value: "2,345",
    change: "+12.5%",
    icon: Activity,
  },
  {
    title: "Engagement Rate",
    value: "4.6%",
    change: "+2.1%",
    icon: TrendingUp,
  },
  {
    title: "Audience Growth",
    value: "12.5K",
    change: "+5.2%",
    icon: Users,
  },
];

export function ReportsMetrics() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">{metric.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}