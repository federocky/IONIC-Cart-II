import { PedidoService } from './../../services/pedido.service';
import { Pedido } from './../../models/pedido';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  pedido: Pedido

  constructor(private modalCtrl: ModalController,
              private _pedidoService: PedidoService
    ) { }

  ngOnInit() {
    this.pedido = this._pedidoService.getPedido();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
