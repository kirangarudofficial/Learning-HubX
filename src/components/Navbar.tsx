import React, { useState } from 'react';
import { Menu, X, BookOpen, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-xl text-gray-900">LearnX</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Teachers</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <User className="h-4 w-4 mr-1" />
              Register
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Teachers</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-5 space-x-3">
                  <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    <LogIn className="h-4 w-4 mr-1" />
                    Login
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    <User className="h-4 w-4 mr-1" />
                    Register
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;