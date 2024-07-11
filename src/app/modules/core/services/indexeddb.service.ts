import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { Product } from '../models/product';
import { Slide } from '../models/Slide';

interface MyDB extends DBSchema {
  'IntroSlider': {
    key: string;
    value: Slide[];
  };

  'TopSellingProducts': {
    key: string;
    value: Product[];
  };

  'Products': {
    key: string;
    value: Product[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  private dbPromise: Promise<IDBPDatabase<MyDB>>;

  constructor() {
    this.dbPromise = openDB<MyDB>('Gosto-DB', 1, {
      upgrade(db) {
        db.createObjectStore('TopSellingProducts');
        db.createObjectStore('IntroSlider');
        db.createObjectStore('Products');
      },
    });
  }

  //****************** Store Intro slider Slides ******************

  async setSlides(key: string, value: Slide[]) {
    const db = await this.dbPromise;
    return db.put('IntroSlider', value, key);
  }

  async getSlides(key: string): Promise<Slide[] | undefined> {
    const db = await this.dbPromise;
    return db.get('IntroSlider', key);
  }

  //****************** Store Top Selling Products ******************

  async setTopSellingProducts(products: Product[]) {
    const db = await this.dbPromise;
    return db.put('TopSellingProducts', products, 'top-selling');
  }

  async getTopSellingProducts(key: string): Promise<Product[] | undefined> {
    const db = await this.dbPromise;
    return db.get('TopSellingProducts', key);
  }

    //****************** Store pageNumber 1 in Shop ******************

async setProducts(products: Product[]) {
    const db = await this.dbPromise;
    return db.put('Products', products, 'Products');
  }

  async getProducts(key: string): Promise<Product[] | undefined> {
    const db = await this.dbPromise;
    return db.get('Products', key);
  }
}


