import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './components/template/page/page.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private readonly gaService = inject(GoogleAnalyticsService)

  ngOnInit(): void {
    this.gaService.load();
  }
}
