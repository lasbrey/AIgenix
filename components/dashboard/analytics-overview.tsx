"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";

const data = [
  { date: "Mon", followers: 2400 },
  { date: "Tue", followers: 2800 },
  { date: "Wed", followers: 3200 },
  { date: "Thu", followers: 3600 },
  { date: "Fri", followers: 4000 },
  { date: "Sat", followers: 4400 },
  { date: "Sun", followers: 4800 },
];

export function AnalyticsOverview() {
  const { theme } = useTheme();
  const strokeColor = theme === "dark" ? "#fff" : "#000";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="date" 
                stroke={strokeColor}
                tick={{ fill: strokeColor }}
              />
              <YAxis 
                stroke={strokeColor}
                tick={{ fill: strokeColor }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="followers"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}