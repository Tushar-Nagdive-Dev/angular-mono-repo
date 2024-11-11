import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../../../interfaces';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  protected loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if(this.loginForm.valid) {
      console.log('Login data: '+this.loginForm.value);
      const credentials: Credentials = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value
      }

      this.authService.login(credentials).subscribe(() => {
        this.router.navigate(['/expense/connect']);
      });
    }
  }

}
