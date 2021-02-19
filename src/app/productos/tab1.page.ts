import { CartModalPage } from './../pages/cart-modal/cart-modal.page';
import { CartService } from './../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  //carrito
  cart = [];

  //productos
  products = [];

  //controlamos la cantidad de productos
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor( private cartService: CartService,
                private modalCtrl: ModalController
    ) {}


  //cargamos lo necesario
  ngOnInit(){
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }

  async openCart(){

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });

    /* modal.onWillDismiss().then(() => {
      
    }); */

    modal.present();
  }

}
