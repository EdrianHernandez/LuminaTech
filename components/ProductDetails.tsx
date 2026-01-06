
import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, Minus, Plus } from 'lucide-react';
import { Product } from '../types';

interface DetailsProps {
  product: Product;
}

const ProductDetails: React.FC<DetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSwitch, setSelectedSwitch] = useState('Brown');

  const switches = ['Blue', 'Brown', 'Red'];

  return (
    <div className="flex flex-col space-y-8">
      {/* Header Info */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">{product.brand}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
          <span className="text-xs font-medium text-slate-500">SKU: {product.id}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{product.name}</h1>
        
        <div className="flex items-center space-x-4 py-2">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-600">4.9 (128 Reviews)</span>
        </div>
      </div>

      {/* Price & Description */}
      <div className="space-y-4">
        <div className="flex items-baseline space-x-3">
          <span className="text-4xl font-bold text-slate-900">${product.price}</span>
          <span className="text-sm font-medium text-slate-500 uppercase">{product.currency}</span>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-lg">
          {product.description}
        </p>
      </div>

      {/* Product Options */}
      <div className="space-y-6 pt-4 border-t border-slate-100">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-900">Switch Type</label>
          <div className="flex flex-wrap gap-2">
            {switches.map((sw) => (
              <button
                key={sw}
                onClick={() => setSelectedSwitch(sw)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  selectedSwitch === sw
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {sw}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-900">Quantity</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 text-slate-500 hover:bg-slate-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-bold text-slate-900">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 text-slate-500 hover:bg-slate-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <button className="flex-1 bg-slate-900 text-white py-3.5 px-8 rounded-lg font-bold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-slate-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
        <div className="flex items-center space-x-3 text-slate-600">
          <div className="p-2 bg-slate-50 rounded-full"><Truck className="w-4 h-4" /></div>
          <span className="text-xs font-medium">Free Expedited Shipping</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-600">
          <div className="p-2 bg-slate-50 rounded-full"><ShieldCheck className="w-4 h-4" /></div>
          <span className="text-xs font-medium">2 Year Manufacturer Warranty</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-600">
          <div className="p-2 bg-slate-50 rounded-full"><RefreshCw className="w-4 h-4" /></div>
          <span className="text-xs font-medium">30-Day Hassle-Free Returns</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
