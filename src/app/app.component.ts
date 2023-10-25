import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  switchMode(isDarkTheme: boolean) {
    const hostClass = isDarkTheme ? 'darkTheme' : 'lightTheme';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }
}
