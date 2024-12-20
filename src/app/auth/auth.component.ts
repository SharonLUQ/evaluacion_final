import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent {
  code = '';
  password = '';
  error = '';
  constructor(private router: Router) {}
  login() {
    if (this.code === 'SV74979293' && this.password === '05031999') {
      sessionStorage.setItem('code', this.code);
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Credenciales inválidas';
    }
  }
}

