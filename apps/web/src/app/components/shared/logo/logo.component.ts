import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <a [routerLink]="['/']" class="flex items-center gap-2">
      <img
        src="https://i.ibb.co/HtQjdjQ/logo.png"
        class="h-10 w-10 sm:h-15 sm:w-15"
        alt="logo"
      />
      <img
        src="https://i.ibb.co/wcFrdBX/logo-text.png"
        class="h-5 w-48 sm:h-15 sm:w-60"
        alt="logo text"
      />
    </a>
  `,
})
export class LogoComponent {}
