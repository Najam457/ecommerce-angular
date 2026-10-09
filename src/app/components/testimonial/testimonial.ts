import { Component } from '@angular/core';

export interface TestimonialReview {
  id: number;
  name: string;
  verified: boolean;
  comment: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss'
})
export class Testimonial {
  reviews: TestimonialReview[] = [
    {
      id: 1,
      name: 'Sarah M.',
      verified: true,
      comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`
    },
    {
      id: 2,
      name: 'Alex K.',
      verified: true,
      comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`
    },
    {
      id: 3,
      name: 'James L.',
      verified: true,
      comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`
    }
  ];
}