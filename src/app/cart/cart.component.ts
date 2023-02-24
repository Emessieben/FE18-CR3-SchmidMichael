import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cart: Array<IProduct> = [];

  constructor (private cartService:CartService, private formBuilder:FormBuilder){}

  amount: number = 0; // from beginning 0
  service: number = 0;
  discount: number = 0;
  totalPrice: number = 0;
  // items: IProduct[] = [];
  checkoutForm = this.formBuilder.group({ //form input
    name: '',
    address: '',
  });

  clearCart() {
    window.alert('Your cart has been cleared'); //optional
    this.cart = this.cartService.clearCart();
  }

  onSubmit() {
    if(this.checkoutForm.valid) {
      this.cart = this.cartService.clearCart();
      this.checkoutForm.reset();
      this.summary()
    }
  }

  summary(){
    for(let val of this.cart) {
      this.amount = this.amount + val.price
      this.service = this.amount * 0.10;
      this.totalPrice = this.amount + this.service;
    }
    if(this.totalPrice >= 40) {
      this.discount = this.totalPrice * 0.15;
    }
    this.totalPrice = this.amount + this.service - this.discount;
  }

  ngOnInit():void {
    this.cart = this.cartService.getCart();
    this.summary()
    console.log(this.cart);
    
  }

}
