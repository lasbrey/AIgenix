"use client";

import { Card } from "@/components/ui/card";
import { Brain, Rocket, Target, Wand2 } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes your audience and content performance"
  },
  {
    icon: Wand2,
    title: "Content Generation",
    description: "Generate engaging posts optimized for your audience"
  },
  {
    icon: Target,
    title: "Strategic Scheduling",
    description: "Schedule posts at peak engagement times"
  },
  {
    icon: Rocket,
    title: "Growth & Insights",
    description: "Track performance and optimize your strategy"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Simple steps to transform your social media presence</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-6">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="pt-4">
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}