'use client';

import { ArrowLeft, Search, TestTube, Clock, Star, TrendingUp, Heart, Activity, Droplet, Brain } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LabTests() {
  const router = useRouter();

  const categories = [
    { name: 'Blood Tests', icon: Droplet, color: 'bg-red-100 text-red-600', count: 24 },
    { name: 'Cardiac', icon: Heart, color: 'bg-pink-100 text-pink-600', count: 12 },
    { name: 'Diabetes', icon: Activity, color: 'bg-blue-100 text-blue-600', count: 8 },
    { name: 'Thyroid', icon: Brain, color: 'bg-purple-100 text-purple-600', count: 6 },
  ];

  const popularTests = [
    {
      name: 'Complete Blood Count (CBC)',
      description: 'Measures different components of your blood',
      price: 25,
      duration: '24 hours',
      rating: 4.8,
      tests: 18,
      icon: '🩸',
    },
    {
      name: 'Lipid Profile',
      description: 'Cholesterol and triglyceride levels',
      price: 35,
      duration: '24 hours',
      rating: 4.9,
      tests: 8,
      icon: '❤️',
    },
    {
      name: 'Thyroid Function Test',
      description: 'TSH, T3, T4 levels measurement',
      price: 45,
      duration: '48 hours',
      rating: 4.7,
      tests: 3,
      icon: '🧬',
    },
    {
      name: 'HbA1c (Diabetes)',
      description: 'Average blood sugar over 3 months',
      price: 30,
      duration: '24 hours',
      rating: 4.8,
      tests: 1,
      icon: '💉',
    },
  ];

  const packages = [
    {
      name: 'Basic Health Checkup',
      tests: 25,
      price: 99,
      originalPrice: 150,
      discount: 34,
      popular: true,
    },
    {
      name: 'Comprehensive Health',
      tests: 65,
      price: 249,
      originalPrice: 400,
      discount: 38,
      popular: false,
    },
    {
      name: 'Diabetes Care',
      tests: 15,
      price: 79,
      originalPrice: 120,
      discount: 34,
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <button onClick={() => router.back()} className="mb-4 p-2 -ml-2 hover:bg-background rounded-button">
          <ArrowLeft size={24} className="text-textPrimary" />
        </button>
        <h1 className="text-heading-lg text-textPrimary mb-4">Lab Tests</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
          <input
            type="text"
            placeholder="Search tests or packages..."
            className="w-full pl-12 pr-4 py-3.5 bg-background rounded-input text-body text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Categories */}
        <div>
          <h2 className="text-heading-sm text-textPrimary mb-3">Browse by Category</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="bg-white rounded-card shadow-card p-4 text-left hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-button flex items-center justify-center mb-2`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-body font-semibold text-textPrimary">{category.name}</h3>
                  <p className="text-caption text-textSecondary">{category.count} tests</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Health Packages */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-heading-sm text-textPrimary">Health Packages</h2>
            <button className="text-primary text-caption font-semibold">View All</button>
          </div>
          <div className="space-y-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-card shadow-card p-4 hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-warning text-white px-3 py-1 rounded-bl-button text-caption-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-textPrimary">{pkg.name}</h3>
                    <p className="text-caption text-textSecondary">{pkg.tests} tests included</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-heading-sm text-primary font-bold">${pkg.price}</span>
                      <span className="text-caption text-textSecondary line-through">${pkg.originalPrice}</span>
                    </div>
                    <span className="text-caption-sm text-success font-semibold">{pkg.discount}% OFF</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2.5 rounded-button text-caption font-semibold mt-3">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tests */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={20} className="text-primary" />
            <h2 className="text-heading-sm text-textPrimary">Popular Tests</h2>
          </div>
          <div className="space-y-3">
            {popularTests.map((test, index) => (
              <div key={index} className="bg-white rounded-card shadow-card p-4 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-secondary/20 rounded-button flex items-center justify-center text-3xl flex-shrink-0">
                    {test.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-body font-semibold text-textPrimary">{test.name}</h3>
                    <p className="text-caption text-textSecondary">{test.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <TestTube size={14} className="text-primary" />
                        <span className="text-caption text-textSecondary">{test.tests} parameters</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-primary" />
                        <span className="text-caption text-textSecondary">{test.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-warning text-warning" />
                        <span className="text-caption text-textPrimary font-semibold">{test.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-background">
                  <span className="text-heading-sm text-primary font-bold">${test.price}</span>
                  <button className="px-6 py-2 bg-primary text-white rounded-button text-caption font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-card p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-button flex items-center justify-center text-2xl">
              🏠
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold">Home Sample Collection</h3>
              <p className="text-caption opacity-90">Free sample pickup from your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
