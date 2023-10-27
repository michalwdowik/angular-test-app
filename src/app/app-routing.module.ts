import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PremiumComponent } from './components/premium/premium.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'premium',
    component: PremiumComponent,
    canActivate: [AuthGuard], // Apply the AuthGuard to the premium route
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./components/lazy/lazy.module').then((m) => m.LazyModule),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
