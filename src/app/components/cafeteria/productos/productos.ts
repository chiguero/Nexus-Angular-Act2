import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../../models/cafeteria.model';
import { CafeteriaService } from '../../../services/cafeteria.service';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  categoriaSeleccionada: string = 'todas';
  cargando: boolean = true;
  error: string = '';

  constructor(
    private cafeteriaService: CafeteriaService,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.error = 'No se pudieron cargar los productos';
        this.cargando = false;
      }
    });
  }

  get productosFiltrados(): Producto[] {
    if (this.categoriaSeleccionada === 'todas') {
      return this.productos;
    }
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  filtrarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  agregarAlPedido(producto: Producto) {
    this.cafeteriaService.agregarProducto(producto);
  }

  get totalItems(): number {
    return this.cafeteriaService.items.reduce((sum, item) => sum + item.cantidad, 0);
  }
}