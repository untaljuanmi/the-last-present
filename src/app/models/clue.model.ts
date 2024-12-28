import { ClueInterface } from '../interfaces/clue.interface';

export class ClueModel implements ClueInterface {
  id: string;
  title: string;
  solved: boolean;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
    this.solved = false;
  }
}
