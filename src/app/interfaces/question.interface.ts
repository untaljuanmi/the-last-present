import { AnswerInterface } from './answer.interface';

export interface QuestionInterface {
  id: string;
  question: string;
  options: AnswerInterface[];
  answer: string | null;
  correctAnswer: string;
  answered: boolean;
}
