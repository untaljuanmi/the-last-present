import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { map } from 'rxjs';

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
export default class ClueComponent {
  private _clueService: ClueService = inject(ClueService);
  private _activatedRoute = inject(ActivatedRoute);

  public clues: WritableSignal<ClueModel[]> = this._clueService.clues;
  public clue: Signal<ClueModel | undefined> = computed(() =>
    this.clues().find((clue) => clue.id === this.clueId())
  );

  public clueId: Signal<string | undefined> = toSignal<string>(
    this._activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') ?? ''))
  );
}
