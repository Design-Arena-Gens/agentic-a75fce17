'use client';

import { Bell, Heart, Activity, Clock, Star, MapPin, ChevronRight, Stethoscope, Syringe, TestTube, Building2 } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const upcomingAppointment = {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'Today, 2:30 PM',
    location: 'City General Hospital',
  };

  const quickActions = [
    { icon: Stethoscope, label: 'Find Doctor', color: 'bg-primary' },
    { icon: TestTube, label: 'Lab Tests', color: 'bg-secondary' },
    { icon: Building2, label: 'Hospitals', color: 'bg-primary' },
    { icon: Syringe, label: 'Vaccination', color: 'bg-secondary' },
  ];

  const specialties = [
    { name: 'Cardiology', count: '24 doctors', icon: Heart },
    { name: 'Neurology', count: '18 doctors', icon: Activity },
    { name: 'Pediatrics', count: '32 doctors', icon: Stethoscope },
    { name: 'Orthopedics', count: '21 doctors', icon: Activity },
  ];

  const topDoctors = [
    { name: 'Dr. Michael Chen', specialty: 'Cardiologist', rating: 4.9, reviews: 234, image: '👨‍⚕️' },
    { name: 'Dr. Emily White', specialty: 'Neurologist', rating: 4.8, reviews: 189, image: '👩‍⚕️' },
    { name: 'Dr. James Brown', specialty: 'Pediatrician', rating: 4.9, reviews: 312, image: '👨‍⚕️' },
  ];

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-caption opacity-90">Good Morning</p>
            <h1 className="text-heading-lg mt-1">John Doe</h1>
          </div>
          <button className="p-2 bg-white/20 rounded-button relative">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>

        {/* Health Status Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Heart size={24} />
          </div>
          <div className="flex-1">
            <p className="text-caption opacity-90">Health Score</p>
            <p className="text-heading-sm">Excellent - 92/100</p>
          </div>
          <ChevronRight size={20} />
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Upcoming Appointment */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-heading-sm text-textPrimary">Upcoming Appointment</h2>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="bg-white rounded-card shadow-card p-4">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-button flex items-center justify-center text-3xl">
                👨‍⚕️
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-textPrimary">{upcomingAppointment.doctor}</h3>
                <p className="text-caption text-textSecondary">{upcomingAppointment.specialty}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-caption text-textSecondary">
                    <Clock size={16} />
                    <span>{upcomingAppointment.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-caption text-textSecondary">
                    <MapPin size={16} />
                    <span>{upcomingAppointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-primary text-white py-3 rounded-button text-caption font-semibold">
                Start Video Call
              </button>
              <button className="flex-1 bg-background text-primary py-3 rounded-button text-caption font-semibold">
                Reschedule
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-heading-sm text-textPrimary mb-3">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button key={index} className="flex flex-col items-center gap-2">
                  <div className={`${action.color} w-16 h-16 rounded-button flex items-center justify-center text-white shadow-card`}>
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <span className="text-caption-sm text-textPrimary text-center">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specialties */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-heading-sm text-textPrimary">Specialties</h2>
            <button className="text-primary text-caption font-semibold">See All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <button key={index} className="bg-white rounded-card shadow-card p-4 text-left">
                  <div className="w-10 h-10 bg-secondary/20 rounded-chip flex items-center justify-center mb-2">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-body font-semibold text-textPrimary">{specialty.name}</h3>
                  <p className="text-caption text-textSecondary">{specialty.count}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Top Rated Doctors */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-heading-sm text-textPrimary">Top Rated Doctors</h2>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="space-y-3">
            {topDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-card shadow-card p-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-button flex items-center justify-center text-3xl">
                  {doctor.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-textPrimary">{doctor.name}</h3>
                  <p className="text-caption text-textSecondary">{doctor.specialty}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-warning text-warning" />
                      <span className="text-caption text-textPrimary font-semibold">{doctor.rating}</span>
                    </div>
                    <span className="text-caption text-textSecondary">({doctor.reviews} reviews)</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-textSecondary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
