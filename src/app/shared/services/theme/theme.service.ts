import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark' = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  toggleTheme() {
    this.currentTheme = this.isDarkTheme() ? 'light' : 'dark';
    localStorage.setItem('theme', this.currentTheme);
    this.updateTheme();
  }

  isDarkTheme() {
    return this.currentTheme === 'dark';
  }

  private initializeTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      this.currentTheme = storedTheme as 'light' | 'dark';
      this.updateTheme();
    }
  }

  private updateTheme() {
    if (this.currentTheme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
