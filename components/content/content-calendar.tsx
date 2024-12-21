"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function ContentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="space-y-4">
            <h3 className="font-medium">Scheduled Posts</h3>
            <div className="space-y-2">
              {/* Example scheduled posts */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Instagram Post</span>
                  <span className="text-sm text-muted-foreground">3:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground">Product showcase with AI-generated caption</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Twitter Thread</span>
                  <span className="text-sm text-muted-foreground">5:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground">AI trends and insights discussion</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}