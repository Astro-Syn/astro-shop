import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cartService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

}
