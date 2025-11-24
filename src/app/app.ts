// src/app/app.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';
import { Libro } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Nexus');
  items$: Observable<Libro[]>;

  constructor(private cart: CartService) {
    this.items$ = cart.items$;
  }
}