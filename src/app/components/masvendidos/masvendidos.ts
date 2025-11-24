import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LIBROS, Libro } from '../../data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-masvendidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './masvendidos.html',
  styleUrls: ['./masvendidos.css']
})
export class Masvendidos {
  libros: Libro[] = LIBROS.slice(0, 4);
  hoveredBookId: number | null = null;

  constructor(private cart: CartService) {}

  addToCart(libro: Libro) {
    this.cart.add(libro);
  }
}
