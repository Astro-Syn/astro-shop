import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})


export class ProductsComponent {
  searchTerm: string = '';
  selectedCategory: string = 'all';

  constructor(private cartService: CartService){

  }

  addToCart(product: any){
    this.cartService.addToCart(product);
  }


  products: any[] = [];

  get filteredProducts() {
  return this.products.filter(product => {

    const matchesSearch =
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase());

    const matchesCategory =
      this.selectedCategory === 'all' ||
      product.category === this.selectedCategory;

    return matchesSearch && matchesCategory;
  });
}

  private productService = inject(ProductService);

  ngOnInit(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
