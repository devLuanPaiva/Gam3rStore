import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a [routerLink]="['/']" class="flex items-center gap-3">
      <img
        src="https://i.ibb.co/HtQjdjQ/logo.png"
        height="60"
        width="60"
        alt="logo"
      />
      <img
        src="https://i.ibb.co/wcFrdBX/logo-text.png"
        width="230"
        height="60"
        alt="logo text"
      />
    </a>
  `,
})
export class LogoComponent {}
