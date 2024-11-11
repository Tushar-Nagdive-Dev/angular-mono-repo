import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../../../interfaces';
import { AuthService } from '../../../services/auth.service';
import { HasValuePipe } from '../../../pipes/has-value.pipe';
import { ToastService } from '../../../services/toast.service';

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
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
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
      const hasValue = new HasValuePipe();
      this.authService.login(credentials).subscribe((res:any) => {
        if(hasValue.transform(res)) {
          this.router.navigate(['/expense/connect']);
          this.authService.setToken(res.token)
          this.toastService.show('Login Successfull', { classname: 'bg-success' });
        }
      });
    }
  }

}
