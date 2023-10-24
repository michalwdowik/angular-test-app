import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../shared/interfaces/course.interface';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';
  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id: number) {
    return `${this.getUrl()}/${id}`;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.getUrl());
  }

  deleteCourse(id: number) {
    return this.http.delete(this.getUrlWithID(id));
  }

  addCourse() {}
}
