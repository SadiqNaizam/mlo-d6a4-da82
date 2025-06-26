import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Bell } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Bell className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-gray-800">Doraemon Delights</span>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Doraemon Delights. All Rights Reserved.
            </p>
          </div>

          {/* Legal Links */}
          <nav className="flex gap-6 text-sm">
            <Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
          </nav>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-gray-500 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-500 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;