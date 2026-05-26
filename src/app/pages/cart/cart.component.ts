import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items$;
  total$;

  constructor(private cartService: CartService) {

    this.items$ = this.cartService.items$;

    this.total$ = this.cartService.total$;
  }

  increase(item: any) {
    this.cartService.increase(item);
  }

  decrease(item: any) {
    this.cartService.decrease(item);
  }

  remove(item: any) {
    this.cartService.remove(item);
  }
}