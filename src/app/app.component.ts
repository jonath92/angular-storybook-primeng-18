import { Component } from '@angular/core';
import { ButtonComponent } from "./button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
  <app-button/>
  `,
})
export class AppComponent {
  title = 'angular-vite-tailwind-storybook';
}
