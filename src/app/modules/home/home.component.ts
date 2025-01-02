import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ClueService } from '../../services/clue.service';

@Component({
  selector: 'tlp-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  public page: WritableSignal<number> = signal(1);

  public answer: Signal<string> = signal<string>('hans zimmer');

  private _clueService: ClueService = inject(ClueService);

  constructor() {
    this.loadPageFromLocalStorage();
  }

  public onClickGoToPreviousPage(): void {
    if (this.page() === 1) return;
    const page: number = this.page() - 1;
    this.page.set(page);
    this.savePageInLocalStorage(page);
  }

  public onClickGoToNextPage(): void {
    if (this.page() === 1) {
      this._clueService.reset();
    }

    const page: number = this.page() + 1;
    this.page.set(page);
    this.savePageInLocalStorage(page);
  }

  public onClickSolve(answer: string): void {
    if (answer?.toLowerCase()?.trim() !== this.answer()) {
      console.log(' -> Mal...');
      return;
    }
    console.log(' -> ¡Bien!');
  }

  private savePageInLocalStorage(page: number): void {
    localStorage.setItem('the-last-present-page', page.toString());
  }

  private loadPageFromLocalStorage(): void {
    const item: string | null = localStorage.getItem('the-last-present-page');
    const page: number | null = parseInt(item ?? '1');
    this.page.set(page ?? 1);
  }
}
