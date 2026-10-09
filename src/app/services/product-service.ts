import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const fallbackProducts = [
  { id: 1, name: 'Casual T-Shirt', category: 'casual', price: 49, imageUrl: '' },
  { id: 2, name: 'Modern Hoodie', category: 'casual', price: 79, imageUrl: '' },
  { id: 3, name: 'Classic Denim', category: 'men', price: 89, imageUrl: '' },
  { id: 4, name: 'Tailored Shirt', category: 'men', price: 72, imageUrl: '' },
  { id: 5, name: 'Women Knit Top', category: 'women', price: 58, imageUrl: '' },
  { id: 6, name: 'Elegant Blazer', category: 'women', price: 99, imageUrl: '' },
  { id: 7, name: 'Formal Suit', category: 'formal', price: 180, imageUrl: '' },
  { id: 8, name: 'Business Shirt', category: 'formal', price: 95, imageUrl: '' }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://localhost:7274/api/Product';

  private getFallbackImage(category: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
        <rect width="800" height="800" fill="#f3f4f6"/>
        <rect x="90" y="90" width="620" height="620" rx="42" fill="#e5e7eb"/>
        <circle cx="400" cy="300" r="140" fill="#d1d5db"/>
        <path d="M260 520 L540 520 L500 640 L300 640 Z" fill="#cbd5e1"/>
        <text x="400" y="570" text-anchor="middle" font-size="46" font-family="Arial" fill="#6b7280" font-weight="700">${category.toUpperCase()}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  private normalizeProduct(product: any) {
    return {
      ...product,
      id: product.id ?? 0,
      name: product.name ?? product.title ?? 'Product',
      category: (product.category ?? product.type ?? 'casual').toLowerCase(),
      price: Number(product.price ?? 0),
      imageUrl: product.imageUrl ?? product.image ?? product.thumbnail ?? this.getFallbackImage((product.category ?? product.type ?? 'casual').toLowerCase())
    };
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() => of(fallbackProducts.map((product) => this.normalizeProduct(product))))
    );
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(this.normalizeProduct(fallbackProducts.find((product) => product.id === id) ?? { id, name: 'Product', category: 'casual', price: 0, imageUrl: '' })))
    );
  }
}
