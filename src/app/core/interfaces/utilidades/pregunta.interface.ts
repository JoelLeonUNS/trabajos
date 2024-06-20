import { Alternativa } from "./alternativa.interface";

export interface Pregunta {
    id: number;
    texto: string;
    alternativas: Alternativa[];
    respuesta_id?: number;
}