import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './page.component.html',
})
export class PageComponent {
  @Input() className: string | undefined;
  @Input() headerNone: boolean | undefined;
  @Input() footerNone: boolean | undefined;
}
