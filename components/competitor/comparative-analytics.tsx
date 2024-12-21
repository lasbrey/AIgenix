import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"; 

interface ComparativeAnalyticsProps {
  data: { metric: string; you: number; competitor: number }[];
}

export const ComparativeAnalytics: React.FC<ComparativeAnalyticsProps> = ({
  data = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comparative Analytics</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Your Performance</TableHead>
            <TableHead>Competitor's Performance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell>{item.metric}</TableCell>
                <TableCell>{item.you}</TableCell>
                <TableCell>{item.competitor}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                No analytics data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
