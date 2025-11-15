'use client';

import { ArrowLeft, Star, MapPin, Clock, Award, GraduationCap, Briefcase, Heart, ThumbsUp, Calendar, Video, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DoctorDetail() {
  const router = useRouter();

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: '👩‍⚕️',
    rating: 4.9,
    reviews: 234,
    patients: '2,500+',
    experience: '15 years',
    location: 'City General Hospital',
    distance: '1.2 km',
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience. She specializes in preventive cardiology, heart disease management, and cardiac rehabilitation. Dr. Johnson is known for her patient-centered approach and dedication to providing comprehensive cardiovascular care.',
    education: [
      { degree: 'MD - Cardiology', institution: 'Harvard Medical School', year: '2008' },
      { degree: 'MBBS', institution: 'Stanford University', year: '2003' },
    ],
    expertise: [
      'Heart Disease',
      'Hypertension',
      'Cardiac Rehabilitation',
      'Preventive Cardiology',
      'Arrhythmia',
      'Heart Failure',
    ],
    availableSlots: [
      { date: 'Today', slots: ['2:30 PM', '4:00 PM', '5:30 PM'] },
      { date: 'Tomorrow', slots: ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'] },
      { date: 'Dec 16', slots: ['9:00 AM', '10:30 AM', '2:30 PM'] },
    ],
    consultationFee: '$150',
  };

  const stats = [
    { icon: ThumbsUp, value: '98%', label: 'Satisfaction' },
    { icon: Award, value: '15+', label: 'Years Exp.' },
    { icon: Heart, value: '2,500+', label: 'Patients' },
  ];

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8">
        <button onClick={() => router.back()} className="mb-4 p-2 -ml-2 hover:bg-white/10 rounded-button">
          <ArrowLeft size={24} />
        </button>

        <div className="flex gap-4">
          <div className="w-24 h-24 bg-white/20 rounded-card flex items-center justify-center text-5xl">
            {doctor.image}
          </div>
          <div className="flex-1">
            <h1 className="text-heading-md mb-1">{doctor.name}</h1>
            <p className="text-body opacity-90">{doctor.specialty}</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-warning text-warning" />
                <span className="text-body font-semibold">{doctor.rating}</span>
                <span className="text-caption opacity-90">({doctor.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-caption opacity-90">
                <MapPin size={14} />
                <span>{doctor.distance}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-button p-3 text-center">
                <Icon size={24} className="mx-auto mb-1" />
                <p className="text-body font-semibold">{stat.value}</p>
                <p className="text-caption-sm opacity-90">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white rounded-button shadow-card p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-chip flex items-center justify-center">
              <Video size={24} className="text-primary" />
            </div>
            <span className="text-caption text-textPrimary">Video Call</span>
          </button>
          <button className="bg-white rounded-button shadow-card p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-chip flex items-center justify-center">
              <Calendar size={24} className="text-primary" />
            </div>
            <span className="text-caption text-textPrimary">In-Person</span>
          </button>
          <button className="bg-white rounded-button shadow-card p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-chip flex items-center justify-center">
              <Phone size={24} className="text-primary" />
            </div>
            <span className="text-caption text-textPrimary">Call</span>
          </button>
        </div>

        {/* About */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-textPrimary mb-3">About</h2>
          <p className="text-body text-textSecondary leading-relaxed">{doctor.about}</p>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-background">
            <MapPin size={18} className="text-primary" />
            <span className="text-body text-textPrimary">{doctor.location}</span>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={24} className="text-primary" />
            <h2 className="text-heading-sm text-textPrimary">Education</h2>
          </div>
          <div className="space-y-3">
            {doctor.education.map((edu, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-chip flex items-center justify-center flex-shrink-0">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-textPrimary">{edu.degree}</h3>
                  <p className="text-caption text-textSecondary">{edu.institution}</p>
                  <p className="text-caption text-textSecondary">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-textPrimary mb-3">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {doctor.expertise.map((area, index) => (
              <span key={index} className="px-4 py-2 bg-secondary/20 text-primary rounded-chip text-caption font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Available Slots */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-heading-sm text-textPrimary">Available Slots</h2>
            <span className="text-body text-primary font-semibold">{doctor.consultationFee}</span>
          </div>
          <div className="space-y-4">
            {doctor.availableSlots.map((day, index) => (
              <div key={index}>
                <p className="text-body font-semibold text-textPrimary mb-2">{day.date}</p>
                <div className="flex flex-wrap gap-2">
                  {day.slots.map((slot, slotIndex) => (
                    <button
                      key={slotIndex}
                      className="px-4 py-2 border-2 border-primary text-primary rounded-button text-caption font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Summary */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-heading-sm text-textPrimary">Patient Reviews</h2>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="flex items-center gap-6 mb-4">
            <div className="text-center">
              <p className="text-heading-lg text-textPrimary">{doctor.rating}</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warning text-warning" />
                ))}
              </div>
              <p className="text-caption text-textSecondary mt-1">{doctor.reviews} reviews</p>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-caption text-textSecondary w-3">{rating}</span>
                  <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-warning"
                      style={{ width: `${rating === 5 ? 85 : rating === 4 ? 12 : 3}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-background p-4 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <div className="max-w-lg mx-auto">
          <button className="w-full bg-primary text-white py-4 rounded-button text-body font-semibold shadow-card hover:bg-primary/90 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </main>
  );
}
