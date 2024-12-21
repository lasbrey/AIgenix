import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EngagementMetrics } from "@/components/dashboard/engagement-metrics";

export default function EngagementPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Engagement Analytics</h1>
      
      <div className="grid gap-6">
        <EngagementMetrics />
        <Card>
          <CardHeader>
            <CardTitle>Engagement History</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add engagement history chart component here */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}