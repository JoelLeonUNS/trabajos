import { Injectable } from '@angular/core';
import { MenuItem } from '../../../interfaces/utilidades/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  constructor() { }

  scrollTopMenu: number = 0;

  menuItems: MenuItem[] = [
    {
      level: 1,
      title: 'Examenes',
      icon: 'home',
      routerLink: '/examenes'
    },
    {
      level: 1,
      title: 'Resultados',
      icon: 'file',
      routerLink: '/resultados'
    },
  ]
}
