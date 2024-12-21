"use client";

export default function CompetitorOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Competitor Overview</h1>
      <p>Get a quick summary of your competitors’ social media performance and compare them with yours.</p>
      {/* Add comparison stats and visuals here */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold">Engagement Rate</h2>
          <p>Competitor A: 12%</p>
          <p>You: 9%</p>
          {/* Add visual like a bar chart */}
        </div>
        <div className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold">Audience Growth</h2>
          <p>Competitor B: +15%</p>
          <p>You: +10%</p>
        </div>
      </div>
    </div>
  );
}
