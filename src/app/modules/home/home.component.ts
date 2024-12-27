import { ChangeDetectionStrategy, Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'tlp-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  public page: WritableSignal<number> = signal(3);

  public answer: Signal<string> = signal<string>('hans zimmer');

  public onClickGoToPreviousPage(): void {
    if (this.page() === 1) return;
    this.page.set(this.page() - 1);
  }

  public onClickGoToNextPage(): void {
    this.page.set(this.page() + 1);
  }

  public onClickSolve(answer: string): void {
    if (answer?.toLowerCase()?.trim() !== this.answer()) {
      console.log(' -> Mal...');
      return;
    }
    console.log(' -> ¡Bien!');
  }

  public onClickGetClue(): void {}
}
