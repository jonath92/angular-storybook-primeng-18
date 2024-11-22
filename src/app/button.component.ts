import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  template: ` <p-button
    label="Check"
    [style]="{ background: 'blue' }"
    icon="pi pi-check"
  ></p-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
