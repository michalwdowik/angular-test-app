import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  topics: string[] = [
    'Home Page: Explains the concept of a basic homepage.',
    'Courses Page: Demonstrates how to use forms in Angular app and concept of Data Binding.',
    'Protected Page: Introduces authentication and authorization using the AuthGuard.',
    'Login Page: Shows how to create a login page for user authentication.',
    'Lazy Loading: Illustrates the lazy loading of modules for improved performance.',
    'Child Routes: Introduces the concept of child routes with "course1" and "course2" components.',
    'Parameterized Routes: Explains how to handle routes with and without parameters, as demonstrated in the "lessons" route.',
  ];
}
