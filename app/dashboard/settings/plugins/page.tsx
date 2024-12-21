"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; 

const PluginPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const availablePlugins = [
        {
            id: 1,
            name: "Video Editor Pro",
            description: "A professional-grade video editing plugin for trimming, effects, and transitions.",
            image: "https://via.placeholder.com/150",
            rating: 2.5,
            installs: "1,000+",
            author: "Lazarus Lawal",
        },
        {
            id: 2,
            name: "Audio Enhancer",
            description: "Enhances audio quality by reducing noise, boosting bass, and adding effects to your content.",
            image: "https://via.placeholder.com/150",
            rating: 4.8,
            installs: "500+",
            author: "Lazarus Lawal",
        },
        {
            id: 3,
            name: "Image Optimizer",
            description: "Optimizes images for faster loading times without compromising quality.",
            image: "https://via.placeholder.com/150",
            rating: 3.0,
            installs: "300+",
            author: "Lazarus Lawal",
        },
        {
            id: 4,
            name: "Social Media Integration",
            description: "Connects your platform with social media channels to automate sharing and posting.",
            image: "https://via.placeholder.com/150",
            rating: 4.2,
            installs: "250+",
            author: "Lazarus Lawal",
        },
    ];

    // Filter plugins based on the search term
    const filteredPlugins = availablePlugins.filter(plugin =>
        plugin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle plugin installation
    const handleInstallPlugin = (pluginName: string) => {
        setAlertMessage(`Successfully installed ${pluginName}!`); // Show success message
        setTimeout(() => setAlertMessage(null), 3000); // Clear the alert after 3 seconds
    };

    return (
        <div className="plugin-page">
            <h1 className="text-3xl font-bold mb-6">Browse and Install Plugins</h1>

            {/* Search bar */}
            <div className="search-bar mb-4">
                <Input type="text"
                    placeholder="Search plugins..."
                    value={searchTerm}
                    onChange={handleSearchChange} />
            </div>

            {/* Display the alert message if it exists */}
            {alertMessage && (
                <Alert variant="default" className="mb-4">
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>{alertMessage}</AlertDescription>
                </Alert>
            )}

            {/* Plugin List */}
            <div className="plugin-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredPlugins.length > 0 ? (
                    filteredPlugins.map(plugin => (
                        <div
                            key={plugin.id}
                            className="plugin-card p-6 bg-white shadow-lg rounded-lg flex flex-col space-y-4"
                        >
                            {/* Header Section */}
                            <div className="flex justify-between items-start">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-xl font-semibold">{plugin.name}</h2>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-yellow-500">{'★'.repeat(Math.floor(plugin.rating))}</span>

                                        <span className="text-sm">({plugin.rating})</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image and Description */}
                            <div className="plugin-image">
                                <img src={plugin.image} alt={plugin.name} className="w-full h-40 object-cover rounded-md" />
                            </div>
                            <p className="text-sm text-gray-700">{plugin.description}</p>

                            {/* Author and Installation Stats */}
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <div>
                                    <p className="font-semibold">{plugin.author}</p>
                                    <p>{plugin.installs} installs</p>
                                </div>
                                <Button onClick={() => handleInstallPlugin(plugin.name)}>
                                    Add to Project
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No plugins found. Please try a different search term.</p>
                )}
            </div>
        </div>
    );
};

export default PluginPage;
