import { Component } from '@angular/core';
import { RadioGroupFrontComponent } from "../../../core/componentes/controles/form/radio-group-front/radio-group-front.component";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { InputComponent } from '../../../core/componentes/controles/form/input/input.component';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { EvaluadorService } from '../../../core/servicios/evaluador/evaluador.service';
import { Pregunta } from '../../../core/interfaces/utilidades/pregunta.interface';

@Component({
    selector: 'app-examenes',
    standalone: true,
    templateUrl: './examenes.component.html',
    styleUrl: './examenes.component.css',
    imports: [
      CommonModule,
      NzIconModule,
      ReactiveFormsModule,
      NzFormModule,
      InputComponent,
      NzButtonModule,
      NzGridModule,
      NzDividerModule,
      NzProgressModule,
      RadioGroupFrontComponent
    ]
})
export class ExamenesComponent {
  confirmando:boolean = false;
  porcentaje:number = 0;
  preguntas: Pregunta[] = [];
  // fecha con barras en vez de guiones
  fecha = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();

  modalForm = this.fb.group({
    nombre: [null, [Validators.required]],
    apellido: [null, [Validators.required]],
    fecha: [this.fecha, [Validators.required]],
    p_1: [null, [Validators.required]],
    p_2: [null, [Validators.required]],
    p_3: [null, [Validators.required]],
    p_4: [null, [Validators.required]],
    p_5: [null, [Validators.required]],
    p_6: [null, [Validators.required]],
    p_7: [null, [Validators.required]],
    p_8: [null, [Validators.required]],
    p_9: [null, [Validators.required]],
    p_10: [null, [Validators.required]],
  });

  constructor(
    private  msgService: NzMessageService,
    private fb: NonNullableFormBuilder,
    private evaluadorService: EvaluadorService
  ) {

  }

  ngOnInit() {
    this.preguntas = this.evaluadorService.preguntas;
  }

  setPorcentaje() {
    const valores = Object.values(this.modalForm.value);
    // si los valores son diferentes de nulo se aumenta el porcentaje, excepto la fecha, nombres y apellidos
    const porcentaje = valores.filter((valor) => 
    valor !== null && 
    valor !== this.modalForm.get('fecha')?.value
    ).length / (valores.length - 1)*100;
    // se redondea a 2 decimales
    this.porcentaje = Math.round(porcentaje * 100) / 100;
  }

  enviarForm() {
    this.confirmando = true;
    if (this.modalForm.valid) {
      this.evaluadorService.setFormulario(this.modalForm.value);
      this.msgService.success('Examen enviado correctamente.');
    } else {
      console.log(this.modalForm.value);
      this.confirmando = false;
      this.msgService.error('Datos incompletos, completelos para enviar el examen.');
      Object.values(this.modalForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
