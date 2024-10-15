import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  errorMessage: string = '';
  showHorrorTransition: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/menu']);
    }
  }

  onSubmit() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      this.authService.login({ email, password }).subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['/menu']);
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = error.error.message || 'Login failed. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill all fields correctly.';
    }
  }

  navigateToRegister() {
    this.showHorrorTransition = true;
  }

  handleGoogleAuth() {
    console.log('Google auth initiated');
  }
}
