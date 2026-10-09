import { Component } from '@angular/core';

interface Review {
  id: number;
  author: string;
  verified: boolean;
  rating: number;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [],
  templateUrl: './product-reviews.html',
  styleUrl: './product-reviews.scss'
})
export class ProductReviews {
  activeTab: 'details' | 'reviews' | 'faqs' = 'reviews';

  reviews: Review[] = [
    {
      id: 1,
      author: 'Samantha D.',
      verified: true,
      rating: 4.5,
      comment: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: 'Posted on August 14, 2023'
    },
    {
      id: 2,
      author: 'Alex M.',
      verified: true,
      rating: 4.5,
      comment: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
      date: 'Posted on August 15, 2023'
    },
    {
      id: 3,
      author: 'Ethan R.',
      verified: true,
      rating: 4.5,
      comment: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
      date: 'Posted on August 16, 2023'
    },
    {
      id: 4,
      author: 'Olivia P.',
      verified: true,
      rating: 4.5,
      comment: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
      date: 'Posted on August 17, 2023'
    },
    {
      id: 5,
      author: 'Liam K.',
      verified: true,
      rating: 4.5,
      comment: '"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer\'s skill. It\'s like wearing a piece of art that reflects my passion for both design and fashion."',
      date: 'Posted on August 18, 2023'
    },
    {
      id: 6,
      author: 'Ava H.',
      verified: true,
      rating: 4.5,
      comment: '"I\'m not just wearing a t-shirt; I\'m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."',
      date: 'Posted on August 19, 2023'
    }
  ];

  selectTab(tab: 'details' | 'reviews' | 'faqs') {
    this.activeTab = tab;
  }
}