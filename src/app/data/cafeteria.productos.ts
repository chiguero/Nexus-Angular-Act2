import { Producto } from '../models/cafeteria.model';

export const PRODUCTOS_CAFETERIA: Producto[] = [
  {
    id: 1,
    nombre: 'Café Espresso',
    categoria: 'cafe',
    precio: 2.50,
    imagen: '/assets/images/cafeteria/espresso.jpg',
    descripcion: 'Café espresso italiano intenso y aromático'
  },
  {
    id: 2,
    nombre: 'Cappuccino',
    categoria: 'cafe',
    precio: 3.50,
  imagen: '/assets/images/cafeteria/capuccino.jpg',
    descripcion: 'Espresso con leche vaporizada y espuma'
  },
  {
    id: 3,
    nombre: 'Latte',
    categoria: 'cafe',
    precio: 3.80,
    imagen: '/assets/images/cafeteria/latte.jpg',
    descripcion: 'Café con leche suave y cremoso'
  },
  {
    id: 4,
    nombre: 'Croissant',
    categoria: 'reposteria',
    precio: 2.20,
    imagen: '/assets/images/cafeteria/croissant.jpg',
    descripcion: 'Croissant francés recién horneado'
  },
  {
    id: 5,
    nombre: 'Tarta de Zanahoria',
    categoria: 'reposteria',
    precio: 4.50,
    imagen: '/assets/images/cafeteria/tarta-zanahoria.jpg',
    descripcion: 'Tarta casera con frosting de queso'
  },
  {
    id: 6,
    nombre: 'Brownie',
    categoria: 'reposteria',
    precio: 3.50,
    imagen: '/assets/images/cafeteria/brownie.jpg',
    descripcion: 'Brownie de chocolate con nueces'
  },
  {
    id: 7,
    nombre: 'Zumo Natural',
    categoria: 'bebida',
    precio: 4.00,
    imagen: '/assets/images/cafeteria/zumo.jpg',
    descripcion: 'Zumo de naranja recién exprimido'
  },
  {
    id: 8,
    nombre: 'Té Verde',
    categoria: 'bebida',
    precio: 2.80,
    imagen: '/assets/images/cafeteria/te-verde.jpg',
    descripcion: 'Té verde orgánico japonés'
  }
];