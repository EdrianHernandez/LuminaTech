
import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold tracking-tighter text-blue-600">LUMINA.</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Keyboards</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Keycaps</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Switches</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Custom Build</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 relative text-slate-600 hover:text-blue-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 bg-blue-600 text-white text-[10px] font-bold px-1 rounded-full ring-2 ring-white">2</span>
            </button>
            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
