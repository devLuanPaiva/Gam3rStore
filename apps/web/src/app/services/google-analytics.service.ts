import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private readonly renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public load(): void {
    const script = this.renderer.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P1XD5JXNMT';
    this.renderer.appendChild(this.document.head, script);

    const inlineScript = this.renderer.createElement('script');
    inlineScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-P1XD5JXNMT');
    `;
    this.renderer.appendChild(this.document.head, inlineScript);
  }
}
