import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:7174/api/";
  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>>{
    // gelen data any oluyor 
    // gelen datayı productresponsemodele map edeceksin demiş oluyoruz
    // observable -- subscribe yazmamızı sağlıyann şey
    // donus tipi observable oyüzden fonksiyonuda ona çevirdik
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):  Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl +  "products/getbycategoryid?categoryId=" + categoryId;;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
