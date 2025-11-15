'use client';

import { Home, Calendar, Search, MessageCircle, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white h-20 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-lg mx-auto h-full flex items-center justify-around px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className="flex flex-col items-center justify-center gap-1 min-w-[60px]"
            >
              <Icon
                size={24}
                className={isActive ? 'text-accent' : 'text-textSecondary'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-caption-sm ${isActive ? 'text-accent font-semibold' : 'text-textSecondary'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
