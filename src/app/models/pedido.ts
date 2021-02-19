import { Product } from './products';

export interface Pedido {
    id: number;
    fecha: string;
    price: number;
    productos: Product[];
  }