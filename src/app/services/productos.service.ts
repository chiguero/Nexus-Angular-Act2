import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/cafeteria.model';
import productosData from '../data/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /**
   * Obtiene todos los productos desde el JSON local
   */
  getProductos(): Observable<Producto[]> {
    return of(productosData as Producto[]);
  }

  /**
   * Obtiene un producto específico por ID
   */
  getProductoById(id: number): Observable<Producto | undefined> {
    const producto = productosData.find((p: any) => p.id === id);
    return of(producto as Producto | undefined);
  }

  /**
   * Filtra productos por categoría
   */
  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    const filtrados = productosData.filter((p: any) => p.categoria === categoria);
    return of(filtrados as Producto[]);
  }

  /**
   * Busca productos por nombre
   */
  buscarProductos(termino: string): Observable<Producto[]> {
    const resultados = productosData.filter((p: any) => 
      p.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    return of(resultados as Producto[]);
  }
}