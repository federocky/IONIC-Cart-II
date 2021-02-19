import { ModalController } from '@ionic/angular';
import { ModalPagePage } from './../pages/modal-page/modal-page.page';
import { Pedido } from './../models/pedido';
import { PedidoService } from './../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  pedidos: Pedido[] = [];

  constructor( private _pedidoService: PedidoService,
                private modalCtrl: ModalController
    ) {}

  ngOnInit(){
    this.pedidos = this._pedidoService.getPedidos();
  }

  async openPedido( pedido: Pedido){

    let modal = await this.modalCtrl.create({
      component: ModalPagePage,
      cssClass: 'modal-page'
    });

    this._pedidoService.setPedido(pedido);
    modal.present();
  }

}
