export interface Producto {
  id: number;
  nombre: string;
  categoria: 'cafe' | 'reposteria' | 'bebida';
  precio: number;
  imagen: string;
  descripcion?: string;
}

export interface PedidoItem {
  producto: Producto;
  cantidad: number;
}

export interface DatosPedido {
  nombre: string;
  email: string;
  numeroMesa: number;
  tipoServicio: 'mesa' | 'mostrador';
  metodoPago: 'online' | 'efectivo';
}