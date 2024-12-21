"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Email Notifications",
    description: "Receive email notifications for important updates",
    id: "email",
  },
  {
    title: "Push Notifications",
    description: "Receive push notifications on your device",
    id: "push",
  },
  {
    title: "Weekly Reports",
    description: "Receive weekly performance reports",
    id: "reports",
  },
  {
    title: "AI Insights",
    description: "Get notified about new AI-generated insights",
    id: "ai",
  },
];

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between space-x-4">
            <div>
              <Label htmlFor={notification.id} className="font-medium">
                {notification.title}
              </Label>
              <p className="text-sm text-muted-foreground">{notification.description}</p>
            </div>
            <Switch id={notification.id} defaultChecked />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}