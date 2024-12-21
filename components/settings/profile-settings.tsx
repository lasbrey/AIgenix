"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilIcon } from "lucide-react";

export function ProfileSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your profile information and preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Name</p>
            <p className="text-sm text-muted-foreground">John Doe</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Edit
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Email</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Edit
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Bio</p>
            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Edit
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Theme</p>
            <p className="text-sm text-muted-foreground">Light Mode</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Change
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Language</p>
            <p className="text-sm text-muted-foreground">English</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Change
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Account Status</p>
            <p className="text-sm text-muted-foreground">Active</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Update
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium">Privacy Settings</p>
            <p className="text-sm text-muted-foreground">Public Profile</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<PencilIcon />}>
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
