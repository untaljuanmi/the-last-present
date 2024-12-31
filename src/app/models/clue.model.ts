import { ClueInterface } from '../interfaces/clue.interface';
import { QuestionInterface } from '../interfaces/question.interface';

export class ClueModel implements ClueInterface {
  id: string;
  title: string;
  solved: boolean;
  questions: QuestionInterface[];

  constructor(id: string, title: string, questions: QuestionInterface[]) {
    this.id = id;
    this.title = title;
    this.solved = false;
    this.questions = questions;
  }
}
