import { QuestionInterface } from './question.interface';

export interface ClueInterface {
  id: string;
  title: string;
  solved: boolean;
  questions: QuestionInterface[];
}
