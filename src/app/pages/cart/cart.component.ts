import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  items: any[] = [];

  totalPrice = 0;


constructor(private cartService: CartService) {

  this.items = this.cartService.getItems();

  this.totalPrice = this.cartService.getTotalPrice();
}



}
