import React from "react";

interface EngagementProps {
  type: string;
  value: number;
}

interface EngagementBreakdownProps {
  data: EngagementProps[];
}

export const EngagementBreakdown: React.FC<EngagementBreakdownProps> = ({
  data = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Engagement Breakdown</h2>
      <div className="space-y-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md border rounded-md"
            >
              <p className="text-lg font-medium">{item.type}</p>
              <p className="text-gray-600">Engagement: {item.value}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No engagement data available.</p>
        )}
      </div>
    </div>
  );
};
