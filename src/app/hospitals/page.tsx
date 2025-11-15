'use client';

import { ArrowLeft, Search, MapPin, Star, Phone, Navigation, Clock, Award, Stethoscope, Ambulance } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hospitals() {
  const router = useRouter();

  const hospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      type: 'Multi-Specialty',
      rating: 4.7,
      reviews: 892,
      distance: '1.5 km',
      address: '123 Medical Plaza, Downtown',
      phone: '+1 (555) 123-4567',
      services: ['Emergency', 'ICU', 'Surgery', 'Cardiology'],
      beds: 500,
      doctors: 120,
      image: '🏥',
      emergency: true,
    },
    {
      id: 2,
      name: 'Metro Medical Center',
      type: 'Private Hospital',
      rating: 4.8,
      reviews: 654,
      distance: '3.2 km',
      address: '456 Health Avenue, Midtown',
      phone: '+1 (555) 234-5678',
      services: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'],
      beds: 350,
      doctors: 85,
      image: '🏥',
      emergency: true,
    },
    {
      id: 3,
      name: 'Children\'s Hospital',
      type: 'Specialized',
      rating: 4.9,
      reviews: 1243,
      distance: '2.8 km',
      address: '789 Kids Care Street',
      phone: '+1 (555) 345-6789',
      services: ['Pediatrics', 'Neonatology', 'Surgery', 'Emergency'],
      beds: 200,
      doctors: 65,
      image: '🏥',
      emergency: true,
    },
    {
      id: 4,
      name: 'Wellness Clinic',
      type: 'Outpatient Center',
      rating: 4.6,
      reviews: 324,
      distance: '0.8 km',
      address: '321 Wellness Road',
      phone: '+1 (555) 456-7890',
      services: ['General Practice', 'Diagnostics', 'Pharmacy'],
      beds: 50,
      doctors: 25,
      image: '🏥',
      emergency: false,
    },
  ];

  const filters = [
    { label: 'Emergency', active: false },
    { label: 'Nearby', active: false },
    { label: 'Top Rated', active: false },
    { label: '24/7', active: false },
  ];

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <button onClick={() => router.back()} className="mb-4 p-2 -ml-2 hover:bg-background rounded-button">
          <ArrowLeft size={24} className="text-textPrimary" />
        </button>
        <h1 className="text-heading-lg text-textPrimary mb-4">Hospitals & Clinics</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
          <input
            type="text"
            placeholder="Search hospitals, clinics..."
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
        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-error to-warning rounded-card p-4 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-button flex items-center justify-center">
              <Ambulance size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold">Emergency?</h3>
              <p className="text-caption opacity-90">Find nearest hospital with emergency services</p>
            </div>
            <button className="px-4 py-2 bg-white text-error rounded-button text-caption font-semibold">
              Call 911
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-chip whitespace-nowrap text-caption font-semibold transition-colors ${
                filter.active
                  ? 'bg-primary text-white'
                  : 'bg-white text-textSecondary shadow-card'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Hospitals List */}
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-card shadow-card p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4 mb-3">
                <div className="w-16 h-16 bg-secondary/20 rounded-button flex items-center justify-center text-4xl flex-shrink-0">
                  {hospital.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-textPrimary">{hospital.name}</h3>
                      <p className="text-caption text-textSecondary">{hospital.type}</p>
                    </div>
                    {hospital.emergency && (
                      <span className="px-2 py-1 bg-error/10 text-error rounded-chip text-caption-sm font-semibold flex-shrink-0">
                        24/7 Emergency
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-warning text-warning" />
                      <span className="text-caption text-textPrimary font-semibold">{hospital.rating}</span>
                      <span className="text-caption text-textSecondary">({hospital.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-caption text-textSecondary">
                      <MapPin size={14} />
                      <span>{hospital.distance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-3 pb-3 border-b border-background">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Stethoscope size={16} className="text-primary" />
                    <span className="text-body font-semibold text-textPrimary">{hospital.doctors}</span>
                  </div>
                  <p className="text-caption-sm text-textSecondary">Doctors</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Award size={16} className="text-primary" />
                    <span className="text-body font-semibold text-textPrimary">{hospital.beds}</span>
                  </div>
                  <p className="text-caption-sm text-textSecondary">Beds</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Clock size={16} className="text-primary" />
                    <span className="text-body font-semibold text-textPrimary">24/7</span>
                  </div>
                  <p className="text-caption-sm text-textSecondary">Open</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-3">
                <div className="flex items-start gap-2 text-caption text-textSecondary mb-2">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  <span>{hospital.address}</span>
                </div>
                <div className="flex items-center gap-2 text-caption text-textSecondary">
                  <Phone size={14} />
                  <span>{hospital.phone}</span>
                </div>
              </div>

              {/* Services */}
              <div className="mb-3">
                <p className="text-caption text-textSecondary mb-2">Services:</p>
                <div className="flex flex-wrap gap-2">
                  {hospital.services.map((service, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary/20 text-primary rounded-chip text-caption-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 py-2.5 bg-primary text-white rounded-button text-caption font-semibold">
                  <Navigation size={16} />
                  <span>Directions</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 border border-primary text-primary rounded-button text-caption font-semibold">
                  <Phone size={16} />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Map View CTA */}
        <div className="bg-white rounded-card shadow-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-body font-semibold text-textPrimary">View on Map</h3>
              <p className="text-caption text-textSecondary">See all hospitals on interactive map</p>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-button text-caption font-semibold">
              Open Map
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
