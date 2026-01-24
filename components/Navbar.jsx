'use client';

import { ModeToggle } from '@/components/ModeToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Visual Concepts', href: '/#visual-concepts' },
    { name: 'Features', href: '/#features' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark-charcoal/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-md overflow-hidden">
              <Image
                src="/logo.png"
                alt="ScriptLens Logo"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-gray-100">
              ScriptLens
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-minion-yellow dark:hover:text-minion-yellow',
                  pathname === link.href
                    ? 'text-minion-yellow font-bold'
                    : 'text-gray-600 dark:text-gray-300'
                )}>
                {link.name}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-charcoal">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-minion-yellow dark:hover:text-minion-yellow">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
