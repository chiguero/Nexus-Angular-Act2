import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CafeteriaService } from '../../services/cafeteria.service';
import { PedidoItem } from '../../models/cafeteria.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout implements OnInit {
  pedidoItems: PedidoItem[] = [];
  tipoServicio: 'mesa' | 'mostrador' = 'mesa';
  metodoPago: 'online' | 'efectivo' = 'efectivo';

  constructor(
    private cafeteriaService: CafeteriaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cafeteriaService.pedidoItems$.subscribe(items => {
      this.pedidoItems = items;
    });
  }

  actualizarCantidad(productoId: number, cantidad: number) {
    this.cafeteriaService.actualizarCantidad(productoId, cantidad);
  }

  eliminarProducto(productoId: number) {
    this.cafeteriaService.eliminarProducto(productoId);
  }

  get total(): number {
    return this.cafeteriaService.calcularTotal();
  }

  continuarAPago() {
    if (this.pedidoItems.length === 0) {
      alert('Tu pedido está vacío');
      return;
    }
    
    // Guardar preferencias en sessionStorage
    sessionStorage.setItem('tipoServicio', this.tipoServicio);
    sessionStorage.setItem('metodoPago', this.metodoPago);
    
    this.router.navigate(['/cafeteria/datos-pedido']);
  }
}