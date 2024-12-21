"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert"; // Optional: Use this if you'd like to show messages after form submission

const SupportPage = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(true);

        // Logic to handle form submission, e.g., send data to a backend or API.
        // After successful submission, reset the form or display a success message.
        console.log({ userName, userEmail, userMessage });
    };

    return (
        <div className="support-page">
            <h1 className="text-3xl font-bold mb-6">Support</h1>

            {/* Introduction Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We're here to help! If you're having trouble with the application or have any questions, feel free to reach out. 
                    Below are some frequently asked questions and the form to contact our support team directly.
                </p>
            </section>

            {/* Common Support Topics */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
                <ul className="list-disc ml-6 text-lg text-gray-700">
                    <li>How to sync devices with the app.</li>
                    <li>How to monitor family members' health data.</li>
                    <li>Understanding alerts and notifications.</li>
                    <li>How to install and manage plugins.</li>
                </ul>
                <p className="mt-4 text-lg text-gray-700">
                    If you're experiencing any of these issues or need assistance with any other feature, feel free to contact us below.
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Our Support Team</h2>

                {/* Success Message (optional) */}
                {isFormSubmitted && (
                    <Alert variant="success" className="mb-4">
                        <p>Thank you for reaching out! We'll get back to you as soon as possible.</p>
                    </Alert>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg text-gray-700">Your Name</label>
                        <Input
                            type="text"
                            id="name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg text-gray-700">Your Email</label>
                        <Input
                            type="email"
                            id="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
                        <Textarea
                            id="message"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            required
                            className="w-full"
                        />
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </section>

            {/* Alternative Contact Options */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
                <p className="text-lg text-gray-700">
                    If you prefer to reach us via other channels, you can use the following methods:
                </p>
                <ul className="list-disc ml-6 text-lg text-gray-700">
                    <li>Email us at: <strong>support@yourapp.com</strong></li>
                    <li>Call us at: <strong>(123) 456-7890</strong></li>
                    <li>Visit our <strong>Help Center</strong> for more resources and guides.</li>
                </ul>
            </section>

            {/* End of Support Page */}
        </div>
    );
};

export default SupportPage;
