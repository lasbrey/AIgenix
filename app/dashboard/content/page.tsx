"use client";

import { useState } from "react";
import { SuggestedPosts } from "@/components/content/suggested-posts";
import { ContentPreviews } from "@/components/content/content-previews";
import { ContentGenerator } from "@/components/content/content-generator";
import { ContentLibrary } from "@/components/content/content-library";
import { ContentCalendar } from "@/components/content/content-calendar";
import { ContentAnalytics } from "@/components/content/content-analytics";
import { TrendingTopics } from "@/components/content/trending-topics";

export default function ContentPage() {
  const [selectedSection, setSelectedSection] = useState("suggested");

  const handleNavigation = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Content Management</h1>
      <div className="flex space-x-8 p-6">

        {/* Sidebar */}
        <div className="w-1/4">
          <nav className="space-y-4">
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("suggested")}
            >
              Suggested Posts
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("previews")}
            >
              Platform Previews
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("generator")}
            >
              AI Generator
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("library")}
            >
              Content Library
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("calendar")}
            >
              Calendar
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("analytics")}
            >
              Analytics
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("trends")}
            >
              Trending Topics
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="w-3/4">

          {/* Render the selected section */}
          {selectedSection === "suggested" && <SuggestedPosts />}
          {selectedSection === "previews" && <ContentPreviews />}
          {selectedSection === "generator" && <ContentGenerator />}
          {selectedSection === "library" && <ContentLibrary />}
          {selectedSection === "calendar" && <ContentCalendar />}
          {selectedSection === "analytics" && <ContentAnalytics />}
          {selectedSection === "trends" && <TrendingTopics />}
        </div>
      </div>
    </div>

  );
}
