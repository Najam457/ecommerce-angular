import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { ShopCategory} from './pages/shop-category/shop-category';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart} from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'category/:type', component: ShopCategory},
  { path: 'product/:id', component: ProductDetail},
  { path: 'cart', component: Cart},
  { path: '**', redirectTo: '' }
];