'use client';

import { ArrowLeft, Calendar, Clock, Video, MapPin, CreditCard, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Booking() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('2:30 PM');
  const [consultationType, setConsultationType] = useState<'video' | 'in-person'>('video');
  const [selectedReason, setSelectedReason] = useState('Routine Checkup');

  const dates = ['Today', 'Tomorrow', 'Dec 16', 'Dec 17', 'Dec 18'];
  const timeSlots = ['9:00 AM', '10:30 AM', '2:30 PM', '4:00 PM', '5:30 PM'];
  const reasons = ['Routine Checkup', 'Follow-up Visit', 'New Symptoms', 'Test Results Review', 'Other'];

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: '👩‍⚕️',
    location: 'City General Hospital',
    consultationFee: 150,
  };

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <button onClick={() => router.back()} className="mb-4 p-2 -ml-2 hover:bg-background rounded-button">
          <ArrowLeft size={24} className="text-textPrimary" />
        </button>
        <h1 className="text-heading-lg text-textPrimary">Book Appointment</h1>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Doctor Card */}
        <div className="bg-white rounded-card shadow-card p-4">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-button flex items-center justify-center text-3xl">
              {doctor.image}
            </div>
            <div>
              <h2 className="text-body font-semibold text-textPrimary">{doctor.name}</h2>
              <p className="text-caption text-textSecondary">{doctor.specialty}</p>
              <div className="flex items-center gap-1 mt-1 text-caption text-textSecondary">
                <MapPin size={14} />
                <span>{doctor.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Type */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-textPrimary mb-3">Consultation Type</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setConsultationType('video')}
              className={`p-4 rounded-button border-2 transition-all ${
                consultationType === 'video'
                  ? 'border-primary bg-primary/5'
                  : 'border-background'
              }`}
            >
              <Video size={24} className={consultationType === 'video' ? 'text-primary' : 'text-textSecondary'} />
              <p className={`text-body font-semibold mt-2 ${consultationType === 'video' ? 'text-primary' : 'text-textPrimary'}`}>
                Video Call
              </p>
              <p className="text-caption text-textSecondary">Online consultation</p>
            </button>
            <button
              onClick={() => setConsultationType('in-person')}
              className={`p-4 rounded-button border-2 transition-all ${
                consultationType === 'in-person'
                  ? 'border-primary bg-primary/5'
                  : 'border-background'
              }`}
            >
              <MapPin size={24} className={consultationType === 'in-person' ? 'text-primary' : 'text-textSecondary'} />
              <p className={`text-body font-semibold mt-2 ${consultationType === 'in-person' ? 'text-primary' : 'text-textPrimary'}`}>
                In-Person
              </p>
              <p className="text-caption text-textSecondary">Visit hospital</p>
            </button>
          </div>
        </div>

        {/* Select Date */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={20} className="text-primary" />
            <h2 className="text-heading-sm text-textPrimary">Select Date</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-5 py-3 rounded-button whitespace-nowrap text-caption font-semibold transition-all ${
                  selectedDate === date
                    ? 'bg-primary text-white'
                    : 'bg-background text-textPrimary'
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={20} className="text-primary" />
            <h2 className="text-heading-sm text-textPrimary">Select Time</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-button text-caption font-semibold transition-all ${
                  selectedTime === time
                    ? 'bg-primary text-white'
                    : 'bg-background text-textPrimary'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Reason for Visit */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-textPrimary mb-3">Reason for Visit</h2>
          <div className="space-y-2">
            {reasons.map((reason) => (
              <button
                key={reason}
                onClick={() => setSelectedReason(reason)}
                className={`w-full p-4 rounded-button text-left flex items-center justify-between transition-all ${
                  selectedReason === reason
                    ? 'bg-primary/5 border-2 border-primary'
                    : 'bg-background border-2 border-transparent'
                }`}
              >
                <span className={`text-body ${selectedReason === reason ? 'text-primary font-semibold' : 'text-textPrimary'}`}>
                  {reason}
                </span>
                {selectedReason === reason && (
                  <Check size={20} className="text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-textPrimary mb-3">Additional Notes (Optional)</h2>
          <textarea
            placeholder="Describe your symptoms or concerns..."
            rows={4}
            className="w-full p-4 bg-background rounded-input text-body text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard size={20} className="text-primary" />
            <h2 className="text-heading-sm text-textPrimary">Payment Method</h2>
          </div>
          <button className="w-full p-4 bg-background rounded-button flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-chip flex items-center justify-center">
                <CreditCard size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-body font-semibold text-textPrimary">Credit/Debit Card</p>
                <p className="text-caption text-textSecondary">**** 4242</p>
              </div>
            </div>
            <ChevronDown size={20} className="text-textSecondary" />
          </button>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-card p-5 text-white">
          <h2 className="text-heading-sm mb-4">Booking Summary</h2>
          <div className="space-y-2 text-body">
            <div className="flex justify-between">
              <span className="opacity-90">Consultation Fee</span>
              <span className="font-semibold">${doctor.consultationFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-90">Service Fee</span>
              <span className="font-semibold">$10</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-90">Tax (10%)</span>
              <span className="font-semibold">$16</span>
            </div>
            <div className="border-t border-white/20 pt-2 mt-2">
              <div className="flex justify-between text-heading-sm">
                <span>Total</span>
                <span className="font-bold">${doctor.consultationFee + 10 + 16}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-background p-4 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <div className="max-w-lg mx-auto">
          <button className="w-full bg-primary text-white py-4 rounded-button text-body font-semibold shadow-card hover:bg-primary/90 transition-colors">
            Confirm Booking - ${doctor.consultationFee + 26}
          </button>
        </div>
      </div>
    </main>
  );
}
