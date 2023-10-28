import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() showDrawer: boolean;
  @Output() drawerToggled = new EventEmitter();

  toggleDrawer() {
    this.drawerToggled.emit();
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
