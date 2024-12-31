import { Injectable, signal, WritableSignal } from '@angular/core';

import { QuestionInterface } from '../interfaces/question.interface';
import { ClueModel } from '../models/clue.model';

@Injectable({
  providedIn: 'root',
})
export class ClueService {
  public clues: WritableSignal<ClueModel[]> = signal<ClueModel[]>(this.getClues());

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
            question:
              '¿Quién interpretó al Joker en la primera película de Batman dirigida por Tim Burton?',
            options: [
              { id: 'a', answer: 'César Romero' },
              { id: 'b', answer: 'Jack Nicholson' },
              { id: 'c', answer: 'Heath Ledger' },
              { id: 'd', answer: 'Jared Leto' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '2',
            question:
              '¿Quién interpretó al Joker en la primera película de Batman dirigida por Tim Burton?',
            options: [
              { id: 'a', answer: 'César Romero' },
              { id: 'b', answer: 'Jack Nicholson' },
              { id: 'c', answer: 'Heath Ledger' },
              { id: 'd', answer: 'Jared Leto' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '3',
            question:
              '¿Quién interpretó al Joker en la primera película de Batman dirigida por Tim Burton?',
            options: [
              { id: 'a', answer: 'César Romero' },
              { id: 'b', answer: 'Jack Nicholson' },
              { id: 'c', answer: 'Heath Ledger' },
              { id: 'd', answer: 'Jared Leto' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '4',
            question:
              '¿Quién interpretó al Joker en la primera película de Batman dirigida por Tim Burton?',
            options: [
              { id: 'a', answer: 'César Romero' },
              { id: 'b', answer: 'Jack Nicholson' },
              { id: 'c', answer: 'Heath Ledger' },
              { id: 'd', answer: 'Jared Leto' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
          {
            id: '5',
            question:
              '¿Quién interpretó al Joker en la primera película de Batman dirigida por Tim Burton?',
            options: [
              { id: 'a', answer: 'César Romero' },
              { id: 'b', answer: 'Jack Nicholson' },
              { id: 'c', answer: 'Heath Ledger' },
              { id: 'd', answer: 'Jared Leto' },
            ],
            answer: null,
            correctAnswer: 'b',
            answered: false,
          },
        ];
      default:
        return [];
    }
  }
}
