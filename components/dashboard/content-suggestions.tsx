"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ThumbsUp, Zap } from "lucide-react";

const suggestions = [
  {
    title: "Share industry insights about AI trends",
    time: "Best time: 10:00 AM",
    engagement: "Predicted engagement: High",
    type: "Text + Image",
  },
  {
    title: "Post a behind-the-scenes look at your workspace",
    time: "Best time: 2:00 PM",
    engagement: "Predicted engagement: Medium",
    type: "Story",
  },
  {
    title: "Share a client success story",
    time: "Best time: 4:30 PM",
    engagement: "Predicted engagement: Very High",
    type: "Carousel",
  },
];

export function ContentSuggestions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Content Suggestions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg flex items-center justify-between"
            >
              <div className="space-y-1">
                <h3 className="font-medium">{suggestion.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {suggestion.time}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    {suggestion.engagement}
                  </div>
                  <div className="flex items-center">
                    <Zap className="mr-1 h-4 w-4" />
                    {suggestion.type}
                  </div>
                </div>
              </div>
              <Button>Schedule</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}