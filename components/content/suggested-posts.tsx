"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, TrendingUp } from "lucide-react";

const suggestions = [
  {
    platform: "Instagram",
    content: "Share your latest AI-powered insights with a visually appealing infographic",
    time: "3:00 PM",
    engagement: "High",
    hashtags: ["#AITechnology", "#Innovation", "#TechTrends"]
  },
  {
    platform: "LinkedIn",
    content: "Write about how AI is transforming content creation in 2024",
    time: "10:00 AM",
    engagement: "Very High",
    hashtags: ["#ArtificialIntelligence", "#ContentCreation", "#FutureOfWork"]
  },
  {
    platform: "Twitter",
    content: "Share a quick tip about using AI for productivity",
    time: "1:30 PM",
    engagement: "Medium",
    hashtags: ["#ProductivityTips", "#AITools", "#WorkSmarter"]
  }
];

export function SuggestedPosts() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>AI-Suggested Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{suggestion.platform}</span>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{suggestion.time}</span>
                  <TrendingUp className="h-4 w-4 ml-2" />
                  <span>{suggestion.engagement} Engagement</span>
                </div>
              </div>
              <p>{suggestion.content}</p>
              <div className="flex flex-wrap gap-2">
                {suggestion.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button size="sm">Schedule</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}