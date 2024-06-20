import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzDividerModule,
  ],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css',
})
export class PrivadoComponent {
  isCollapsed = false;
  cargando: boolean = false;

  rolUsuario?: string;
  nombreUsuario?: string;

  constructor(private msgService: NzMessageService, private router: Router) {}

  salir() {
    this.manejarRespuesta(null);
  }

  manejarRespuesta(respuesta: any): void {
    this.cargando = false;
    this.msgService.success('¡Se cerró sesión exitosamente!');
  }

  manejarError(errores: any): void {
    this.cargando = false;
    this.msgService.error('Ocurrió un error al cerrar sesión.');
    console.log(errores.error.errores);
  }
}
