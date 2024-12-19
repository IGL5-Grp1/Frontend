import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginData = {
        email: '',
        password: '',
        remember: false
    };
    showPassword = false;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        this.http.post<any>('http://localhost:8081/api/v1/gestion-examens/auth/login', this.loginData)
            .subscribe({
                next: (response) => {
                    if (response.accessToken) {
                        localStorage.setItem('accessToken', response.accessToken);
                        this.router.navigate(['/teacher-table']); // Redirect to teacher table after login
                    } else {
                        alert('Login failed. Please try again.');
                    }
                },
                error: (error) => {
                    console.error('Login failed:', error);
                    alert('Login failed. Please check your credentials.');
                }
            });
    }
 
    
}
