import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly TOKEN_KEY = "login"
  
  constructor() { }

  login(): void {
    localStorage.setItem(this.TOKEN_KEY, "yes");
  }

  logout(): void {
    localStorage.clear();
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY)
  }
}
