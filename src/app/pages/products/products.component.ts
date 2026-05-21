import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {
  constructor(private cartService: CartService){

  }

  addToCart(product: any){
    this.cartService.addToCart(product);
  }


  products: any[] = [];

  private productService = inject(ProductService);

  ngOnInit(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
