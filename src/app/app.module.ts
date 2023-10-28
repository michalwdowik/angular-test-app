import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from './shared/services/notifications/notification.service';
import { DrawerComponent } from './components/drawer/drawer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { Course1Component } from './components/child/course1/course1.component';
import { Course2Component } from './components/child/course2/course2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailsComponent,
    DrawerComponent,
    HomeComponent,
    ChildComponent,
    Course1Component,
    Course2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
