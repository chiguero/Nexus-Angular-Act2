import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRODUCTOS_CAFETERIA } from '../../../data/cafeteria.productos';
import { Producto } from '../../../models/cafeteria.model';
import { CafeteriaService } from '../../../services/cafeteria.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos {
  productos: Producto[] = PRODUCTOS_CAFETERIA;
  categoriaSeleccionada: string = 'todas';

  constructor(private cafeteriaService: CafeteriaService) {}

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
