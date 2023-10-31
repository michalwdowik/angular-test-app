import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();

  @ViewChild(SidenavComponent) sidenavComponent: SidenavComponent;

  toggleSidenav() {
    this.sidenavComponent.toggleSidenav();
  }

  openSidenav() {
    this.sidenavComponent.openDrawer();
  }

  closeSidenav() {
    this.sidenavComponent.closeDrawer();
  }

  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme();
  }
}
