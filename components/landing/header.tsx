import Link from '@/node_modules/next/link';
import React from 'react';
import { Button } from '../ui/button';

interface HeaderProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Logo */}
        <div className="text-2xl font-semibold">AIgenix</div>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
          </ul>
        </nav>

        {/* Authentication Buttons */}
        <div className="flex space-x-4">
          <Link href="/login" className="cursor-pointer px-6 py-2 bg-transparent border-primary border-2 text-black rounded-lg transition">Login</Link>
          <Link href="/signup" className="cursor-pointer px-6 py-2 parent bg-primary text-white rounded-lg transition">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
