import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Producto } from '../models/cafeteria.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private jsonUrl = '/assets/data/productos.json';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los productos desde el JSON local
   */
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl).pipe(
      catchError(error => {
        console.error('Error al cargar productos:', error);
        return of([]); // Retorna array vacío si hay error
      })
    );
  }

  /**
   * Obtiene un producto específico por ID
   */
  getProductoById(id: number): Observable<Producto | undefined> {
    return this.http.get<Producto[]>(this.jsonUrl).pipe(
      map(productos => productos.find(p => p.id === id)),
      catchError(error => {
        console.error('Error al buscar producto:', error);
        return of(undefined);
      })
    );
  }

  /**
   * Filtra productos por categoría
   */
  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl).pipe(
      map(productos => productos.filter(p => p.categoria === categoria)),
      catchError(error => {
        console.error('Error al filtrar productos:', error);
        return of([]);
      })
    );
  }

  /**
   * Busca productos por nombre
   */
  buscarProductos(termino: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl).pipe(
      map(productos => 
        productos.filter(p => 
          p.nombre.toLowerCase().includes(termino.toLowerCase())
        )
      ),
      catchError(error => {
        console.error('Error al buscar productos:', error);
        return of([]);
      })
    );
  }
}