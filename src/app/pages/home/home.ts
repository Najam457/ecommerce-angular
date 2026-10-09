import { Component } from '@angular/core';
import { Hero} from '../../components/hero/hero';
import { BrandBanner} from '../../components/brand-banner/brand-banner';
import { NewArrivals} from '../../components/new-arrivals/new-arrivals';
import { TopSelling} from '../../components/top-selling/top-selling';
import { DressStyle} from '../../components/dress-style/dress-style';
import { Testimonial} from '../../components/testimonial/testimonial';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    BrandBanner,
    NewArrivals,
    TopSelling,
    DressStyle,
    Testimonial
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}