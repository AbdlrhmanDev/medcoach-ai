'use client';

import { ReactNode, memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: ReactNode;
}

// Memoize navigation links to prevent unnecessary re-renders
const NavigationLinks = memo(function NavigationLinks({ pathname }: { pathname: string }) {
  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden md:flex items-center space-x-4">
      {[
        { href: '/scenarios', label: 'Scenarios' },
        { href: '/progress', label: 'Progress' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/contact', label: 'Contact' },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive(href)
              ? 'text-indigo-600 bg-indigo-50'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          {label}
        </Link>
      ))}
      <div className="h-6 w-px bg-gray-200" />
      <Link
        href="/signin"
        className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        Get Started
      </Link>
    </div>
  );
});

// Memoize footer links to prevent unnecessary re-renders
const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/scenarios" className="text-sm text-gray-600 hover:text-gray-900">
                  Scenarios
                </Link>
              </li>
              <li>
                <Link href="/progress" className="text-sm text-gray-600 hover:text-gray-900">
                  Progress
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://twitter.com/medcoachai" className="text-sm text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/medcoachai" className="text-sm text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          © {currentYear} MedCoach AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800">
              MedCoach AI
            </Link>
          </div>
          <NavigationLinks pathname={pathname} />
        </nav>
      </header>

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
} 