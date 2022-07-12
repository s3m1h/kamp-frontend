import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService:CartService) { }
  cartItems:CartItem[] = [];
  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems = this.cartService.list();
  }
}
