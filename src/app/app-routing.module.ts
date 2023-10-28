import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ChildComponent } from './components/child/child.component';
import { Course1Component } from './components/child/course1/course1.component';
import { Course2Component } from './components/child/course2/course2.component';
import { ParamsExampleComponent } from './components/params-example/params-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./components/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'child',
    component: ChildComponent,
    children: [
      { path: 'course1', component: Course1Component },
      { path: 'course2', component: Course2Component },
    ],
  },
  {
    path: 'lessons',
    component: ParamsExampleComponent,
  },
  {
    path: 'lessons/:name',
    component: ParamsExampleComponent,
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
