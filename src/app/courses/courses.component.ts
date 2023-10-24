import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CoursesService } from '../services/courses/courses-service.service';
import { Course } from '../shared/interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  selectedCourse: Course;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.loadCourses(true);
  }

  loadCourses(displayNotification: boolean) {
    this.courses$ = this.coursesService.getAllCourses(displayNotification);
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(id: number) {
    this.coursesService
      .deleteCourse(id)
      .pipe(tap(() => this.loadCourses(false)))
      .subscribe();
  }

  resetCourse() {
    const emptyCourse: Course = {
      id: 0,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.selectCourse(emptyCourse);
  }

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .pipe(tap(() => this.loadCourses(false)))
      .subscribe();

    this.resetCourse();
  }
}
