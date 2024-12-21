"use client";

import { SearchBar } from "./search";
import { Notifications } from "./notifications";
import { UserMenu } from "./user-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-2 font-semibold">
          AIgenix
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchBar />
          <Notifications />
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}