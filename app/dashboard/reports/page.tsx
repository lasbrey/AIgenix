"use client";

import { Card } from "@/components/ui/card";
import { ReportsList } from "@/components/reports/reports-list";
import { ReportsChart } from "@/components/reports/reports-chart";
import { ReportsMetrics } from "@/components/reports/reports-metrics";
import { ReportsActions } from "@/components/reports/reports-actions";

export default function ReportsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports</h1>
        <ReportsActions />
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <ReportsMetrics />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <ReportsChart />
        </Card>
        <Card className="p-6">
          <ReportsList />
        </Card>
      </div>
    </div>
  );
}