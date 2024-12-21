"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Eye } from "lucide-react";

const metrics = [
  {
    title: "Total Likes",
    value: "24.5K",
    change: "+12%",
    icon: Heart,
  },
  {
    title: "Comments",
    value: "1.2K",
    change: "+8%",
    icon: MessageCircle,
  },
  {
    title: "Shares",
    value: "856",
    change: "+24%",
    icon: Share2,
  },
  {
    title: "Views",
    value: "45.2K",
    change: "+16%",
    icon: Eye,
  },
];

export function EngagementMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex items-center space-x-2 p-4 border rounded-lg"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <span className="text-sm text-green-500">{metric.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}