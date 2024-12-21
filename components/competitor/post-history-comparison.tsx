import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"; 

interface PostHistory {
  date: string;
  yourPosts: number;
  competitorPosts: number;
}

interface PostHistoryComparisonProps {
  history: PostHistory[];
}

export const PostHistoryComparison: React.FC<PostHistoryComparisonProps> = ({
  history = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Post History Comparison</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Your Posts</TableHead>
            <TableHead>Competitor's Posts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.length > 0 ? (
            history.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.yourPosts}</TableCell>
                <TableCell>{item.competitorPosts}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                No post history data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
