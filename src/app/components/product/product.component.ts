import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  filterText="";  
  // HttpClient türünde bir nesne istiyorum diyoruz
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategorys(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    })
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
  getProductsByCategorys(id:number){

    this.productService.getProductsByCategory(id).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    });
    
  }
  addToCart(product:Product){
    console.log(product.productName)
  }
}
