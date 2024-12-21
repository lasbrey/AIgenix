"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const accounts = [
  {
    platform: "Twitter",
    followers: "12.8K",
    engagement: "4.2%",
    icon: Twitter,
    color: "text-blue-400",
  },
  {
    platform: "Instagram",
    followers: "24.5K",
    engagement: "5.8%",
    icon: Instagram,
    color: "text-pink-500",
  },
  {
    platform: "LinkedIn",
    followers: "8.2K",
    engagement: "3.1%",
    icon: Linkedin,
    color: "text-blue-600",
  },
  {
    platform: "Facebook",
    followers: "15.3K",
    engagement: "2.9%",
    icon: Facebook,
    color: "text-blue-500",
  },
];

export function SocialAccounts() {
  return (
    <>
      {accounts.map((account) => (
        <Card key={account.platform}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`p-2 bg-primary/10 rounded-full ${account.color}`}>
                <account.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">{account.platform}</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold">{account.followers}</p>
                  <span className="text-sm text-muted-foreground">
                    {account.engagement} eng.
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}