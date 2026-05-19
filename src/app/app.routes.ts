import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "products", component: ProductsComponent},
    { path: "cart", component: CartComponent}
];
