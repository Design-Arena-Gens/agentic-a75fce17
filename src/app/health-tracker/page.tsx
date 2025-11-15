'use client';

import { ArrowLeft, Heart, Activity, Droplet, Moon, TrendingUp, Plus, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HealthTracker() {
  const router = useRouter();

  const metrics = [
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      status: 'normal',
      color: 'bg-red-100 text-red-600',
      trend: '+2',
    },
    {
      icon: Activity,
      label: 'Steps',
      value: '8,432',
      unit: 'steps',
      status: 'good',
      color: 'bg-blue-100 text-blue-600',
      trend: '+15%',
    },
    {
      icon: Droplet,
      label: 'Water',
      value: '6',
      unit: '/ 8 glasses',
      status: 'moderate',
      color: 'bg-cyan-100 text-cyan-600',
      trend: 'On track',
    },
    {
      icon: Moon,
      label: 'Sleep',
      value: '7.5',
      unit: 'hours',
      status: 'good',
      color: 'bg-purple-100 text-purple-600',
      trend: '+30min',
    },
  ];

  const recentActivities = [
    {
      type: 'Exercise',
      activity: 'Morning Run',
      duration: '30 min',
      calories: '245 cal',
      time: '7:00 AM',
      icon: '🏃',
    },
    {
      type: 'Meal',
      activity: 'Breakfast',
      duration: '',
      calories: '420 cal',
      time: '8:30 AM',
      icon: '🥗',
    },
    {
      type: 'Water',
      activity: 'Hydration',
      duration: '3 glasses',
      calories: '',
      time: '10:00 AM',
      icon: '💧',
    },
  ];

  const weeklyProgress = [
    { day: 'Mon', value: 85 },
    { day: 'Tue', value: 92 },
    { day: 'Wed', value: 78 },
    { day: 'Thu', value: 95 },
    { day: 'Fri', value: 88 },
    { day: 'Sat', value: 90 },
    { day: 'Sun', value: 82 },
  ];

  const goals = [
    { title: 'Daily Steps', current: 8432, target: 10000, unit: 'steps' },
    { title: 'Water Intake', current: 6, target: 8, unit: 'glasses' },
    { title: 'Sleep', current: 7.5, target: 8, unit: 'hours' },
  ];

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-white px-6 pt-12 pb-8 rounded-b-[32px]">
        <button onClick={() => router.back()} className="mb-4 p-2 -ml-2 hover:bg-white/10 rounded-button">
          <ArrowLeft size={24} />
        </button>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-heading-lg">Health Tracker</h1>
            <p className="text-caption opacity-90 mt-1">Track your daily health metrics</p>
          </div>
          <button className="p-3 bg-white/20 rounded-button">
            <Calendar size={24} />
          </button>
        </div>

        {/* Health Score */}
        <div className="bg-white/10 backdrop-blur-sm rounded-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption opacity-90">Today's Health Score</p>
              <p className="text-heading-lg mt-1">88/100</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp size={28} />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-caption mb-1">
              <span className="opacity-90">Daily Goal</span>
              <span>88%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white" style={{ width: '88%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Key Metrics */}
        <div>
          <h2 className="text-heading-sm text-textPrimary mb-3">Today's Metrics</h2>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-white rounded-card shadow-card p-4">
                  <div className={`w-12 h-12 ${metric.color} rounded-button flex items-center justify-center mb-3`}>
                    <Icon size={24} />
                  </div>
                  <p className="text-caption text-textSecondary">{metric.label}</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-heading-sm text-textPrimary font-bold">{metric.value}</span>
                    <span className="text-caption text-textSecondary">{metric.unit}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    <span className={`text-caption-sm font-semibold ${
                      metric.status === 'normal' || metric.status === 'good' ? 'text-success' : 'text-warning'
                    }`}>
                      {metric.trend}
                    </span>
                    <span className="text-caption-sm text-textSecondary">from yesterday</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-heading-sm text-textPrimary">Weekly Progress</h2>
            <button className="text-primary text-caption font-semibold">View Details</button>
          </div>
          <div className="flex items-end justify-between gap-2 h-32">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-background rounded-t-button relative" style={{ height: `${day.value}%` }}>
                  <div className="absolute inset-0 bg-primary rounded-t-button"></div>
                </div>
                <span className="text-caption-sm text-textSecondary">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Goals */}
        <div className="bg-white rounded-card shadow-card p-5">
          <h2 className="text-heading-sm text-textPrimary mb-4">Daily Goals</h2>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const percentage = (goal.current / goal.target) * 100;
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-body text-textPrimary">{goal.title}</span>
                    <span className="text-caption text-textSecondary">
                      {goal.current} / {goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className={`h-full ${percentage >= 100 ? 'bg-success' : 'bg-primary'}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-card shadow-card p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-heading-sm text-textPrimary">Today's Activities</h2>
            <button className="p-2 bg-primary text-white rounded-chip">
              <Plus size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-background rounded-button"
              >
                <div className="w-12 h-12 bg-white rounded-button flex items-center justify-center text-2xl">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-body font-semibold text-textPrimary">{activity.activity}</h3>
                      <p className="text-caption text-textSecondary">{activity.type}</p>
                    </div>
                    <span className="text-caption text-textSecondary">{activity.time}</span>
                  </div>
                  <div className="flex gap-3 mt-1 text-caption text-textSecondary">
                    {activity.duration && <span>{activity.duration}</span>}
                    {activity.calories && <span>{activity.calories}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Add */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white rounded-button shadow-card p-4 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-primary/10 rounded-chip flex items-center justify-center">
              <Activity size={24} className="text-primary" />
            </div>
            <span className="text-caption text-textPrimary">Log Exercise</span>
          </button>
          <button className="bg-white rounded-button shadow-card p-4 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-primary/10 rounded-chip flex items-center justify-center">
              <Droplet size={24} className="text-primary" />
            </div>
            <span className="text-caption text-textPrimary">Add Water</span>
          </button>
          <button className="bg-white rounded-button shadow-card p-4 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-primary/10 rounded-chip flex items-center justify-center">
              <Heart size={24} className="text-primary" />
            </div>
            <span className="text-caption text-textPrimary">Log Meal</span>
          </button>
        </div>
      </div>
    </main>
  );
}
