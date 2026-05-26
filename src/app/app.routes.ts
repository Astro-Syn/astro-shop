import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products", component: ProductsComponent},
    { path: "cart", component: CartComponent},
    { path: "products/:id", component: ProductDetailComponent},
    { path: "checkout", component: CheckoutComponent}
];
