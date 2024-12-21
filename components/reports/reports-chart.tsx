"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";

const data = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 3800 },
];

export function ReportsChart() {
  const { theme } = useTheme();
  const strokeColor = theme === "dark" ? "#fff" : "#000";

  return (
    <div>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke={strokeColor}
              tick={{ fill: strokeColor }}
              axisLine={{ stroke: strokeColor }}
            />
            <YAxis 
              stroke={strokeColor}
              tick={{ fill: strokeColor }}
              axisLine={{ stroke: strokeColor }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}