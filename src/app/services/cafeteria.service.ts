import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto, PedidoItem } from '../models/cafeteria.model';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {
  private _pedidoItems = new BehaviorSubject<PedidoItem[]>([]);
  pedidoItems$ = this._pedidoItems.asObservable();

  get items(): PedidoItem[] {
    return this._pedidoItems.getValue();
  }

  agregarProducto(producto: Producto) {
    const items = this.items;
    const existente = items.find(item => item.producto.id === producto.id);
    
    if (existente) {
      existente.cantidad++;
      this._pedidoItems.next([...items]);
    } else {
      this._pedidoItems.next([...items, { producto, cantidad: 1 }]);
    }
  }

  actualizarCantidad(productoId: number, cantidad: number) {
    const items = this.items;
    const item = items.find(i => i.producto.id === productoId);
    
    if (item) {
      if (cantidad <= 0) {
        this.eliminarProducto(productoId);
      } else {
        item.cantidad = cantidad;
        this._pedidoItems.next([...items]);
      }
    }
  }

  eliminarProducto(productoId: number) {
    const items = this.items.filter(item => item.producto.id !== productoId);
    this._pedidoItems.next(items);
  }

  limpiarPedido() {
    this._pedidoItems.next([]);
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => 
      total + (item.producto.precio * item.cantidad), 0
    );
  }
}