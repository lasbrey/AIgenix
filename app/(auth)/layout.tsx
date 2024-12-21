"use client";

import { useTheme } from "next-themes";
import { Bot } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block bg-muted">
        <div className="h-full flex items-center justify-center p-8">
          <div className="space-y-6 max-w-lg">
            <Bot className="w-12 h-12 text-primary" />
            <h1 className="text-3xl font-bold">
              Transform Your Social Media Presence with AI
            </h1>
            <p className="text-muted-foreground">
              Join thousands of marketers and content creators who use our platform
              to grow their social media presence with AI-powered insights.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}