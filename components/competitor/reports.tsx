import React from "react";

interface Report {
  title: string;
  description: string;
  downloadLink: string;
}

interface ReportsProps {
  reports: Report[];
}

export const Reports: React.FC<ReportsProps> = ({ reports = [] }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="space-y-4">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div
              key={index}
              className="p-4 rounded-md shadow-md border flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{report.title}</h3>
                <p className="text-gray-600">{report.description}</p>
              </div>
              <a
                href={report.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reports available.</p>
        )}
      </div>
    </div>
  );
};
