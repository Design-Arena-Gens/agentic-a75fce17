'use client';

import { Calendar, Clock, MapPin, Video, ChevronRight, Filter, Plus } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '2:30 PM',
      location: 'City General Hospital',
      type: 'video',
      status: 'upcoming',
      image: '👩‍⚕️',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      date: 'Tomorrow',
      time: '10:00 AM',
      location: 'Metro Medical Center',
      type: 'in-person',
      status: 'upcoming',
      image: '👨‍⚕️',
    },
    {
      id: 3,
      doctor: 'Dr. Emily White',
      specialty: 'Pediatrician',
      date: 'Dec 18',
      time: '3:00 PM',
      location: 'Children\'s Hospital',
      type: 'video',
      status: 'upcoming',
      image: '👩‍⚕️',
    },
    {
      id: 4,
      doctor: 'Dr. James Brown',
      specialty: 'Orthopedic',
      date: 'Dec 12',
      time: '11:30 AM',
      location: 'City General Hospital',
      type: 'in-person',
      status: 'completed',
      image: '👨‍⚕️',
    },
  ];

  const tabs = ['Upcoming', 'Completed', 'Cancelled'];
  const activeTab = 'Upcoming';

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-heading-lg text-textPrimary">Appointments</h1>
          <button className="p-2 bg-primary text-white rounded-button">
            <Plus size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-chip text-caption font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-background text-textSecondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Filter */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-button shadow-card text-caption text-textPrimary">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-white rounded-button shadow-card text-caption text-textSecondary">
            This Week
          </button>
          <button className="px-4 py-2 bg-white rounded-button shadow-card text-caption text-textSecondary">
            Video Only
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments
            .filter((apt) => apt.status === 'upcoming')
            .map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-card shadow-card p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-button flex items-center justify-center text-3xl flex-shrink-0">
                    {appointment.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-1">
                        <h3 className="text-body font-semibold text-textPrimary">
                          {appointment.doctor}
                        </h3>
                        <p className="text-caption text-textSecondary">
                          {appointment.specialty}
                        </p>
                      </div>
                      <ChevronRight size={20} className="text-textSecondary flex-shrink-0 ml-2" />
                    </div>

                    <div className="space-y-1 mt-3">
                      <div className="flex items-center gap-2 text-caption text-textSecondary">
                        <Calendar size={16} className="flex-shrink-0" />
                        <span>{appointment.date}</span>
                        <Clock size={16} className="flex-shrink-0 ml-2" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-caption text-textSecondary">
                        {appointment.type === 'video' ? (
                          <>
                            <Video size={16} className="flex-shrink-0" />
                            <span>Video Consultation</span>
                          </>
                        ) : (
                          <>
                            <MapPin size={16} className="flex-shrink-0" />
                            <span>{appointment.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {appointment.type === 'video' && (
                        <button className="flex-1 bg-primary text-white py-2.5 rounded-button text-caption font-semibold">
                          Join Call
                        </button>
                      )}
                      <button className={`${appointment.type === 'video' ? 'flex-1' : 'w-full'} border border-primary text-primary py-2.5 rounded-button text-caption font-semibold`}>
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Calendar View CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-card p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-heading-sm mb-1">View Calendar</h3>
              <p className="text-caption opacity-90">See all your appointments in calendar view</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-button flex items-center justify-center">
              <Calendar size={24} />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
