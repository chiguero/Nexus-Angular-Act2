import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CafeteriaService } from '../../../services/cafeteria.service';

@Component({
  selector: 'app-datos-pedido',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './datos-pedido.html',
  styleUrls: ['./datos-pedido.css']
})
export class DatosPedido implements OnInit {
  formularioPedido!: FormGroup;
  tipoServicio: string = '';
  metodoPago: string = '';
  mostrarMensajeExito = false;

  constructor(
    private fb: FormBuilder,
    private cafeteriaService: CafeteriaService,
    private router: Router
  ) {}

  ngOnInit() {
    // Recuperar preferencias
    this.tipoServicio = sessionStorage.getItem('tipoServicio') || 'mesa';
    this.metodoPago = sessionStorage.getItem('metodoPago') || 'efectivo';

    // Crear formulario reactivo
    this.formularioPedido = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      numeroMesa: ['', this.tipoServicio === 'mesa' ? [Validators.required, Validators.min(1)] : []],
      observaciones: ['']
    });
  }

  get nombre() {
    return this.formularioPedido.get('nombre');
  }

  get email() {
    return this.formularioPedido.get('email');
  }

  get numeroMesa() {
    return this.formularioPedido.get('numeroMesa');
  }

  enviarPedido() {
    if (this.formularioPedido.invalid) {
      this.formularioPedido.markAllAsTouched();
      return;
    }

    const datosPedido = this.formularioPedido.value;
    const total = this.cafeteriaService.calcularTotal();
    const items = this.cafeteriaService.items;

    console.log('Pedido enviado:', {
      ...datosPedido,
      tipoServicio: this.tipoServicio,
      metodoPago: this.metodoPago,
      items,
      total
    });

    // Mostrar mensaje de éxito
    this.mostrarMensajeExito = true;

    // Limpiar pedido y redirigir después de 3 segundos
    setTimeout(() => {
      this.cafeteriaService.limpiarPedido();
      sessionStorage.removeItem('tipoServicio');
      sessionStorage.removeItem('metodoPago');
      this.router.navigate(['/cafeteria/productos']);
    }, 3000);
  }

  get total(): number {
    return this.cafeteriaService.calcularTotal();
  }
}
