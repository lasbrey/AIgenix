"use client";

import { CardHeader, CardTitle } from "@/components/ui/card";

const recentReports = [
  {
    id: 1,
    title: "Monthly Performance Report",
    date: "2024-03-15",
    status: "Completed",
  },
  {
    id: 2,
    title: "Content Analysis Report",
    date: "2024-03-14",
    status: "Processing",
  },
  {
    id: 3,
    title: "Engagement Metrics Report",
    date: "2024-03-13",
    status: "Completed",
  },
];

export function ReportsList() {
  return (
    <div>
      <CardHeader>
        <CardTitle>Recent Reports</CardTitle>
      </CardHeader>
      <div className="space-y-4">
        {recentReports.map((report) => (
          <div
            key={report.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-medium">{report.title}</h3>
              <p className="text-sm text-muted-foreground">{report.date}</p>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                report.status === "Completed"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
              }`}
            >
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}