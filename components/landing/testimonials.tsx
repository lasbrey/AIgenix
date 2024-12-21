"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "This platform has revolutionized our social media strategy. The AI-powered insights are invaluable."
  },
  {
    name: "Michael Chen",
    role: "Social Media Manager",
    company: "Growth Co",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The automated content suggestions save us hours of work while maintaining high engagement."
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Strategist",
    company: "Creative Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "An essential tool for any modern social media team. The analytics are incredibly detailed."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">Join thousands of satisfied customers</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}