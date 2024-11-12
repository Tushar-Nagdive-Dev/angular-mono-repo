import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'exp-expense-header',
  templateUrl: './expense-header.component.html',
  styleUrl: './expense-header.component.scss'
})
export class ExpenseHeaderComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    
  }

  logout() {
    const flag = this.authService.logout();
    if(flag) {
      this.toastService.show('Logout Successfull', { classname: 'bg-success' });
    }else {
      this.toastService.show('Unable to logout, Something went wroung', { classname: 'bg-danger' })
    }
  }

}
