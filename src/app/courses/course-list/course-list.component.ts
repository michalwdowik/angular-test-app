import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[] | null = null;
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: Course) {
    this.courseSelected.emit(course);
  }

  deleteCourse(id: number) {
    this.courseDeleted.emit(id);
  }
}
