import React from "react";

interface CompetitorOverviewProps {
  competitors: { name: string; overview: string }[];
}

export const CompetitorOverview: React.FC<CompetitorOverviewProps> = ({
  competitors = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Competitor Overview</h2>
      <div className="space-y-4">
        {competitors.length > 0 ? (
          competitors.map((competitor, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold">{competitor.name}</h3>
              <p className="text-gray-700">{competitor.overview}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No competitors data available.</p>
        )}
      </div>
    </div>
  );
};
