import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.scss'
})
export class CategoryFilter {
  @Input() isOpen: boolean = false;
  @Output() closeFilter = new EventEmitter<void>();

  categories: string[] = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  
  colors: string[] = [
    '#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAB5', 
    '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000'
  ];
  selectedColor: string = '#063AF5';

  sizes: string[] = [
    'XX-Small', 'X-Small', 'Small', 'Medium', 
    'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'
  ];
  selectedSize: string = 'Large';

  dressStyles: string[] = ['Casual', 'Formal', 'Party', 'Gym'];

  onClose() {
    this.closeFilter.emit();
  }
}