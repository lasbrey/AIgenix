"use client";

import { SearchBar } from "@/components/dashboard/search/search-bar";
import { Notifications } from "@/components/dashboard/header/notifications";
import { UserNav } from "@/components/layout/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle/>
          <Notifications />
          <UserNav />
        </div>
      </div>
    </header>
  );
}