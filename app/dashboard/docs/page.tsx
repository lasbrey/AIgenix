import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Correct import
import { Button } from '@/components/ui/button';

const DocumentationPage = () => {
  return (
    <div className="documentation-page">
      <h1 className="text-3xl font-bold mb-6">Application Documentation</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg text-gray-700">
          Welcome to the documentation of our application. This guide will help
          you get familiar with the features, how to use the platform, and tips
          for maximizing its potential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the purpose of this application?</AccordionTrigger>
            <AccordionContent>
              This application helps users manage their tasks, track their progress, and improve productivity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I create a new task?</AccordionTrigger>
            <AccordionContent>
              You can create a new task by clicking on the "Add Task" button located at the top of the dashboard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How can I track my progress?</AccordionTrigger>
            <AccordionContent>
              Progress can be tracked through the "Progress Tracker" section, where you can view graphs and data related to completed tasks.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you need further assistance or have any questions not covered in
          this documentation, feel free to reach out to our support team.
        </p>
        <Button
        >
          Contact Support
        </Button>
      </section>
    </div>
  );
};

export default DocumentationPage;
