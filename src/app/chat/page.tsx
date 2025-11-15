'use client';

import { Send, Paperclip, Mic, Bot, Search, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

export default function Chat() {
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      lastMessage: 'Your test results look good. See you next week.',
      time: '10:30 AM',
      unread: 2,
      image: '👩‍⚕️',
      online: true,
    },
    {
      id: 2,
      name: 'AI Health Assistant',
      lastMessage: 'I can help you with symptom checking and health tips.',
      time: 'Yesterday',
      unread: 0,
      image: '🤖',
      online: true,
      isBot: true,
    },
    {
      id: 3,
      name: 'Dr. Michael Chen',
      lastMessage: 'Don\'t forget to take your medication twice daily.',
      time: 'Dec 12',
      unread: 0,
      image: '👨‍⚕️',
      online: false,
    },
    {
      id: 4,
      name: 'City General Hospital',
      lastMessage: 'Your appointment is confirmed for tomorrow at 2:30 PM',
      time: 'Dec 11',
      unread: 1,
      image: '🏥',
      online: true,
    },
    {
      id: 5,
      name: 'Dr. Emily White',
      lastMessage: 'The vaccination is scheduled. Please arrive 15 minutes early.',
      time: 'Dec 10',
      unread: 0,
      image: '👩‍⚕️',
      online: false,
    },
  ];

  const quickActions = [
    { icon: Bot, label: 'AI Assistant', color: 'bg-primary' },
    { label: 'Symptom Check' },
    { label: 'Find Doctor' },
    { label: 'Emergency' },
  ];

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-heading-lg text-textPrimary">Messages</h1>
          <button className="p-2 hover:bg-background rounded-button">
            <Search size={24} className="text-textPrimary" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-12 pr-4 py-3 bg-background rounded-input text-body text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Quick Actions */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-button shadow-card whitespace-nowrap hover:shadow-lg transition-shadow"
              >
                {Icon && (
                  <div className={`w-8 h-8 ${action.color || 'bg-secondary'} text-white rounded-chip flex items-center justify-center`}>
                    <Icon size={18} />
                  </div>
                )}
                <span className="text-caption text-textPrimary">{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* AI Assistant Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-card p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-button flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold">AI Health Assistant</h3>
              <p className="text-caption opacity-90">24/7 health support at your fingertips</p>
            </div>
            <button className="px-4 py-2 bg-white text-primary rounded-button text-caption font-semibold">
              Chat
            </button>
          </div>
        </div>

        {/* Conversations List */}
        <div>
          <h2 className="text-heading-sm text-textPrimary mb-3">Recent Conversations</h2>
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                className="w-full bg-white rounded-card shadow-card p-4 flex items-center gap-4 text-left hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-secondary/20 rounded-button flex items-center justify-center text-2xl">
                    {conversation.image}
                  </div>
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-success border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-body font-semibold text-textPrimary truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-caption-sm text-textSecondary ml-2 flex-shrink-0">
                      {conversation.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-caption text-textSecondary truncate flex-1">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-caption-sm font-semibold ml-2 flex-shrink-0">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-white rounded-card shadow-card p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-secondary/20 rounded-chip flex items-center justify-center">
              💡
            </div>
            <h3 className="text-body font-semibold text-textPrimary">Health Tip of the Day</h3>
          </div>
          <p className="text-caption text-textSecondary">
            Stay hydrated! Drinking 8 glasses of water daily helps maintain body temperature,
            keeps joints lubricated, and supports overall health.
          </p>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
