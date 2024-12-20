import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const code = sessionStorage.getItem('code');
    if (code === 'SV74979293') {
      return true;
    } else {
      this.router.navigate(['/authentication']);
      return false;
    }
  }
}
