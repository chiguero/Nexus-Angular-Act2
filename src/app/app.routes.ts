import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Masvendidos } from './components/masvendidos/masvendidos';
import { Buscador } from './components/buscador/buscador';
import { Carrito } from './components/carrito/carrito';
import { Productos } from './components/cafeteria/productos/productos';
import { Checkout } from './components/cafeteria/checkout/checkout';
import { DatosPedido } from './components/cafeteria/datos-pedido/datos-pedido';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'masvendidos', component: Masvendidos },
  { path: 'buscador', component: Buscador },
  { path: 'carrito', component: Carrito },
    { path: 'cafeteria/productos', component: Productos },
  { path: 'cafeteria/checkout', component: Checkout },
  { path: 'cafeteria/datos-pedido', component: DatosPedido },
  { path: '**', redirectTo: '' }
];