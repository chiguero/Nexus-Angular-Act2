import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Masvendidos } from './components/masvendidos/masvendidos';
import { Buscador } from './components/buscador/buscador';
import { Carrito } from './components/carrito/carrito';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'masvendidos', component: Masvendidos },
  { path: 'buscador', component: Buscador },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: '' }
];