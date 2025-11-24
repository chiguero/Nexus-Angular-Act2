import { Injectable } from '@angular/core';
import { Libro } from '../data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items = new BehaviorSubject<Libro[]>([]);
  items$ = this._items.asObservable();

  get items(): Libro[] {
    return this._items.getValue();
  }

  add(libro: Libro) {
    this._items.next([...this.items, libro]);
  }

  remove(libroId: number) {
    // Encuentra el índice de la primera ocurrencia del libro a eliminar
    const index = this.items.findIndex(item => item.id === libroId);
    if (index > -1) {
      // Crea una nueva lista sin el libro en ese índice específico
      const updatedItems = [...this.items.slice(0, index), ...this.items.slice(index + 1)];
      this._items.next(updatedItems);
    }
  }

  clear() {
    this._items.next([]);
  }

  total(): number {
    return this.items.reduce((s, i) => s + i.precio, 0);
  }
}