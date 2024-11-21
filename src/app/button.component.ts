import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  template: ` <p-button label="Check" icon="pi pi-check"></p-button>

    <div class="test">Test</div>
    <div class="bg-gray-500 text-white text-3xl font-bold px-5 py-3 rounded-md">
      Button
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
