import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
})
export class SidenavComponent {
  @ViewChild('drawer') drawer: MatDrawer;

  toggleSidenav() {
    this.drawer.toggle();
  }

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

  links = [
    { path: 'home', icon: 'home', title: 'Home' },
    { path: 'courses', icon: 'books', title: 'Courses' },
    { path: 'login', icon: 'vpn_key', title: 'Login' },
    { path: 'lazy', icon: 'cached', title: 'Lazy loading' },
    { path: 'child', icon: 'child_care', title: 'Child' },
    { path: 'lessons', icon: 'assignment', title: 'Params' },
    { path: 'protected', icon: 'locked', title: 'Protected' },
  ];
}
