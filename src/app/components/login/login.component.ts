import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  enableProtectedRoute = this.loginService.enableProtectedRoute;

  toggleAccess() {
    this.loginService.toggleAccess();
  }

  ngOnInit(): void {}
}
