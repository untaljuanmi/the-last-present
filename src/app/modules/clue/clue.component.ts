import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { AnswerInterface } from '../../interfaces/answer.interface';
import { QuestionInterface } from '../../interfaces/question.interface';
import { ClueModel } from '../../models/clue.model';
import { ClueService } from '../../services/clue.service';

@Component({
  selector: 'tlp-clue',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clue.component.html',
  styleUrl: './clue.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClueComponent implements OnInit {
  private _clueService: ClueService = inject(ClueService);
  private _activatedRoute = inject(ActivatedRoute);

  public page: WritableSignal<number> = signal(1);

  public clues: WritableSignal<ClueModel[]> = this._clueService.clues;
  public clue: Signal<ClueModel | undefined> = computed(() =>
    this.clues().find((clue) => clue.id === this.clueId())
  );

  public question: WritableSignal<QuestionInterface | null> = signal(null);

  public correctAnswers: WritableSignal<number> = signal(0);

  public clueId: Signal<string | undefined> = toSignal<string>(
    this._activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') ?? ''))
  );

  public ngOnInit(): void {
    this.setNextQuestion();
  }

  public onClickOption(option: AnswerInterface): void {
    if (!this.clue() || !this.question()) {
      return;
    }

    const clue: ClueModel | undefined = this.clues().find((clue) => clue.id === this.clueId());

    if (!clue) {
      return;
    }

    const question: QuestionInterface | undefined = clue.questions?.find(
      (questionToFind: QuestionInterface) => questionToFind.id === this.question()!.id
    );

    if (!question) {
      return;
    }

    question.answer = option.id;
    question.answered = true;

    this._clueService.saveClues();

    this.calculateCorrectAnswers();
  }

  public onClickGoToPreviousQuestion(): void {
    if (!this.clue() || !this.question()) {
      return;
    }

    const currentQuestion: number = parseInt(this.question()!.id) - 1;
    const nextQuestion: number = currentQuestion - 1;

    this.question.set(this.clue()!.questions[nextQuestion]);
  }

  public onClickGoToNextQuestion(): void {
    if (!this.clue() || !this.question()) {
      return;
    }

    const currentQuestion: number = parseInt(this.question()!.id) - 1;
    const nextQuestion: number = currentQuestion + 1;

    this.question.set(nextQuestion >= 5 ? null : this.clue()!.questions[nextQuestion]);
  }

  public onClickRestart(): void {
    if (!this.clue()) {
      return;
    }

    this.clue()!.questions?.forEach((question: QuestionInterface) => {
      question.answer = null;
      question.answered = false;
    });

    this._clueService.saveClues();

    this.setNextQuestion();
  }

  public getClue(): string {
    const clue: ClueModel | undefined = this.clue();

    if (!clue) {
      return '';
    }

    switch (clue.id) {
      case '1':
        return 'A Dark Knight';
      case '2':
        return 'Now we are free';
      case '3':
        return "You've been called back to Top Gun";
      case '4':
        return 'Time';
      case '5':
        return 'Skull and crossbones';
      case '6':
        return 'Can you feel the love tonight';
      default:
        return '';
    }
  }

  public getEmoji(): string {
    const clue: ClueModel | undefined = this.clue();

    if (!clue) {
      return '?';
    }

    switch (clue.id) {
      case '1':
        return '🦇';
      case '2':
        return '🔱';
      case '3':
        return '🛩️';
      case '4':
        return '🕗';
      case '5':
        return '🏴‍☠️';
      case '6':
        return '🦁';
      default:
        return '?';
    }
  }

  private setNextQuestion(): void {
    this.question.set(
      this.clue()?.questions?.find((question: QuestionInterface) => !question.answered) ?? null
    );
    this.calculateCorrectAnswers();
  }

  private calculateCorrectAnswers(): void {
    let correctAnswers: number = 0;

    this.clue()!.questions?.forEach(
      (question: QuestionInterface) =>
        (correctAnswers = correctAnswers + (question.answer === question.correctAnswer ? 1 : 0))
    );

    this.correctAnswers.set(correctAnswers);

    if (this.correctAnswers() < 3) {
      return;
    }

    this.clue()!.solved = true;
    this._clueService.saveClues();
  }
}
