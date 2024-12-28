import { Injectable, signal, WritableSignal } from '@angular/core';

import { ClueModel } from '../models/clue.model';

@Injectable({
  providedIn: 'root',
})
export class ClueService {
  public clues: WritableSignal<ClueModel[]> = signal<ClueModel[]>(this.buildClues());

  private buildClues(): ClueModel[] {
    return [
      new ClueModel('1', 'Pista 1'),
      new ClueModel('2', 'Pista 2'),
      new ClueModel('3', 'Pista 3'),
      new ClueModel('4', 'Pista 4'),
      new ClueModel('5', 'Pista 5'),
      new ClueModel('6', 'Pista 6'),
    ];
  }
}
