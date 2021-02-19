import { PedidoService } from './../../services/pedido.service';
import { CartService } from './../../services/cart.service';
import { Product } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService,
              private modalCtrl: ModalController,
              private router: Router,
              private toastController: ToastController,
              private pedidoService: PedidoService
              ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product){
    this.cartService.addProduct(product);
  }

  removeCartItem(product){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    return this.cart.reduce( (i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  //cierra el modal, muestra el toas y vacia el carro.
  checkout() {
    //cierra el modal
    this.modalCtrl.dismiss();

    //muestra la tostadita
    this.presentToast();

    //almacenamos el pedido
    this.pedidoService.addPedido(this.cart);

    this.cartService.emptyCart();
    
    //TODO: hacer que nos lleve a pedidos
    ///this.router.navigate(['pedidos']);
  }

  //muestra el toast con los datos ingresados en el formulario.
  async presentToast() {
    const toast = await this.toastController.create({
      message: `Data saved: \n
                PEDIDO CREADO CORRECTAMENTE. \n
                Numero de pedido: X44J3n \n
                El pedido llegara en 45 min \n
                Gracias por su compra!
      `,
      duration: 1000
    });
    toast.present();
  }

}
