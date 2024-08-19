import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const isLogged= authService.isLogged();

  if(!isLogged) {
    alert('You are not allowed to do this.');
  }

  return isLogged;
};
