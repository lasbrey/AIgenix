'use client';

import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Message', description: 'You have a new message from John', isRead: false },
    { id: 2, title: 'Order Shipped', description: 'Your order has been shipped and is on its way!', isRead: true },
    { id: 3, title: 'Profile Update', description: 'Your profile has been successfully updated.', isRead: false },
  ]);
  
  const [unreadCount, setUnreadCount] = useState(notifications.filter(n => !n.isRead).length);

  const toggleReadStatus = (id: number) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: !notification.isRead } : notification
    );
    setNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter(n => !n.isRead).length);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setUnreadCount(0);
  };

  return (
    <div className="space-y-4">
      {/* Toaster for global notifications */}
      <Toaster />

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <Button onClick={clearNotifications}>
          Clear All
        </Button>
      </div>

      {/* Accordion for notifications */}
      <Accordion title="All Notifications">
        {notifications.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          <div className="space-y-4">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`p-4 rounded-md border ${notification.isRead ? 'bg-gray-100' : 'bg-blue-100'}`}
              >
                <h3 className="font-semibold">{notification.title}</h3>
                <p>{notification.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {notification.isRead ? 'Read' : 'Unread'}
                  </span>
                  <div className="space-x-2">
                    <Button
                      onClick={() => toggleReadStatus(notification.id)}
                      className="bg-green-800"
                    >
                      Mark as {notification.isRead ? 'Unread' : 'Read'}
                    </Button>
                    <Button
                      onClick={() => {
                        setNotifications(notifications.filter(n => n.id !== notification.id));
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Accordion>

    </div>
  );
};

export default NotificationPage;
