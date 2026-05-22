import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: any[] = [];

  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  addToCart(product: any) {
    this.items.push(product);

    this.cartCount.next(this.items.length);
  }

  getItems(){
    return this.items;
  }

  getTotalPrice(){
    let total = 0;

    this.items.forEach(item => {
      total += item.price;
    });

    return total;
  }
}
