import { ChangeDetectionStrategy, Component, inject, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ClueModel } from '../../models/clue.model';
import { ClueService } from '../../services/clue.service';

@Component({
  selector: 'tlp-clues',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clues.component.html',
  styleUrl: './clues.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CluesComponent {
  private _clueService: ClueService = inject(ClueService);

  public clues: WritableSignal<ClueModel[]> = this._clueService.clues;

  public getClue(id: string): string {
    switch (id) {
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

  public getEmoji(id: string): string {
    switch (id) {
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
}
