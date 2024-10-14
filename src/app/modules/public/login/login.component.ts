import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  activeTab: 'login' | 'signup' = 'login';

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      if (this.activeTab === 'login') {
        console.log('Login attempt with:', email, password);
      } else {
        console.log('Sign-up attempt with:', email, password);
      }
    }
  }

  handleGoogleAuth() {
    console.log('Google auth initiated');
  }

  setActiveTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }
}
