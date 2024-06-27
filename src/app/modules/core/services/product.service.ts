import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../../../environment/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient = inject(HttpClient)
  constructor() { }

  getProducts(){
    return this.http.get<Product[]>(`${environment.apiURL}/Products`).pipe(
      tap(data => console.log("Products",data)
      )
    )
  }
}
