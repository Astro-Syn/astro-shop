import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
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
