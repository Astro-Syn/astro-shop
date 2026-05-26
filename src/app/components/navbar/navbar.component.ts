import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  cartItemCount = 0;
  cartCount$;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$
  }

  ngOnInit(){
    this.cartService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  

  

}
