"use client";

import { MainNav } from "@/components/layout/main-nav";
import { DashboardHeader } from "@/components/dashboard/header/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 border-r bg-muted/10 p-6 lg:block">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">AIgenix</span>
            </div>
            <MainNav />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}