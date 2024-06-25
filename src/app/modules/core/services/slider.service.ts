import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { Slide } from '../models/Slide';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  http: HttpClient = inject(HttpClient)
  constructor() { }

  getSlidesData(): Observable<Slide[]>{
    return this.http.get<Slide[]>(`${environment.apiURL}/slides`).pipe(
      tap(data => console.log("Slides loaded",data))
    )
  }
}
