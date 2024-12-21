"use client";

import { useState } from "react";
import { ProfileSettings } from "@/components/settings/profile-settings";
import { AccountSettings } from "@/components/settings/account-settings";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { SocialAccounts } from "@/components/settings/social-accounts";

export default function SettingsPage() {
  const [selectedSection, setSelectedSection] = useState("profile");

  const handleNavigation = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="flex space-x-8 p-6">
        {/* Sidebar */}
        <div className="w-1/4">
          <nav className="space-y-4">
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("profile")}
            >
              Profile
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("account")}
            >
              Account Security
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("notifications")}
            >
              Notifications
            </button>
            <button
              className="text-lg font-semibold p-2 hover:bg-gray-100 rounded-md w-full text-left"
              onClick={() => handleNavigation("social")}
            >
              Social Accounts
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="w-3/4">

          {selectedSection === "profile" && <ProfileSettings />}
          {selectedSection === "account" && <AccountSettings />}
          {selectedSection === "notifications" && <NotificationSettings />}
          {selectedSection === "social" && <SocialAccounts />}
        </div>
      </div>
    </div>
  );
}
