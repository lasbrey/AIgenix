"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function ContentPreviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Previews</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="instagram">
          <TabsList className="w-full">
            <TabsTrigger value="instagram" className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              Instagram
            </TabsTrigger>
            <TabsTrigger value="twitter" className="flex items-center gap-2">
              <Twitter className="h-4 w-4" />
              Twitter
            </TabsTrigger>
            <TabsTrigger value="linkedin" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </TabsTrigger>
            <TabsTrigger value="youtube" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              YouTube
            </TabsTrigger>
          </TabsList>

          <TabsContent value="instagram" className="mt-4">
            <div className="aspect-square max-w-sm mx-auto border rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10" />
                  <span className="font-medium">Your Profile</span>
                </div>
              </div>
              <div className="aspect-square bg-muted" />
              <div className="p-4">
                <p className="text-sm">Your caption will appear here...</p>
              </div>
            </div>
          </TabsContent>

          {/* Add similar preview layouts for other platforms like Twitter, LinkedIn, and YouTube */}
        </Tabs>
      </CardContent>
    </Card>
  );
}