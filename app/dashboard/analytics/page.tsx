import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-6">
        <AnalyticsOverview />
        {/* Add more analytics components here */}
      </div>
    </div>
  );
}