// src/app/components/buscador/buscador.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LIBROS, Libro } from '../../data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.html',
  styleUrls: ['./buscador.css']
})
export class Buscador {
  libros: Libro[] = LIBROS;
  filtroTitulo = '';
  filtroAutor = '';
  filtroAnio: number | null = null;

  filtroCategoria = '';
  categorias: string[] = Array.from(new Set(this.libros.map(l => l.categoria)));

  constructor(private cart: CartService) {}

  get librosFiltrados(): Libro[] {
    return this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(this.filtroTitulo.trim().toLowerCase()) &&
      libro.autor.toLowerCase().includes(this.filtroAutor.trim().toLowerCase()) &&
      (this.filtroAnio ? libro.anio === this.filtroAnio : true) &&
      libro.categoria.toLowerCase().includes(this.filtroCategoria.trim().toLowerCase())
    );
  }

  addToCart(libro: Libro) {
    this.cart.add(libro);
  }

  clearFilters() {
    this.filtroTitulo = '';
    this.filtroAutor = '';
    this.filtroAnio = null;
    this.filtroCategoria = '';
  }
}
