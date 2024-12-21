"use client";

import { motion } from "framer-motion";
import { Bot, BarChart3, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Content Generation",
    description: "Generate engaging posts tailored to your audience with advanced AI."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance metrics and gain actionable insights."
  },
  {
    icon: Users,
    title: "Audience Analysis",
    description: "Understand your followers better with AI-powered audience insights."
  },
  {
    icon: Zap,
    title: "Automated Scheduling",
    description: "Schedule posts at optimal times for maximum engagement."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">Everything you need to succeed on social media</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}