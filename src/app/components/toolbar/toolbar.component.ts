import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();

  constructor(private themeService: ThemeService) {}
  showSidenav = false;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onToggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
}
