import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Array<IProduct> = [];
  constructor (private cartService:CartService){}

  ngOnInit():void {
    this.cart = this.cartService.getCart();
  }
}
