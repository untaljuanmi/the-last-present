import { Injectable, signal, WritableSignal } from '@angular/core';

import { QuestionInterface } from '../interfaces/question.interface';
import { ClueModel } from '../models/clue.model';

@Injectable({
  providedIn: 'root',
})
export class ClueService {
  public clues: WritableSignal<ClueModel[]> = signal<ClueModel[]>(this.getClues());

  public reset(): void {
    localStorage.removeItem('the-last-present-clues');
    this.clues.set(this.buildClues());
  }

  public getClues(): ClueModel[] {
    const clues: string | null = localStorage.getItem('the-last-present-clues');
    return clues ? JSON.parse(clues) : this.buildClues();
  }

  public saveClues(): void {
    localStorage.setItem('the-last-present-clues', JSON.stringify(this.clues()));
    this.clues.set([...this.clues()]);
  }

  private buildClues(): ClueModel[] {
    return [
      new ClueModel('1', 'Pista 1', this.buildQuestions('1')),
      new ClueModel('2', 'Pista 2', this.buildQuestions('2')),
      new ClueModel('3', 'Pista 3', this.buildQuestions('3')),
      new ClueModel('4', 'Pista 4', this.buildQuestions('4')),
      new ClueModel('5', 'Pista 5', this.buildQuestions('5')),
      new ClueModel('6', 'Pista 6', this.buildQuestions('6')),
    ];
  }

