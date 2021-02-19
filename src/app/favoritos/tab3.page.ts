import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  products = [];

  constructor(private cartService: CartService) {}


  ngOnInit(){
    this.products = this.cartService.getProducts();
  }

}
