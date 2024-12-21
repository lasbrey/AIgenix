import { Button } from "@/components/ui/button";
import React from "react";

interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
  plugins: string; // Add a plugins field to specify the number of plugins
  isRecommended?: boolean; // Flag to highlight the recommended plan
}

const pricingData: PricingPlan[] = [
  {
    plan: "Basic",
    price: "$19/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Support"],
    plugins: "5 Plugins", // Specify the plugin count for Basic plan
  },
  {
    plan: "Pro",
    price: "$49/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Priority Support", "Analytics"],
    plugins: "10 Plugins", // Specify the plugin count for Pro plan
    isRecommended: true, // Mark as recommended
  },
  {
    plan: "Enterprise",
    price: "$99/month",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "24/7 Support",
      "Custom Analytics",
      "Dedicated Account Manager",
    ],
    plugins: "Unlimited Plugins", // Specify unlimited plugins for Enterprise
  },
];

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`${
              plan.isRecommended ? "bg-red-100 border-2 border-red-500" : "bg-white"
            } relative p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
          >
            {plan.isRecommended && (
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Recommended
              </div>
            )}
            <h3 className="text-2xl font-bold text-center">{plan.plan}</h3>
            <p className="text-center text-xl font-semibold my-4">{plan.price}</p>
            <ul className="list-inside list-disc pl-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <p className="mt-4 text-center font-semibold text-gray-700">{plan.plugins}</p>
            <div className="mt-4 text-center">
              <Button className="w-full ">
                Select Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
