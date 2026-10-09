import { Product } from '../components/product-card/product-card';

const createProductImage = (label: string, background: string, accent: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
      <rect width="800" height="800" fill="${background}"/>
      <rect x="70" y="70" width="660" height="660" rx="56" fill="rgba(255,255,255,0.12)"/>
      <path d="M290 270 C330 220, 470 220, 510 270 L555 330 C575 360, 575 400, 555 430 L525 480 C495 520, 450 545, 400 545 C350 545, 305 520, 275 480 L245 430 C225 400, 225 360, 245 330 Z" fill="${accent}" opacity="0.9"/>
      <rect x="245" y="440" width="310" height="180" rx="30" fill="rgba(255,255,255,0.18)"/>
      <text x="400" y="620" text-anchor="middle" font-size="46" font-family="Arial, Helvetica, sans-serif" fill="#ffffff" font-weight="700">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const categoryProducts: Record<string, Product[]> = {
  casual: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      rating: 3.9,
      price: 109.95,
      oldPrice: 135,
      discount: '-20%',
      image: createProductImage('Backpack', '#dbeafe', '#1d4ed8')
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      rating: 4.1,
      price: 22.3,
      oldPrice: 30,
      discount: '-25%',
      image: createProductImage('T-Shirt', '#dcfce7', '#15803d')
    },
    {
      id: 3,
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      price: 120,
      image: createProductImage('Tape Tee', '#fef3c7', '#b45309')
    },
    {
      id: 4,
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      price: 240,
      oldPrice: 260,
      discount: '-20%',
      image: createProductImage('Jeans', '#ede9fe', '#6d28d9')
    },
    {
      id: 5,
      title: 'Checkered Shirt',
      rating: 4.5,
      price: 180,
      image: createProductImage('Shirt', '#fee2e2', '#b91c1c')
    }
  ],
  men: [
    {
      id: 101,
      title: 'Mens Cotton Jacket',
      rating: 4.3,
      price: 55.99,
      oldPrice: 75,
      discount: '-25%',
      image: createProductImage('Jacket', '#e2e8f0', '#334155')
    },
    {
      id: 102,
      title: 'Mens Casual Slim Fit',
      rating: 4.1,
      price: 15.99,
      oldPrice: 22,
      discount: '-27%',
      image: createProductImage('Slim Fit', '#fce7f3', '#be185d')
    },
    {
      id: 103,
      title: 'Vertical Striped Shirt',
      rating: 5,
      price: 212,
      oldPrice: 232,
      discount: '-20%',
      image: createProductImage('Striped', '#cffafe', '#0f766e')
    }
  ],
  women: [
    {
      id: 201,
      title: 'Women’s Casual Blouse',
      rating: 4.4,
      price: 49.99,
      oldPrice: 63,
      discount: '-20%',
      image: createProductImage('Blouse', '#fdf2f8', '#9d174d')
    },
    {
      id: 202,
      title: 'Rain Jacket Women',
      rating: 4.2,
      price: 39.99,
      oldPrice: 55,
      discount: '-27%',
      image: createProductImage('Rain', '#dbeafe', '#1e3a8a')
    },
    {
      id: 203,
      title: 'Courage Graphic T-shirt',
      rating: 4,
      price: 145,
      image: createProductImage('Graphic', '#fef9c3', '#a16207')
    }
  ],
  formal: [
    {
      id: 301,
      title: 'Formal Office Shirt',
      rating: 4.6,
      price: 89,
      oldPrice: 110,
      discount: '-19%',
      image: createProductImage('Formal', '#e0f2fe', '#0369a1')
    },
    {
      id: 302,
      title: 'Classic Blazer',
      rating: 4.7,
      price: 120,
      oldPrice: 150,
      discount: '-20%',
      image: createProductImage('Blazer', '#f5f3ff', '#5b21b6')
    },
    {
      id: 303,
      title: 'Loose Fit Bermuda Shorts',
      rating: 3,
      price: 80,
      image: createProductImage('Shorts', '#ecfccb', '#4d7c0f')
    }
  ]
};

export const mockProducts: Product[] = Object.values(categoryProducts).flat();

export function getProductsByCategory(categoryKey: string): Product[] {
  const normalized = (categoryKey || 'casual').toLowerCase();
  return categoryProducts[normalized] || categoryProducts['casual'];
}

export function getProductById(productId: number): Product | undefined {
  return mockProducts.find((product) => product.id === productId);
}
