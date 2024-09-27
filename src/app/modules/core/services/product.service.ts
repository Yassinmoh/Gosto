import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../../../environment/environment';
import { map, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _http: HttpClient = inject(HttpClient)
  constructor() { }

  //Get All Products:
  getProducts(pageNumber: number, pageSize: number){
    return this._http.get<Product[]>(`${environment.apiURL}/Products?_page=${pageNumber}&_limit=${pageSize}`,{ observe: 'response' }).pipe(
      map((response: HttpResponse<Product[]>) => {
        return {
          items: response.body || [], // Current page products
          totalRecords: Number(response.headers.get('X-Total-Count')) // Extract total count
        };
      })
    );
  }

  getTotalProductsRecord() {
    return this._http.get<Product[]>(`${environment.apiURL}/Products`, { observe: 'response' }).pipe(
      map((response: HttpResponse<Product[]>) => {
        return response.body ? Number(response.body.length) : 0;
      })
    );
  }


  //Get Product by id:
  getProductById(id:number | string):Observable<Product>{
    return this._http.get<Product>(`${environment.apiURL}/Products/${id}`)
  }

  //Search Products:
  search(query:string):Observable<Product[]>{
    return this._http.get<Product[]>(`${environment.apiURL}/Products?name_like=${query}`)
  }

  //Get Top Products Have Sale:
  getTopProductsHaveSale():Observable<Product[]>{
    return this._http.get<Product[]>(`${environment.apiURL}/Products`).pipe(
      map(res => res.sort((a,b)=>(b.sale - a.sale)).slice(0, 15))
    )
  }

}
