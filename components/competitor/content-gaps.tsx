import React from "react";

interface ContentGapsProps {
  gaps: string[];
}

export const ContentGaps: React.FC<ContentGapsProps> = ({ gaps = [] }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Content Gaps</h2>
      <ul className="list-disc pl-6">
        {gaps.length > 0 ? (
          gaps.map((gap, index) => (
            <li key={index} className="text-gray-700">
              {gap}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No content gaps identified.</p>
        )}
      </ul>
    </div>
  );
};
