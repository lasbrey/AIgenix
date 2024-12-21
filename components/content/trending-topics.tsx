"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Hash } from "lucide-react";

const trends = [
  {
    topic: "#ArtificialIntelligence",
    growth: "+125%",
    volume: "12.5K posts",
    sentiment: "Positive",
  },
  {
    topic: "#ContentCreation",
    growth: "+82%",
    volume: "8.2K posts",
    sentiment: "Neutral",
  },
  {
    topic: "#DigitalMarketing",
    growth: "+65%",
    volume: "15.3K posts",
    sentiment: "Positive",
  },
];

export function TrendingTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trends.map((trend) => (
            <div
              key={trend.topic}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Hash className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{trend.topic}</p>
                  <p className="text-sm text-muted-foreground">{trend.volume}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-medium">{trend.growth}</p>
                <p className="text-sm text-muted-foreground">{trend.sentiment}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}