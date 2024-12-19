import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // If token exists, allow access
      return true;
    } else {
      // Otherwise, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
