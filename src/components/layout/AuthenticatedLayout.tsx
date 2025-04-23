'use client';

import { ReactNode } from 'react';
import Navigation from '@/components/navigation/Navigation';

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <div>
      <Navigation />
      <div className="lg:pl-64">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
} 