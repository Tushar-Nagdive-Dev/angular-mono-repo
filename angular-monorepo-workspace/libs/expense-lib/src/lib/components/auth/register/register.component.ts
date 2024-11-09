import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  protected registerForm!: FormGroup;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("RegisterComponent")
  }

  register() {
    this.router.navigate(['/login']);
  }

}
