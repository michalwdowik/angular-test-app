import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme(); // Initialize the toggle button state
  }

  showSidenav = false;

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme(); // Update the toggle button state
  }

  onToggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
}
