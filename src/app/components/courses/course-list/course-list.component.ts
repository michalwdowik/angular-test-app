import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] | null = null;
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<number>();

  selectCourse(course: Course) {
    this.courseSelected.emit(course);
  }

  deleteCourse(id: number) {
    this.courseDeleted.emit(id);
  }
}
