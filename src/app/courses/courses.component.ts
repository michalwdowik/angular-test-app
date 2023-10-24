import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CoursesService } from '../services/courses-service.service';
import { Course } from '../shared/interfaces/course.interface';

const emptyCourse: Course = {
  id: 0,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedCourse: Course = emptyCourse;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courses$ = this.coursesService.getAllCourses();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(id: number) {
    this.coursesService
      .deleteCourse(id)
      .pipe(tap(() => this.loadCourses()))
      .subscribe();
  }

  resetCourse() {
    this.selectCourse(emptyCourse);
  }

  submitCourse() {
    console.log('Course Submitted');
  }
}
