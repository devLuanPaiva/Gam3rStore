import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './components/template/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
