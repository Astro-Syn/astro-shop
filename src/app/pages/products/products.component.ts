import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any[] = [];

  private productService = inject(ProductService);

  ngOnInit(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
