import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private api = 'https://fakestoreapi.com/products';

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }
}