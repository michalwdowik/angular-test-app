import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  @Input() set selectedCourse(value: Course) {
    if (value?.title) {
      this.originalTitle = value.title;
    }
    this.currentCourse = Object.assign({}, value);
  }
  @Output() courseCancelled = new EventEmitter();
  @Output() courseUpdated = new EventEmitter();

  currentCourse: Course;
  originalTitle: string;

  cancelCourse() {
    this.courseCancelled.emit();
  }

  updateCourse(course: Course) {
    this.courseUpdated.emit(course);
  }
}
