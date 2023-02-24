import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { IProduct, products } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  product: IProduct = {} as IProduct;
  id: number = 0;

  constructor (private route: ActivatedRoute, private cartService: CartService) {}

  addToCart() {
    alert("product has been added to the cart");
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = products[this.id];
    });
  }
}
