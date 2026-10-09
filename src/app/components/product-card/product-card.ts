import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Product {
  id: number;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discount?: string;
  image: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {

  @Input({ required: true })
  product!: Product;

}