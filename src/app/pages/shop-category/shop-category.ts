import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CategoryFilter } from '../../components/category-filter/category-filter';
import {
  ProductCard,
  Product
} from '../../components/product-card/product-card';

import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-shop-category',
  standalone: true,
  imports: [
    RouterLink,
    CategoryFilter,
    ProductCard
  ],
  templateUrl: './shop-category.html',
  styleUrl: './shop-category.scss'
})
export class ShopCategory implements OnInit {

  categoryTitle: string = 'Casual Wear';

  isFilterOpen: boolean = false;

  isLoading: boolean = true;

  products: Product[] = [];

  categoryTitlesMap: Record<string, string> = {
    men: "Men's Clothing",
    women: "Women's Clothing",
    casual: 'Casual Wear',
    formal: 'Formal Wear'
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const categoryKey =
        params.get('type')?.toLowerCase() || 'casual';

      console.log('Category changed:', categoryKey);

      this.categoryTitle =
        this.categoryTitlesMap[categoryKey] || 'Casual Wear';

      this.loadProducts(categoryKey);

    });

  }

  private normalizeCategory(value?: string): string {
    return (value ?? '')
      .toLowerCase()
      .replace(/[^a-z]/g, '');
  }

  loadProducts(categoryKey: string): void {

    this.isLoading = true;

    console.log('Loading products for:', categoryKey);

    this.productService.getProducts().subscribe({

      next: (data: any[]) => {

        console.log('Products received from API:', data);

        const aliases: Record<string, string[]> = {
          men: ['men', 'mens', 'mensclothing'],
          women: ['women', 'womens', 'womensclothing'],
          casual: ['casual', 'casualwear'],
          formal: ['formal', 'formalwear']
        };

        const allowedCategories = aliases[categoryKey] || [categoryKey];

        const mappedProducts = data.map(product => ({
          ...product,
          id: product.id,
          title: product.name ?? product.title ?? 'Product',
          rating: Number(product.rating ?? 4.5),
          price: Number(product.price ?? 0),
          oldPrice: product.oldPrice ? Number(product.oldPrice) : undefined,
          discount: product.discount ?? undefined,
          image: product.imageUrl || product.image || product.thumbnail || ''
        }));

        const filteredProducts = mappedProducts.filter(product => {
          const rawCategory =
            product.category ?? product.type ?? product.categoryName ?? '';

          const productCategory = this.normalizeCategory(rawCategory);

          return allowedCategories.some(alias => {
            const normalizedAlias = this.normalizeCategory(alias);
            return (
              productCategory === normalizedAlias ||
              productCategory.includes(normalizedAlias) ||
              normalizedAlias.includes(productCategory)
            );
          });
        });

        this.products = filteredProducts.length > 0 ? filteredProducts : mappedProducts;

        console.log('Filtered products:', filteredProducts);
        console.log('Products sent to ProductCard:', this.products);

        this.isLoading = false;
        this.cdr.detectChanges();

      },

      error: error => {

        console.error(
          'Error loading products from API:',
          error
        );

        this.products = [];

        this.isLoading = false;
        this.cdr.detectChanges();

      }

    });

  }

  toggleFilter(): void {

    this.isFilterOpen =
      !this.isFilterOpen;

  }

}