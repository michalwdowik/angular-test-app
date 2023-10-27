import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  enableProtectedRoute: boolean = false;
  constructor() {}

  toggleAccess() {
    this.enableProtectedRoute = !this.enableProtectedRoute;
  }
}
