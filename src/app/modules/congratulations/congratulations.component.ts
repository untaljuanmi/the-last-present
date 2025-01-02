import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tlp-congratulations',
  standalone: true,
  imports: [],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CongratulationsComponent {}
