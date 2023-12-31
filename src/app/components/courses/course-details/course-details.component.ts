import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  @Input() set selectedCourse(value: Course) {
    if (value?.title) {
      this.originalTitle = value.title;
    }
    this.currentCourse = Object.assign({}, value);
  }
  @Output() courseSaved = new EventEmitter<Course>();
  @Output() courseCancelled = new EventEmitter();

  originalTitle: string;
  currentCourse: Course;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
  }

  ngOnInit(): void {
    this.currentCourse = {
      title: '',
      id: null,
      description: '',
      favorite: false,
      percentComplete: 0,
    };
  }

  saveCourse(course: Course) {
    this.courseSaved.emit(course);
  }

  cancelCourse() {
    this.courseCancelled.emit();
  }
}
