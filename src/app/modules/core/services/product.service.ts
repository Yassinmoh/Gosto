import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../../../environment/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _http: HttpClient = inject(HttpClient)
  constructor() { }

  //Get All Products:
  getProducts(pageNumber: number, pageSize: number){
    return this._http.get<Product[]>(`${environment.apiURL}/Products?_page=${pageNumber}&_limit=${pageSize}`)
  }

  //Get Product by id:
  getProductById(id:number | string):Observable<Product>{
    return this._http.get<Product>(`${environment.apiURL}/Products/${id}`).pipe(
      tap(product => console.log("Product:",product)
      )
    )
  }

  //Search Products:
  search(query:string):Observable<Product[]>{
    return this._http.get<Product[]>(`${environment.apiURL}/Products?name_like=${query}`)
  }

}
