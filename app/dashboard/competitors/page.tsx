"use client";

import { useState, useEffect } from "react";

// Importing individual components
import { CompetitorOverview } from "@/components/competitor/competitor-overview";
import { ComparativeAnalytics } from "@/components/competitor/comparative-analytics";
import { TopPerformingContent } from "@/components/competitor/top-performing-content";
import { EngagementBreakdown } from "@/components/competitor/engagement-breakdown";
import { PlatformInsights } from "@/components/competitor/platform-insights";
import { ContentGaps } from "@/components/competitor/content-gaps";
import { PostHistoryComparison } from "@/components/competitor/post-history-comparison";
import { HashtagAnalysis } from "@/components/competitor/hashtag-analysis";
import { Reports } from "@/components/competitor/reports";

// Importing JSON data
import overviewData from "@/utils/competitor/competitor-overview.json";
import analyticsData from "@/utils/competitor/comparative-analytics.json";
import topContentData from "@/utils/competitor/top-performing-content.json";
import engagementData from "@/utils/competitor/engagement-breakdown.json";
import platformInsightsData from "@/utils/competitor/platform-insights.json";
import contentGapsData from "@/utils/competitor/content-gaps.json";
import postHistoryData from "@/utils/competitor/post-history-comparison.json";
import hashtagData from "@/utils/competitor/hashtag-analysis.json";
import reportsData from "@/utils/competitor/reports.json";

export default function CompetitorAnalysisPage() {
  const [selectedSection, setSelectedSection] = useState("overview");

  const handleNavigation = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Competitor Analysis</h1>
      <div className="flex space-x-8 p-6">
        {/* Sidebar */}
        <div className="w-1/4">
        <nav className="space-y-4">
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left ${selectedSection === "overview" ? "bg-gray-200" : ""
                }`}
              onClick={() => handleNavigation("overview")}
            >
              Competitor Overview
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "analytics" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("analytics")}
            >
              Comparative Analytics
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "top-content" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("top-content")}
            >
              Top-Performing Content
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "engagement" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("engagement")}
            >
              Engagement Breakdown
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "platform" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("platform")}
            >
              Platform Insights
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "content-gaps" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("content-gaps")}
            >
              Content Gaps
            </button>

            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "history" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("history")}
            >
              Post History Comparison
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "hashtags" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("hashtags")}
            >
              Hashtag & Keyword Analysis
            </button>
            <button
              className={`text-lg font-semibold p-2 hover:bg-gray-100 hover:text-black rounded-md w-full text-left ${selectedSection === "reports" ? "bg-gray-200 text-black" : ""
                }`}
              onClick={() => handleNavigation("reports")}
            >
              Reports
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="w-3/4">
          {selectedSection === "overview" && <CompetitorOverview competitors={overviewData} />}
          {selectedSection === "analytics" && <ComparativeAnalytics data={analyticsData} />}
          {selectedSection === "top-content" && <TopPerformingContent content={topContentData} />}
          {selectedSection === "engagement" && <EngagementBreakdown data={engagementData} />}
          {selectedSection === "platform" && <PlatformInsights insights={platformInsightsData} />}
          {selectedSection === "content-gaps" && <ContentGaps gaps={contentGapsData} />}
          {selectedSection === "history" && <PostHistoryComparison history={postHistoryData} />}
          {selectedSection === "hashtags" && <HashtagAnalysis hashtags={hashtagData} />}
          {selectedSection === "reports" && <Reports reports={reportsData} />}
        </div>
      </div>
    </div>
  );
}
