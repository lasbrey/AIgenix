import React from "react";

interface ContentProps {
  platform: string;
  title: string;
  performance: string;
}

interface TopPerformingContentProps {
  content: ContentProps[];
}

export const TopPerformingContent: React.FC<TopPerformingContentProps> = ({
  content = [],
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top-Performing Content</h2>
      <ul className="space-y-4">
        {content.length > 0 ? (
          content.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-md shadow-md border"
            >
              <p>
                <strong>Platform:</strong> {item.platform}
              </p>
              <p>
                <strong>Title:</strong> {item.title}
              </p>
              <p>
                <strong>Performance:</strong> {item.performance}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No content data available.</p>
        )}
      </ul>
    </div>
  );
};
