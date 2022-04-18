import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:7174/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>>{
    // gelen data any oluyor 
    // gelen datayı productresponsemodele map edeceksin demiş oluyoruz
    // observable -- subscribe yazmamızı sağlıyann şey
    // donus tipi observable oyüzden fonksiyonuda ona çevirdik
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
