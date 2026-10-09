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
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss'
})
export class NewArrivals {
  products: Product[] = [
    {
      id: 1,
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      price: 120,
      image: 'assets/tshirt-tape.png'
    },
    {
      id: 2,
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      price: 240,
      oldPrice: 260,
      discount: '-20%',
      image: 'assets/skinny-jeans.png'
    },
    {
      id: 3,
      title: 'Checkered Shirt',
      rating: 4.5,
      price: 180,
      image: 'assets/checkered-shirt.png'
    },
    {
      id: 4,
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      price: 130,
      oldPrice: 160,
      discount: '-30%',
      image: 'assets/striped-tshirt.png'
    }
  ];
}