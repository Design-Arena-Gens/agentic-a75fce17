'use client';

import { ArrowLeft, FileText, Download, Share2, Upload, Search, Filter, Calendar, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MedicalRecords() {
  const router = useRouter();

  const records = [
    {
      id: 1,
      type: 'Lab Report',
      title: 'Complete Blood Count',
      doctor: 'Dr. Sarah Johnson',
      date: 'Dec 10, 2024',
      size: '2.4 MB',
      icon: '🩺',
      category: 'lab',
    },
    {
      id: 2,
      type: 'Prescription',
      title: 'Cardiology Consultation',
      doctor: 'Dr. Sarah Johnson',
      date: 'Dec 8, 2024',
      size: '1.2 MB',
      icon: '💊',
      category: 'prescription',
    },
    {
      id: 3,
      type: 'Medical Report',
      title: 'Annual Health Checkup',
      doctor: 'Dr. Michael Chen',
      date: 'Nov 25, 2024',
      size: '3.8 MB',
      icon: '📋',
      category: 'report',
    },
    {
      id: 4,
      type: 'Imaging',
      title: 'Chest X-Ray',
      doctor: 'Dr. Emily White',
      date: 'Nov 15, 2024',
      size: '5.2 MB',
      icon: '🔬',
      category: 'imaging',
    },
    {
      id: 5,
      type: 'Lab Report',
      title: 'Lipid Profile',
      doctor: 'Dr. Sarah Johnson',
      date: 'Oct 30, 2024',
      size: '1.8 MB',
      icon: '🩺',
      category: 'lab',
    },
  ];

  const categories = [
    { name: 'All', count: 45 },
    { name: 'Lab Reports', count: 18 },
    { name: 'Prescriptions', count: 12 },
    { name: 'Imaging', count: 8 },
    { name: 'Others', count: 7 },
  ];

  const stats = [
    { label: 'Total Records', value: '45' },
    { label: 'This Month', value: '5' },
    { label: 'Storage Used', value: '125 MB' },
  ];

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <button onClick={() => router.back()} className="mb-4 p-2 -ml-2 hover:bg-white/10 rounded-button">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-heading-lg mb-6">Medical Records</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-button p-3 text-center">
              <p className="text-heading-sm font-bold">{stat.value}</p>
              <p className="text-caption-sm opacity-90 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Search and Upload */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary" size={20} />
            <input
              type="text"
              placeholder="Search records..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-input shadow-card text-body text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="w-12 h-12 bg-primary text-white rounded-button shadow-card flex items-center justify-center">
            <Upload size={20} />
          </button>
        </div>

        {/* Categories Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-chip whitespace-nowrap text-caption font-semibold transition-colors ${
                index === 0
                  ? 'bg-primary text-white'
                  : 'bg-white text-textSecondary shadow-card'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Filter and Sort */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-button shadow-card text-caption text-textPrimary">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-button shadow-card text-caption text-textPrimary">
            <Calendar size={18} />
            <span>Date</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-button shadow-card text-caption text-textPrimary">
            <User size={18} />
            <span>Doctor</span>
          </button>
        </div>

        {/* Records List */}
        <div className="space-y-3">
          {records.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-card shadow-card p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-secondary/20 rounded-button flex items-center justify-center text-3xl flex-shrink-0">
                  {record.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-textPrimary">{record.title}</h3>
                      <p className="text-caption text-textSecondary">{record.type}</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary/20 text-primary rounded-chip text-caption-sm font-medium ml-2 flex-shrink-0">
                      {record.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-caption text-textSecondary">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{record.doctor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{record.date}</span>
                    </div>
                    <span>{record.size}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-white rounded-button text-caption font-semibold">
                      <FileText size={16} />
                      <span>View</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-button text-caption font-semibold">
                      <Download size={16} />
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-button text-caption font-semibold">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-card p-5 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-button flex items-center justify-center">
              <Upload size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold">Upload New Record</h3>
              <p className="text-caption opacity-90">Keep all your medical documents in one place</p>
            </div>
            <button className="px-4 py-2 bg-white text-primary rounded-button text-caption font-semibold">
              Upload
            </button>
          </div>
        </div>

        {/* Storage Info */}
        <div className="bg-white rounded-card shadow-card p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-body text-textPrimary">Storage</span>
            <span className="text-caption text-textSecondary">125 MB / 5 GB</span>
          </div>
          <div className="w-full h-2 bg-background rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '2.5%' }}></div>
          </div>
          <p className="text-caption text-textSecondary mt-2">97.5% storage available</p>
        </div>
      </div>
    </main>
  );
}
