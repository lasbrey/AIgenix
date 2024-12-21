"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Youtube, Twitter, Linkedin,Facebook, Music } from "lucide-react";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: Instagram,
    connected: true,
    username: "@johndoe",
  },
  {
    name: "Facebook",
    icon: Facebook,
    connected: false,
    username: "@johndoe",
  },
  {
    name: "YouTube",
    icon: Youtube,
    connected: false,
  },
  {
    name: "Twitter",
    icon: Twitter,
    connected: true,
    username: "@johndoe",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    connected: false,
  },
  {
    name: "Tiktok",
    icon: Music,
    connected: true,
    username: "@johndoe",
  },
];

export function SocialAccounts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Accounts</CardTitle>
        <CardDescription>Manage your connected social media accounts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <platform.icon className="h-6 w-6" />
              <div>
                <p className="font-medium">{platform.name}</p>
                {platform.connected && (
                  <p className="text-sm text-muted-foreground">{platform.username}</p>
                )}
              </div>
            </div>
            <Button variant={platform.connected ? "destructive" : "success"}>
              {platform.connected ? "Disconnect" : "Connect"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}