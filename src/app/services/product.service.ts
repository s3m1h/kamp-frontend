import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:7174/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<ProductResponseModel>{
    // gelen data any oluyor 
    // gelen datayı productresponsemodele map edeceksin demiş oluyoruz
    // observable -- subscribe yazmamızı sağlıyann şey
    // donus tipi observable oyüzden fonksiyonuda ona çevirdik
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
