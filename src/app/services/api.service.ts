import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  getCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/categories`);	
  }

  getProductoById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByCategory(category: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }
}
