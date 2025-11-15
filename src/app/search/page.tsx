'use client';

import { Search as SearchIcon, MapPin, Star, Clock, TrendingUp, Stethoscope, Heart, Activity, Brain, Eye, Ear } from 'lucide-react';
import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingSearches = [
    { text: 'Cardiologist near me', icon: Heart },
    { text: 'COVID-19 vaccination', icon: Stethoscope },
    { text: 'Lab test booking', icon: Activity },
    { text: 'Pediatrician', icon: Stethoscope },
  ];

  const specialties = [
    { name: 'Cardiology', icon: Heart, color: 'bg-red-100 text-red-600' },
    { name: 'Neurology', icon: Brain, color: 'bg-purple-100 text-purple-600' },
    { name: 'Ophthalmology', icon: Eye, color: 'bg-blue-100 text-blue-600' },
    { name: 'ENT', icon: Ear, color: 'bg-green-100 text-green-600' },
    { name: 'General', icon: Stethoscope, color: 'bg-orange-100 text-orange-600' },
    { name: 'Orthopedics', icon: Activity, color: 'bg-teal-100 text-teal-600' },
  ];

  const nearbyDoctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 234,
      distance: '1.2 km',
      nextAvailable: 'Today, 3:00 PM',
      image: '👩‍⚕️',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      rating: 4.8,
      reviews: 189,
      distance: '2.5 km',
      nextAvailable: 'Tomorrow, 10:00 AM',
      image: '👨‍⚕️',
    },
    {
      name: 'Dr. Emily White',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 312,
      distance: '0.8 km',
      nextAvailable: 'Today, 5:30 PM',
      image: '👩‍⚕️',
    },
  ];

  const nearbyHospitals = [
    {
      name: 'City General Hospital',
      type: 'Multi-Specialty',
      rating: 4.7,
      distance: '1.5 km',
      services: ['Emergency', 'ICU', 'Surgery'],
    },
    {
      name: 'Metro Medical Center',
      type: 'Private Hospital',
      rating: 4.8,
      distance: '3.2 km',
      services: ['Cardiology', 'Neurology', 'Orthopedics'],
    },
  ];

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* Header with Search */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-heading-lg text-textPrimary mb-4">Search</h1>

        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
          <input
            type="text"
            placeholder="Search doctors, hospitals, specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-background rounded-input text-body text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-3 text-caption text-textSecondary">
          <MapPin size={16} />
          <span>Current Location: San Francisco, CA</span>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Trending Searches */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={20} className="text-primary" />
            <h2 className="text-heading-sm text-textPrimary">Trending Searches</h2>
          </div>
          <div className="space-y-2">
            {trendingSearches.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full bg-white rounded-button shadow-card p-3 flex items-center gap-3 text-left hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-secondary/20 rounded-chip flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-body text-textPrimary">{item.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Browse by Specialty */}
        <div>
          <h2 className="text-heading-sm text-textPrimary mb-3">Browse by Specialty</h2>
          <div className="grid grid-cols-3 gap-3">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <button
                  key={index}
                  className="bg-white rounded-card shadow-card p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 ${specialty.color} rounded-button flex items-center justify-center`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-caption text-textPrimary text-center">{specialty.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Nearby Doctors */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-heading-sm text-textPrimary">Nearby Doctors</h2>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="space-y-3">
            {nearbyDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-card shadow-card p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-button flex items-center justify-center text-3xl">
                    {doctor.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-textPrimary">{doctor.name}</h3>
                    <p className="text-caption text-textSecondary">{doctor.specialty}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-warning text-warning" />
                        <span className="text-caption text-textPrimary font-semibold">{doctor.rating}</span>
                        <span className="text-caption text-textSecondary">({doctor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-caption text-textSecondary">
                        <MapPin size={14} />
                        <span>{doctor.distance}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock size={14} className="text-success" />
                      <span className="text-caption text-success">Available: {doctor.nextAvailable}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2.5 rounded-button text-caption font-semibold mt-3">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-heading-sm text-textPrimary">Nearby Hospitals</h2>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="space-y-3">
            {nearbyHospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-card shadow-card p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-body font-semibold text-textPrimary">{hospital.name}</h3>
                    <p className="text-caption text-textSecondary">{hospital.type}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-warning text-warning" />
                    <span className="text-caption text-textPrimary font-semibold">{hospital.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-caption text-textSecondary mb-3">
                  <MapPin size={14} />
                  <span>{hospital.distance} away</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hospital.services.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary/20 text-primary rounded-chip text-caption-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
