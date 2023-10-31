import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  enableProtectedRoute = false;

  toggleAccess() {
    this.enableProtectedRoute = !this.enableProtectedRoute;
  }
}
