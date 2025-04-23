'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  AcademicCapIcon,
  ClockIcon,
  ChartBarIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Practice Scenarios', href: '/scenarios', icon: AcademicCapIcon },
  { name: 'Mock Exams', href: '/mock-exam', icon: ClockIcon },
  { name: 'Progress', href: '/progress', icon: ChartBarIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
];

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/dashboard" className="text-xl font-bold text-indigo-600">
              MedCoach AI
            </Link>
            <button onClick={() => setSidebarOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <nav className="px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md mb-1 ${
                  pathname === item.href
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white">
          <div className="flex h-16 items-center px-6">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              MedCoach AI
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  pathname === item.href
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 lg:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
        <Link href="/dashboard" className="text-xl font-bold text-indigo-600">
          MedCoach AI
        </Link>
      </div>
    </>
  );
} 