  private buildQuestions(clueId: string): QuestionInterface[] {
    switch (clueId) {
      case '1':
        return [
          {
            id: '1',
            question: "En 'El Rey León', ¿cómo se llama el lugar donde viven los leones?",
            options: [
              { id: 'a', answer: 'La Llanura Dorada' },
              { id: 'b', answer: 'El Valle del Rey' },
              { id: 'c', answer: 'El Reino Oscuro' },
              { id: 'd', answer: 'La Roca del Rey' },
            ],
            answer: null,
            correctAnswer: 'd',
            answered: false,
          },
          {
            id: '2',
            question: "¿Qué actor interpreta al protagonista de 'Origen'?",
            options: [
              { id: 'a', answer: 'Leonardo DiCaprio' },
              { id: 'b', answer: 'Christian Bale' },
              { id: 'c', answer: 'Tom Hardy' },
              { id: 'd', answer: 'Joseph Gordon-Levitt' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
          {
            id: '3',
            question: "¿Cuál es el nombre del villano principal en 'El Caballero Oscuro'?",
            options: [
              { id: 'a', answer: 'Dos Caras' },
              { id: 'b', answer: 'El Espantapájaros' },
              { id: 'c', answer: 'El Joker' },
              { id: 'd', answer: 'Bane' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '4',
            question:
              "En 'La Roca', ¿qué gas mortal se utiliza como amenaza principal en la película?",
            options: [
              { id: 'a', answer: 'VX' },
              { id: 'b', answer: 'Sarin' },
              { id: 'c', answer: 'Cloro' },
              { id: 'd', answer: 'Cianuro' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
          {
            id: '5',
            question: '¿En qué película aparece el planeta desértico Arrakis?',
            options: [
              { id: 'a', answer: 'Interstellar' },
              { id: 'b', answer: 'Dune' },
              { id: 'c', answer: 'El Caballero Oscuro' },
              { id: 'd', answer: 'Piratas del Caribe' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
        ];
      case '2':
        return [
          {
            id: '1',
            question:
              "En 'Interstellar', ¿cuál es el nombre del planeta al que llegan que está cubierto completamente por agua?",
            options: [
              { id: 'a', answer: 'Miller' },
              { id: 'b', answer: 'Mann' },
              { id: 'c', answer: 'Cooper' },
              { id: 'd', answer: 'Edmunds' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
          {
            id: '2',
            question:
              "En 'Dune', ¿qué sustancia es la más valiosa y esencial para los viajes espaciales?",
            options: [
              { id: 'a', answer: 'Esencia de Agua' },
              { id: 'b', answer: 'Especia' },
              { id: 'c', answer: 'Cristal de Arrakis' },
              { id: 'd', answer: 'Melange' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '3',
            question:
              "En 'El Caballero Oscuro: La leyenda renace', ¿cómo se llama la prisión de la que Bruce Wayne logra escapar?",
            options: [
              { id: 'a', answer: 'Blackgate' },
              { id: 'b', answer: 'Arkham' },
              { id: 'c', answer: 'El Pozo' },
              { id: 'd', answer: 'La Jaula' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '4',
            question:
              "En 'Gladiator', ¿cuál es el nombre del emperador que traiciona a Máximo y toma el trono?",
            options: [
              { id: 'a', answer: 'Nerón' },
              { id: 'b', answer: 'Comodo' },
              { id: 'c', answer: 'Tiberio' },
              { id: 'd', answer: 'Marco Aurelio' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '5',
            question:
              "En 'Piratas del Caribe: En el fin del mundo', ¿qué objeto utiliza Jack Sparrow para encontrar lo que más desea?",
            options: [
              { id: 'a', answer: 'El Tridente de Poseidón' },
              { id: 'b', answer: 'La Brújula Mágica' },
              { id: 'c', answer: 'El Cofre del Hombre Muerto' },
              { id: 'd', answer: 'La Perla Negra' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
        ];
      case '3':
        return [
          {
            id: '1',
            question:
              "En 'Origen', ¿cuál es el nombre del químico que crea la fórmula para entrar en sueños más profundos?",
            options: [
              { id: 'a', answer: 'Arthur' },
              { id: 'b', answer: 'Eames' },
              { id: 'c', answer: 'Yusuf' },
              { id: 'd', answer: 'Saito' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '2',
            question: "En 'Dune', ¿cómo se llama la tribu nativa del planeta Arrakis?",
            options: [
              { id: 'a', answer: 'Harkonnen' },
              { id: 'b', answer: 'Fremen' },
              { id: 'c', answer: 'Atreides' },
              { id: 'd', answer: 'Corrino' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '3',
            question:
              "En 'El Caballero Oscuro', ¿cómo planea el Joker dividir a los ciudadanos en los dos barcos durante la escena del clímax?",
            options: [
              { id: 'a', answer: 'Les da pistolas' },
              { id: 'b', answer: 'Les entrega detonadores' },
              { id: 'c', answer: 'Los pone a pelear' },
              { id: 'd', answer: 'Les entrega bombas' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '4',
            question: "En 'La Roca', ¿qué actor interpreta al químico experto Stanley Goodspeed?",
            options: [
              { id: 'a', answer: 'Michael Biehn' },
              { id: 'b', answer: 'Sean Connery' },
              { id: 'c', answer: 'Ed Harris' },
              { id: 'd', answer: 'Nicolas Cage' },
            ],
            answer: null,
            correctAnswer: 'd',
            answered: false,
          },
          {
            id: '5',
            question:
              "En 'Piratas del Caribe: El cofre del hombre muerto', ¿cuál es el objeto que contiene el corazón de Davy Jones?",
            options: [
              { id: 'a', answer: 'Un cofre' },
              { id: 'b', answer: 'Un relicario' },
              { id: 'c', answer: 'Una botella' },
              { id: 'd', answer: 'Una caja' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
        ];
      case '4':
        return [
          {
            id: '1',
            question:
              "En 'Interstellar', ¿qué relación tiene el personaje de Murph con el protagonista?",
            options: [
              { id: 'a', answer: 'Es su esposa' },
              { id: 'b', answer: 'Es su hija' },
              { id: 'c', answer: 'Es su hermana' },
              { id: 'd', answer: 'Es su madre' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '2',
            question: "En 'Dune', ¿qué prueba de las Bene Gesserit tiene que pasar Paul?",
            options: [
              { id: 'a', answer: 'El Kwisatz Haderach' },
              { id: 'b', answer: "El Muad'Dib" },
              { id: 'c', answer: 'El Gom Jabbar' },
              { id: 'd', answer: 'Un duelo a muerte' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '3',
            question:
              "En 'El Caballero Oscuro: La leyenda renace', ¿qué objeto representa la energía limpia creada por Wayne Enterprises?",
            options: [
              { id: 'a', answer: 'Un reactor nuclear' },
              { id: 'b', answer: 'Un generador de fusión' },
              { id: 'c', answer: 'Un motor eléctrico' },
              { id: 'd', answer: 'Un acumulador solar' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
          {
            id: '4',
            question: "En 'Gladiator', ¿cómo muere el personaje de Proximo?",
            options: [
              { id: 'a', answer: 'Envenenado' },
              { id: 'b', answer: 'Apuñalado' },
              { id: 'c', answer: 'Por flechas' },
              { id: 'd', answer: 'En combate' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '5',
            question: "En 'Kung Fu Panda', ¿cuál es el nombre del maestro que entrena a Po?",
            options: [
              { id: 'a', answer: 'Maestro Shifu' },
              { id: 'b', answer: 'Maestro Tigresa' },
              { id: 'c', answer: 'Maestro Mono' },
              { id: 'd', answer: 'Maestro Oogway' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
        ];
      case '5':
        return [
          {
            id: '1',
            question:
              "En 'Origen', ¿qué objeto utiliza Cobb como su tótem personal para distinguir los sueños de la realidad?",
            options: [
              { id: 'a', answer: 'Un dado' },
              { id: 'b', answer: 'Un peón de ajedrez' },
              { id: 'c', answer: 'Un trompo' },
              { id: 'd', answer: 'Una moneda' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '2',
            question:
              "En 'Dune', ¿cuál es el verdadero propósito de las Bene Gesserit en sus planes genéticos?",
            options: [
              { id: 'a', answer: 'Evitar una guerra galáctica' },
              { id: 'b', answer: 'Dominar a los Harkonnen' },
              { id: 'c', answer: 'Controlar la Spice' },
              { id: 'd', answer: 'Criar al Kwisatz Haderach' },
            ],
            answer: null,
            correctAnswer: 'd',
            answered: false,
          },
          {
            id: '3',
            question:
              "En 'Top Gun: Maverick', ¿quién interpreta al almirante Tom 'Iceman' Kazansky?",
            options: [
              { id: 'a', answer: 'Miles Teller' },
              { id: 'b', answer: 'Tom Cruise' },
              { id: 'c', answer: 'Val Kilmer' },
              { id: 'd', answer: 'Jon Hamm' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '4',
            question:
              "En 'Gladiator', ¿cómo demuestra Máximo su liderazgo al inicio de la película?",
            options: [
              { id: 'a', answer: 'Ganando una batalla' },
              { id: 'b', answer: 'Rescatando soldados' },
              { id: 'c', answer: 'Salvando al emperador' },
              { id: 'd', answer: 'Derrotando a un general' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
          {
            id: '5',
            question:
              "En 'Piratas del Caribe: La maldición de la Perla Negra', ¿qué debe devolver la tripulación de Barbossa para romper la maldición?",
            options: [
              { id: 'a', answer: 'La brújula de Jack Sparrow' },
              { id: 'b', answer: 'Una reliquia ancestral' },
              { id: 'c', answer: 'Un mapa antiguo' },
              { id: 'd', answer: 'El oro azteca' },
            ],
            answer: null,
            correctAnswer: 'd',
            answered: false,
          },
        ];
      case '6':
        return [
          {
            id: '1',
            question:
              "En 'Origen', ¿cómo llaman al estado donde una persona puede quedar atrapada en un nivel de sueño profundo indefinidamente?",
            options: [
              { id: 'a', answer: 'El Limbo' },
              { id: 'b', answer: 'La Zona' },
              { id: 'c', answer: 'La Inmersión' },
              { id: 'd', answer: 'El Vacío' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
          {
            id: '2',
            question:
              "En 'Dune', ¿qué símbolo aparece en los sueños de Paul Atreides como una señal de su destino?",
            options: [
              { id: 'a', answer: 'Un halcón' },
              { id: 'b', answer: 'Una luna creciente' },
              { id: 'c', answer: 'Un gusano de arena' },
              { id: 'd', answer: 'Un escudo' },
            ],
            answer: null,
            correctAnswer: 'c',
            answered: false,
          },
          {
            id: '3',
            question:
              "En 'El Hombre de Acero', ¿cuál es el nombre del padre biológico de Superman?",
            options: [
              { id: 'a', answer: 'Jonathan Kent' },
              { id: 'b', answer: 'Zod' },
              { id: 'c', answer: 'Kal-El' },
              { id: 'd', answer: 'Jor-El' },
            ],
            answer: null,
            correctAnswer: 'd',
            answered: false,
          },
          {
            id: '4',
            question:
              "En 'Dunkerque', ¿qué tipo de embarcaciones civiles se utilizan para rescatar a los soldados?",
            options: [
              { id: 'a', answer: 'Yates' },
              { id: 'b', answer: 'Pesqueros' },
              { id: 'c', answer: 'Lanchas rápidas' },
              { id: 'd', answer: 'Lanchas de motor' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '5',
            question:
              "En 'Piratas del Caribe: El cofre del hombre muerto', ¿cuál es el precio que Will Turner paga por salvar a su padre?",
            options: [
              { id: 'a', answer: 'Ser capitán' },
              { id: 'b', answer: 'Romper con Elizabeth' },
              { id: 'c', answer: 'Entregar la brújula' },
              { id: 'd', answer: 'Traicionar a Jack Sparrow' },
            ],
            answer: null,
            correctAnswer: 'a',
            answered: false,
          },
        ];
      default:
        return [];
    }
  }
}
