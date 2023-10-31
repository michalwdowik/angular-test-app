import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from 'src/app/shared/services/courses/courses-service.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesService: jasmine.SpyObj<CoursesService>;

  beforeEach(async () => {
    coursesService = jasmine.createSpyObj('CoursesService', ['getAllCourses']);

    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: CoursesService, useValue: coursesService }],
    }).compileComponents();
  });

  it('should create the component', () => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
