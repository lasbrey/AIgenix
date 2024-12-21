"use client";

import { Button } from "@/components/ui/button";
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview";
import { EngagementMetrics } from "@/components/dashboard/engagement-metrics";
import { ContentSuggestions } from "@/components/dashboard/content-suggestions";
import { SocialAccounts } from "@/components/dashboard/social-accounts";

export default function DashboardPage() {
  return (
    <div className="space-y-6 px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">

          <Button> Create Post</Button>
          <Button>  Export Report</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SocialAccounts />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <AnalyticsOverview />
        <EngagementMetrics />
      </div>

      <ContentSuggestions />
    </div>
  );
}