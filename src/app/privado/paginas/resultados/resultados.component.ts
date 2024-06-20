import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { EvaluadorService } from '../../../core/servicios/evaluador/evaluador.service';
import { RadioGroupFrontComponent } from '../../../core/componentes/controles/form/radio-group-front/radio-group-front.component';
import { InputComponent } from '../../../core/componentes/controles/form/input/input.component';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { Respuesta } from '../../../core/interfaces/utilidades/respuesta.interface';
import { Pregunta } from '../../../core/interfaces/utilidades/pregunta.interface';

@Component({
  selector: 'app-resultados',
  standalone: true,
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css',
  imports: [
    NzAlertModule,
    CommonModule,
    NzIconModule,
    ReactiveFormsModule,
    NzFormModule,
    InputComponent,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzProgressModule,
    RadioGroupFrontComponent,
  ],
})
export class ResultadosComponent {
  tipo:"success" | "info" | "warning" | "error" = "info";
  descripcion: string = "Tu puntaje es de 0 puntos. ¡Sigue intentando!";
  puntaje: number = 0;
  preguntas: Pregunta[] = [];
  respuestas: Respuesta[] = [];
  
  // todo está deshabilitado
  modalForm = this.fb.group({
    fecha: { value: null, disabled: true},
    nombre: { value: null, disabled: true},
    apellido:{ value: null, disabled: true},
    p_1: { value: null, disabled: true},
    p_2: { value: null, disabled: true},
    p_3: { value: null, disabled: true},
    p_4: { value: null, disabled: true},
    p_5: { value: null, disabled: true},
    p_6: { value: null, disabled: true},
    p_7: { value: null, disabled: true},
    p_8: { value: null, disabled: true},
    p_9: { value: null, disabled: true},
    p_10: { value: null, disabled: true},
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private evaluadorService: EvaluadorService
  ) {
    this.evaluadorService.evaluar();
    this.setDescripcion();
    this.preguntas = this.evaluadorService.preguntas;
    this.respuestas = this.evaluadorService.respuestas;
    this.modalForm.patchValue(this.evaluadorService.formulario.value);
  }

  setDescripcion() {
    this.puntaje = this.evaluadorService.puntaje;
    if (this.puntaje < 10) {
      this.tipo = "error";
      this.descripcion = "Tu puntaje es de " + this.puntaje + " puntos. ¡Sigue intentando!";
    } else if (this.puntaje < 11) {
      this.tipo = "warning";
      this.descripcion = "Tu puntaje es de " + this.puntaje + " puntos. ¡Casi lo logras!";
    } else {
      this.tipo = "success";
      this.descripcion = "¡Felicidades! Tu puntaje es de " + this.puntaje + " puntos.";
    }
  }

}
