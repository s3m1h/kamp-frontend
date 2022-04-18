import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;
  
  // HttpClient türünde bir nesne istiyorum diyoruz
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    // gelen data any oluyor 
    // gelen datayı productresponsemodele map edeceksin demiş oluyoruz
    // subscribe -- asenkron çalışıyor

    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    });
    
  }
}
