import React from "react";

interface PlatformInsightsProps {
  insights: { platform: string; detail: string }[];
}

export const PlatformInsights: React.FC<PlatformInsightsProps> = ({
  insights = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Platform Insights</h2>
      <div className="space-y-4">
        {insights.length > 0 ? (
          insights.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-md shadow-md border"
            >
              <h3 className="text-lg font-semibold">{item.platform}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No platform insights available.</p>
        )}
      </div>
    </div>
  );
};
