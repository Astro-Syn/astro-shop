import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private platformId = inject(PLATFORM_ID);

  items: any[] = [];

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('cartItems');

      if (savedCart) {
        this.items = JSON.parse(savedCart);
      }

      this.cartCount.next(this.getCartCount());
    }
  }


  private saveCart() {
    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.setItem('cartItems', JSON.stringify(this.items));

    this.cartCount.next(this.getCartCount());
  }

 
  private getCartCount(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }


  addToCart(product: any) {
    const existingItem = this.items.find(
      item => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...product,
        quantity: 1
      });
    }

    this.saveCart();
  }

 
  increase(item: any) {
    item.quantity += 1;
    this.saveCart();
  }

 
  decrease(item: any) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      this.items = this.items.filter(i => i.id !== item.id);
    }

    this.saveCart();
  }

  
  getItems() {
    return this.items;
  }


  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}