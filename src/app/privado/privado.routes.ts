import { Routes } from '@angular/router';
import { PrivadoComponent } from './privado.component';
import { ExamenesComponent } from './paginas/examenes/examenes.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';

export const PRIVADO_ROUTES: Routes = [
  {
    path: '',
    component: PrivadoComponent,
    children: [
      {
        path: '',
        redirectTo: 'examenes',
        pathMatch: 'full',
      },
      {
        path: 'examenes',
        component: ExamenesComponent,
      },
      {
        path: 'resultados',
        component: ResultadosComponent
      }

    ],
  },
];
