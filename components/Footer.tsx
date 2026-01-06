
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-blue-600 tracking-tighter">LUMINA.</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Crafting premium peripherals for the modern digital workspace. Born in San Francisco, made for the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Mechanical Keyboards</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Custom Keycaps</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Switches & Kits</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Desk Mats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Order Tracking</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Shipping Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">Warranty & Returns</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Stay updated with new drops and exclusive deals.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white border border-slate-200 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-400">© 2024 Lumina Tech Peripherals Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
