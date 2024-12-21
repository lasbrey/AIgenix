import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Hash, ArrowUp } from "lucide-react";

export default function TrendsPage() {
  const trends = [
    {
      keyword: "#ArtificialIntelligence",
      growth: "+125%",
      posts: "12.5K",
    },
    {
      keyword: "#DigitalTransformation",
      growth: "+82%",
      posts: "8.2K",
    },
    {
      keyword: "#Innovation",
      growth: "+65%",
      posts: "15.3K",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Trending Topics</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Trending Keywords
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trends.map((trend) => (
                <div
                  key={trend.keyword}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-3">
                    <Hash className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{trend.keyword}</p>
                      <p className="text-sm text-muted-foreground">{trend.posts} posts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <ArrowUp className="h-4 w-4" />
                    {trend.growth}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}