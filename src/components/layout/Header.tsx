import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, BookOpenText, Bell } from 'lucide-react';
import { AnimatedCartIcon } from '@/components/AnimatedCartIcon'; // As per already-generated-components

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-white text-blue-600'
        : 'text-white hover:bg-blue-500/50'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-400/50 bg-blue-500 shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <Bell className="h-8 w-8 text-yellow-300" />
            <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-500"></div>
          </div>
          <span className="text-2xl font-bold text-white tracking-wider" style={{ fontFamily: 'sans-serif' }}>
            Doraemon Delights
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={navLinkClasses}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/menu" className={navLinkClasses}>
            <BookOpenText className="h-5 w-5" />
            <span>Menu</span>
          </NavLink>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Link to="/cart" aria-label="View shopping cart">
            <AnimatedCartIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;