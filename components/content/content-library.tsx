"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Upload } from "lucide-react";

const mediaItems = [
  {
    type: "image",
    title: "Product Launch Visual",
    date: "2024-03-15",
    platform: "Instagram",
    status: "Published",
  },
  {
    type: "video",
    title: "Tutorial Video",
    date: "2024-03-14",
    platform: "YouTube",
    status: "Draft",
  },
  {
    type: "image",
    title: "Team Photo",
    date: "2024-03-13",
    platform: "LinkedIn",
    status: "Scheduled",
  },
];

export function ContentLibrary() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Content Library</CardTitle>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search content..." />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="space-y-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-muted rounded" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.platform} • {item.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{item.status}</span>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}