"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";

const data = [
  { date: "Mon", engagement: 2400, reach: 4000 },
  { date: "Tue", engagement: 1398, reach: 3000 },
  { date: "Wed", engagement: 9800, reach: 2000 },
  { date: "Thu", engagement: 3908, reach: 2780 },
  { date: "Fri", engagement: 4800, reach: 1890 },
  { date: "Sat", engagement: 3800, reach: 2390 },
  { date: "Sun", engagement: 4300, reach: 3490 },
];

export function ContentAnalytics() {
  const { theme } = useTheme();
  const strokeColor = theme === "dark" ? "#fff" : "#000";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
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
                dataKey="engagement"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="reach"
                stroke="hsl(var(--primary)/0.5)"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}