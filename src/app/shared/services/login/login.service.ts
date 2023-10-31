import { Injectable } from '@angular/core';

const STORAGE_KEY = 'logged';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  enableProtectedRoute = false;

  constructor() {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (storedValue !== null) {
      this.enableProtectedRoute = JSON.parse(storedValue);
    }
  }

  toggleAccess() {
    this.enableProtectedRoute = !this.enableProtectedRoute;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(this.enableProtectedRoute)
    );
  }
}
