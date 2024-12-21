import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"; 

interface HashtagAnalysisProps {
  hashtags: { hashtag: string; frequency: number; engagement: string }[];
}

export const HashtagAnalysis: React.FC<HashtagAnalysisProps> = ({
  hashtags = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hashtag Analysis</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hashtag</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Engagement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hashtags.length > 0 ? (
            hashtags.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell>{item.hashtag}</TableCell>
                <TableCell>{item.frequency}</TableCell>
                <TableCell>{item.engagement}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                No hashtag analysis data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
