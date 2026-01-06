
import { Product } from './types';

export const MOCK_PRODUCT: Product = {
  id: 'kbd-lumina-01',
  name: 'Lumina X1 Ultra-Slim Mechanical Keyboard',
  brand: 'Lumina Tech',
  price: 189.99,
  currency: 'USD',
  description: 'Precision engineered for professionals who demand both style and performance. The Lumina X1 features a lightweight aircraft-grade aluminum frame, hot-swappable low-profile switches, and mesmerizing customizable per-key RGB lighting.',
  features: [
    'Hot-swappable Gateron Low Profile Switches',
    'Aircraft-grade 6063 aluminum frame',
    'Customizable RGB with 18 dynamic modes',
    'Dual Connectivity: Bluetooth 5.1 & USB-C',
    'Ultra-thin 17mm profile'
  ],
  images: [
    { id: 1, url: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1200', alt: 'Lumina X1 Main View' },
    { id: 2, url: 'https://images.unsplash.com/photo-1618384881928-223887955577?auto=format&fit=crop&q=80&w=1200', alt: 'Top Down Detail' },
    { id: 3, url: 'https://images.unsplash.com/photo-1541140532154-b024d715b909?auto=format&fit=crop&q=80&w=1200', alt: 'Side Profile' },
    { id: 4, url: 'https://images.unsplash.com/photo-1587829741301-dc798b83bac1?auto=format&fit=crop&q=80&w=1200', alt: 'Switch Detail' },
  ],
  specifications: {
    'Weight': '650g',
    'Dimensions': '306 x 116 x 17 mm',
    'Battery': '2000mAh (Up to 190 hours)',
    'Compatibility': 'Windows, macOS, Linux, iOS, Android'
  },
  stockStatus: 'In Stock'
};
