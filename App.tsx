
import React from 'react';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { MOCK_PRODUCT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb - desktop only */}
        <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex text-xs font-medium text-slate-400 space-x-2">
            <a href="#" className="hover:text-blue-600">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-blue-600">Keyboards</a>
            <span>/</span>
            <span className="text-slate-900">{MOCK_PRODUCT.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
            {/* Left Column: Gallery */}
            <div className="lg:col-span-7">
              <ProductGallery images={MOCK_PRODUCT.images} />
              
              {/* Additional Desktop Info Section */}
              <div className="hidden lg:block mt-20 space-y-12">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {Object.entries(MOCK_PRODUCT.specifications).map(([key, value]) => (
                      <div key={key} className="border-b border-slate-100 pb-3 flex justify-between">
                        <span className="text-sm text-slate-500">{key}</span>
                        <span className="text-sm font-semibold text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {MOCK_PRODUCT.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-24">
                <ProductDetails product={MOCK_PRODUCT} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Technical Specs */}
        <div className="lg:hidden bg-slate-50 px-4 sm:px-6 py-16 space-y-12">
           <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {Object.entries(MOCK_PRODUCT.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-slate-200 pb-3 flex justify-between">
                    <span className="text-sm text-slate-500">{key}</span>
                    <span className="text-sm font-semibold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
