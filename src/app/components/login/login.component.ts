import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isLogged = false;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
  }

  onClickLogin() {
    this.authService.login();
    this.isLogged = this.authService.isLogged();
    alert('welcome again!')
  }

  onClickLogout() {
    this.authService.logout();
    this.isLogged = this.authService.isLogged();
    alert('bye bye!')
  }
}
