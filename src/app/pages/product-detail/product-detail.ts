import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductCard, Product } from '../../components/product-card/product-card';
import { ProductReviews } from '../../components/product-reviews/product-reviews';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, ProductCard, ProductReviews],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
  product: Product | null = null;
  relatedProducts: Product[] = [];
  isLoading: boolean = true;

  images: string[] = [];
  selectedImage: string = '';

  colors: string[] = ['#4F533E', '#314F4A', '#31344F'];
  selectedColor: string = '#4F533E';

  sizes: string[] = ['Small', 'Medium', 'Large', 'X-Large'];
  selectedSize: string = 'Large';

  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = Number(params['id']);
      if (productId) {
        this.fetchProductDetail(productId);
      }
    });
  }

  fetchProductDetail(id: number) {
    this.isLoading = true;

    this.productService.getProduct(id).subscribe({
      next: (data: any) => {
        const product = {
          id: data.id ?? id,
          title: data.name ?? data.title ?? 'Product',
          rating: Number(data.rating ?? 4.5),
          price: Number(data.price ?? 0),
          oldPrice: data.oldPrice ?? undefined,
          discount: data.discount ?? undefined,
          image: data.imageUrl ?? data.image ?? data.thumbnail ?? ''
        };

        this.product = product;
        this.images = [product.image, product.image, product.image].filter(Boolean);
        this.selectedImage = product.image || '';

        this.fetchRelatedProducts();
      },
      error: (error) => {
        console.error('Failed to load product detail:', error);
        this.product = null;
        this.relatedProducts = [];
        this.isLoading = false;
      }
    });
  }

  fetchRelatedProducts() {
    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        const related = (Array.isArray(data) ? data : [])
          .filter((item) => (item.id ?? 0) !== (this.product?.id ?? 0))
          .slice(0, 4)
          .map((product) => ({
            id: product.id ?? 0,
            title: product.name ?? product.title ?? 'Product',
            rating: Number(product.rating ?? 4.5),
            price: Number(product.price ?? 0),
            oldPrice: product.oldPrice ?? undefined,
            discount: product.discount ?? undefined,
            image: product.imageUrl ?? product.image ?? product.thumbnail ?? ''
          }));

        this.relatedProducts = related;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load related products:', error);
        this.relatedProducts = [];
        this.isLoading = false;
      }
    });
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}