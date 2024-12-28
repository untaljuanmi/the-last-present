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
}
