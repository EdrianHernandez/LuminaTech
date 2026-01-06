
export interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  images: ProductImage[];
  specifications: Record<string, string>;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
}
