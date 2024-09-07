import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, switchMap, tap } from 'rxjs';
import type { Product } from '../../../core/models/product';
import { SearchResultCardComponent } from '../cards/search-result-card/search-result-card.component';

@Component({
  selector: 'Gosto-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,SearchResultCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults$!: Observable<Product[]>
  showResults:boolean = false;
  _fb = inject(FormBuilder)
  _productService = inject(ProductService)

  ngOnInit(): void {
    this.initSearchForm();
    this.search()
  }

  initSearchForm() {
    this.searchForm = this._fb.group({
      searchInput: ['']
    })
  }

  //To Close search results suggestion popup after click to product:
  getShowSearchResultsState(event:boolean){
    this.showResults =false;
    this.searchForm.get('searchInput')!.patchValue('')
  }

  search() {
    this.searchResults$ = this.searchForm.get('searchInput')!.valueChanges.pipe(
      tap(()=> this.showResults =true),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTerm) => searchTerm ? this._productService.search(searchTerm) : of([])),
      catchError((err) => {
        console.log("something went wrong", err)
        return of([])
      })
    )
  }

}
