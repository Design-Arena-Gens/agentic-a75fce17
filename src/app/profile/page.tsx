'use client';

import { ChevronRight, Bell, Lock, Heart, CreditCard, FileText, HelpCircle, LogOut, Settings, User as UserIcon, Calendar, Activity } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function Profile() {
  const healthStats = [
    { label: 'Heart Rate', value: '72 bpm', icon: Heart, color: 'text-red-500' },
    { label: 'Weight', value: '68 kg', icon: Activity, color: 'text-blue-500' },
    { label: 'Height', value: '170 cm', icon: Activity, color: 'text-green-500' },
  ];

  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: UserIcon, label: 'Personal Information', path: '/profile/personal' },
        { icon: Calendar, label: 'Medical History', path: '/profile/history' },
        { icon: FileText, label: 'Medical Records', path: '/profile/records', badge: '3' },
        { icon: CreditCard, label: 'Payment Methods', path: '/profile/payment' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', path: '/profile/notifications' },
        { icon: Settings, label: 'App Settings', path: '/profile/settings' },
        { icon: Lock, label: 'Privacy & Security', path: '/profile/privacy' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', path: '/profile/help' },
        { icon: FileText, label: 'Terms & Conditions', path: '/profile/terms' },
        { icon: FileText, label: 'Privacy Policy', path: '/profile/policy' },
      ],
    },
  ];

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* Header with Profile */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-heading-md">John Doe</h1>
            <p className="text-caption opacity-90">john.doe@email.com</p>
            <p className="text-caption opacity-90">+1 (555) 123-4567</p>
          </div>
          <button className="p-2 bg-white/20 rounded-button">
            <Settings size={24} />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          {healthStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-button p-3 text-center">
                <Icon size={24} className="mx-auto mb-1" />
                <p className="text-caption-sm opacity-90">{stat.label}</p>
                <p className="text-body font-semibold mt-1">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Health Score Card */}
        <div className="bg-gradient-to-br from-success to-primary rounded-card p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-caption opacity-90">Your Health Score</p>
              <p className="text-heading-lg">92/100</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Heart size={32} />
            </div>
          </div>
          <p className="text-caption opacity-90">Excellent! Keep up the good work.</p>
          <button className="mt-4 w-full bg-white text-primary py-2.5 rounded-button text-caption font-semibold">
            View Detailed Report
          </button>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-heading-sm text-textPrimary mb-3">{section.title}</h2>
            <div className="bg-white rounded-card shadow-card overflow-hidden">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    className={`w-full flex items-center gap-4 p-4 text-left hover:bg-background transition-colors ${
                      itemIndex < section.items.length - 1 ? 'border-b border-background' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-secondary/20 rounded-chip flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="flex-1 text-body text-textPrimary">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 bg-error text-white rounded-chip text-caption-sm font-semibold">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight size={20} className="text-textSecondary" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* App Version */}
        <div className="text-center">
          <p className="text-caption text-textSecondary">Version 1.0.0</p>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-white rounded-card shadow-card p-4 flex items-center justify-center gap-3 text-error hover:shadow-lg transition-shadow">
          <LogOut size={20} />
          <span className="text-body font-semibold">Logout</span>
        </button>
      </div>

      <BottomNav />
    </main>
  );
}
