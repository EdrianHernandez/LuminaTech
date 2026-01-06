
import React, { useState } from 'react';
import { ProductImage } from '../types';

interface GalleryProps {
  images: ProductImage[];
}

const ProductGallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Image Viewport */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
        <img 
          src={activeImage.url} 
          alt={activeImage.alt}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setActiveImage(image)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              activeImage.id === image.id 
                ? 'border-blue-600 ring-2 ring-blue-100' 
                : 'border-transparent hover:border-slate-200'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
