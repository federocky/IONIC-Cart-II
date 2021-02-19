import { Product } from './../models/products';
import { Pedido } from './../models/pedido';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  //guardaremos los pedidos
  pedidos: Pedido[] = [];
  contador = 0;

  //pedido actual para mostrar
  pedidoActual: Pedido;


  constructor() { }

  //devuelve todos los pedidos
  getPedidos(){
    return this.pedidos;
  }

  addPedido( products: Product[] ){
    this.contador++;

    let precio = 0;

    let fecha = new Date();

    let fechaPedido = fecha.toDateString();

    products.forEach( prod => {
      precio += prod.price * prod.amount;
    });

    const pedido: Pedido = {
      id: this.contador,
      fecha: fechaPedido,
      price: precio,
      productos: products
    }

    console.log(this.pedidos);
    this.pedidos.push(pedido);
  }

  setPedido( pedido: Pedido ){
    this.pedidoActual = pedido;
  }

  getPedido(){
    return this.pedidoActual;
  }

}
