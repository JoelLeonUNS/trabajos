import { Injectable } from '@angular/core';
import { Pregunta } from '../../interfaces/utilidades/pregunta.interface';
import { Respuesta } from '../../interfaces/utilidades/respuesta.interface';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EvaluadorService {
  puntaje: number = 0;

  formulario = this.fb.group({
    fecha: { value: null, disabled: true },
    nombre: { value: null, disabled: true },
    apellido: { value: null, disabled: true },
    p_1: { value: null, disabled: true },
    p_2: { value: null, disabled: true },
    p_3: { value: null, disabled: true },
    p_4: { value: null, disabled: true },
    p_5: { value: null, disabled: true },
    p_6: { value: null, disabled: true },
    p_7: { value: null, disabled: true },
    p_8: { value: null, disabled: true },
    p_9: { value: null, disabled: true },
    p_10: { value: null, disabled: true },
  });

  constructor(private fb: NonNullableFormBuilder) {}

  preguntas: Pregunta[] = [
    {
      id: 1,
      texto:
        'Pregunta 1: ¿Cuál de las siguientes es una ventaja de llevar a cabo un proceso de mejora continua?',
      alternativas: [
        {
          id: 1,
          texto: 'a) Incrementa la burocracia y retrasa los procesos.',
          correcta: false,
        },
        {
          id: 2,
          texto:
            'b) Mejora la calidad del producto o servicio, lo que a su vez puede mejorar la lealtad a la marca.',
          correcta: true,
        },
        {
          id: 3,
          texto: 'c) Disminuye la colaboración entre equipos.',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) Reduce la satisfacción del cliente.',
          correcta: false,
        },
      ],
    },
    {
      id: 2,
      texto: 'Pregunta 2: ¿cómo fomenta la mejora continua la innovación?',
      alternativas: [
        {
          id: 1,
          texto: 'a) Aumentando la carga de trabajo sin ofrecer soluciones.',
          correcta: false,
        },
        {
          id: 2,
          texto:
            'b) Promoviendo la experimentación y el aprendizaje constante.',
          correcta: true,
        },
        {
          id: 3,
          texto: 'c) Manteniendo las prácticas y procesos sin cambios.',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) Fomentando una mentalidad de resistencia al cambio.',
          correcta: false,
        },
      ],
    },
    {
      id: 3,
      texto:
        'Pregunta 3: Según el modelo de mejora continua de ITIL, ¿cuál es el primer paso?',
      alternativas: [
        {
          id: 1,
          texto: 'a) ¿Dónde estamos ahora?',
          correcta: false,
        },
        {
          id: 2,
          texto: 'b) ¿Dónde deseamos estar?',
          correcta: false,
        },
        {
          id: 3,
          texto: 'c) ¿Cómo llegamos ahí?',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) ¿Cuál es la visión?',
          correcta: true,
        },
      ],
    },
    {
      id: 4,
      texto:
        'Pregunta 4: ¿Qué paso del modelo de mejora continua de ITIL se enfoca en la evaluación de los resultados obtenidos?',
      alternativas: [
        {
          id: 1,
          texto: 'a) ¿Dónde estamos ahora?',
          correcta: false,
        },
        {
          id: 2,
          texto: 'b) ¿Logramos llegar ahí?',
          correcta: true,
        },
        {
          id: 3,
          texto: 'c) Actuación.',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) ¿Cómo mantenemos el impulso?',
          correcta: false,
        },
      ],
    },
    {
      id: 5,
      texto:
        'Pregunta 5: ¿Cuál es el paso que se centra en la ejecución de las actividades planificadas en el modelo de mejora continua de ITIL?',
      alternativas: [
        {
          id: 1,
          texto: 'a) ¿Dónde estamos ahora?',
          correcta: false,
        },
        {
          id: 2,
          texto: 'b) ¿Cómo llegamos ahí?',
          correcta: false,
        },
        {
          id: 3,
          texto: 'c) Actuación.',
          correcta: true,
        },
        {
          id: 4,
          texto: 'd) ¿Cómo mantenemos el impulso?',
          correcta: false,
        },
      ],
    },
    {
      id: 6,
      texto:
        'Pregunta 6: ¿Cuál es uno de los objetivos principales de la mejora continua?',
      alternativas: [
        {
          id: 1,
          texto:
            'a) Incrementar la cantidad de productos sin importar la calidad.',
          correcta: false,
        },
        {
          id: 2,
          texto:
            'b) Reducir costos, identificar oportunidades y actuar de manera proactiva.',
          correcta: true,
        },
        {
          id: 3,
          texto: 'c) Implementar cambios grandes y costosos rápidamente.',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) Evitar cualquier tipo de cambio en los procesos.',
          correcta: false,
        },
      ],
    },
    {
      id: 7,
      texto: 'Pregunta 7: ¿Cómo se describe la práctica de la mejora continua?',
      alternativas: [
        {
          id: 1,
          texto:
            'a) Cambiar los procesos solo cuando sea absolutamente necesario.',
          correcta: false,
        },
        {
          id: 2,
          texto:
            'b) Buscar siempre oportunidades de cambio con el propósito de producir mejores resultados para la organización y sus clientes.',
          correcta: true,
        },
        {
          id: 3,
          texto:
            'c) Realizar cambios únicamente en los productos y no en los servicios.',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) Evitar revisiones regulares de las operaciones.',
          correcta: false,
        },
      ],
    },
    {
      id: 8,
      texto:
        'Pregunta 8: ¿Cuál es la principal responsabilidad del Gerente del CSI en el proceso de mejora continua ITIL?',
      alternativas: [
        {
          id: 1,
          texto:
            'a) Ejecutar cualquier proceso cotidiano que necesite mejoras.',
          correcta: false,
        },
        {
          id: 2,
          texto:
            'b) Proporcionar datos sobre incidentes y satisfacción del cliente.',
          correcta: false,
        },
        {
          id: 3,
          texto: 'c) Dirigir y coordinar el proceso de CSI.',
          correcta: true,
        },
        {
          id: 4,
          texto: 'd) Analizar tendencias y temas problemáticos.',
          correcta: false,
        },
      ],
    },
    {
      id: 9,
      texto:
        'Pregunta 9: ¿Qué función tiene el Gerente de Incidentes y del Service Desk en el proceso de mejora continua ITIL?',
      alternativas: [
        {
          id: 1,
          texto: 'a) Ejecutar procesos cotidianos que necesiten mejoras.',
          correcta: false,
        },
        {
          id: 2,
          texto:
            'b) Proporcionar datos sobre incidentes y satisfacción del cliente que pueden impulsar mejoras.',
          correcta: true,
        },
        {
          id: 3,
          texto: 'c) Dirigir y coordinar el proceso de CSI.',
          correcta: false,
        },
        {
          id: 4,
          texto:
            'd) Analizar tendencias para identificar temas comunes o áreas problemáticas.',
          correcta: false,
        },
      ],
    },
    {
      id: 10,
      texto:
        'Pregunta 10: ¿Cuál de los siguientes es un KPI común para medir la mejora continua ITIL?',
      alternativas: [
        {
          id: 1,
          texto: 'a) Tiempo promedio de respuesta a los correos electrónicos.',
          correcta: false,
        },
        {
          id: 2,
          texto: 'b) Número de servicios mejorados.',
          correcta: true,
        },
        {
          id: 3,
          texto: 'c) Cantidad de reuniones semanales.',
          correcta: false,
        },
        {
          id: 4,
          texto: 'd) Número de empleados en la organización.',
          correcta: false,
        },
      ],
    },
  ];

  respuestas: Respuesta[] = [];

  setFormulario(formulario: any) {
    this.formulario.patchValue(formulario);
    for (let i = 1; i <= this.preguntas.length; i++) {
      let repuesta_id = formulario[`p_${i}`];
      this.respuestas.push({ pregunta_id: i, alternativa_id: repuesta_id });
    }
  }

  evaluar() {
    this.puntaje = 0;
    if (this.respuestas.length === 0) {
      return;
    }
    for (let i = 0; i < this.preguntas.length; i++) {
      let repuesta_id = this.respuestas[i].alternativa_id;
      let alternativas = this.preguntas[i].alternativas;
      for (let j = 0; j < alternativas.length; j++) {
        if (alternativas[j].id == repuesta_id) {
          if (alternativas[j].correcta) {
            this.puntaje += 2;
          } else {
            this.puntaje -= 0.5;
          }
        }
      }
    }
  }
}
