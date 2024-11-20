import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: ` <div class="test">Test</div>
    <div class="bg-gray-500 text-white text-3xl font-bold px-5 py-3 rounded-md">
      Button
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
