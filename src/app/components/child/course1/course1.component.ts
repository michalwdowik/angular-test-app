import { Component } from '@angular/core';
@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.scss'],
})
export class Course1Component {
  title: string = 'Course 1 Fundamentals';
  description: string = 'Test Description';
  level: string = 'Easy';
}
