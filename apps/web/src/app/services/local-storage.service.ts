import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  saveItem(key: string, value: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      const item = localStorage.getItem(key);
      try {
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
        return null;
      }
    }
    return null; // Ou outro valor padrão
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}
