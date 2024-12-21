"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  Calendar,
  Settings,
  MessageSquare,
  Bell,
  FileText,
  Database,
  Blocks,
  Key,
  DollarSign,
  Facebook,
  Twitter,
  Music,
  Instagram
} from "lucide-react";

// Define the routes for your AIgenix project
const routes = [
  {
    sectionTitle: "Dashboard",
    items: [
      {
        label: "Dashboard",
        icon: Home,
        href: "/dashboard",
      },
      {
        label: "Competitors",
        icon: Users,
        href: "/dashboard/competitors",
      },
      {
        label: "Content Management",
        icon: Calendar,
        href: "/dashboard/content",
      },
      {
        label: "Data Management",
        icon: Database,
        href: "/dashboard/data-management",
      },
      {
        label: "Engagement",
        icon: MessageSquare,
        href: "/dashboard/engagement",
      },
      {
        label: "Notifications",
        icon: Bell,
        href: "/dashboard/notifications",
      },
    ],
  },
  {
    sectionTitle: "Analytics",
    items: [
      {
        label: "Facebook",
        icon: Facebook,
        href: "/dashboard/analytics/facebook",
      },
      {
        label: "Twitter",
        icon: Twitter,
        href: "/dashboard/analytics/twitter",
      },
      {
        label: "Instagram",
        icon: Instagram,
        href: "/dashboard/analytics/tiktok",
      },
      {
        label: "TikTok",
        icon: Music,
        href: "/dashboard/analytics/tiktok",
      },
    ],
  },
  {
    sectionTitle: "Settings",
    items: [
      {
        label: "General Settings",
        icon: Settings,
        href: "/dashboard/settings",
      },
      {
        label: "Pricing",
        icon: DollarSign,
        href: "/dashboard/settings/pricing",
      },
      {
        label: "Plugins",
        icon: Blocks,
        href: "/dashboard/settings/plugins",
      }
    ],
  },
  {
    sectionTitle: "HElp",
    items: [
      {
        label: "Support",
        icon: FileText,
        href: "/dashboard/support",
      },
      {
        label: "Documentation",
        icon: FileText,
        href: "/dashboard/docs",
      },
    ],
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {routes.map((section) => (
        <div key={section.sectionTitle}>
          {/* Section Title */}
          <p className="text-gray-500 text-xs uppercase px-3 py-2">{section.sectionTitle}</p>

          {/* Links for the section */}
          <div className="space-y-1">
            {section.items.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
                  pathname === route.href ? "bg-accent" : "transparent"
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
