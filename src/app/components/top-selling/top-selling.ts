import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discount?: string;
  image: string;
}

@Component({
  selector: 'app-top-selling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-selling.html',
  styleUrl: './top-selling.scss'
})
export class TopSelling {
  products: Product[] = [
    {
      id: 1,
      title: 'Vertical Striped Shirt',
      rating: 5.0,
      price: 212,
      oldPrice: 232,
      discount: '-20%',
      image: 'assets/vertical-striped-shirt.png'
    },
    {
      id: 2,
      title: 'Courage Graphic T-shirt',
      rating: 4.0,
      price: 145,
      image: 'assets/courage-tshirt.png'
    },
    {
      id: 3,
      title: 'Loose Fit Bermuda Shorts',
      rating: 3.0,
      price: 80,
      image: 'assets/bermuda-shorts.png'
    },
    {
      id: 4,
      title: 'Faded Skinny Jeans',
      rating: 4.5,
      price: 210,
      image: 'assets/faded-jeans.png'
    }
  ];
}