import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  @Input() selectedCourse: Course;
  @Output() courseCancelled = new EventEmitter();
  @Output() courseSubmitted = new EventEmitter();

  cancelCourse() {
    this.courseCancelled.emit();
  }

  submitCourse() {
    this.courseSubmitted.emit();
  }
}
