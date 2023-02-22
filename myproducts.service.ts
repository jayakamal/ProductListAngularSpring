import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyproductsService {

  constructor(private myhttp: HttpClient) { }

  getMyProducts() {
      return this.myhttp.get("http://localhost:8080/allProduct");
    }
  
}
