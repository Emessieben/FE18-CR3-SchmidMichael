import { Component } from '@angular/core';
import { IProduct, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products: Array <IProduct> = products;

  constructor(private cartService: CartService) {
    
  }

  addToCart(product: IProduct) {
    alert("Product has been added to the cart.");
    this.cartService.addToCart(product);
  }
}
