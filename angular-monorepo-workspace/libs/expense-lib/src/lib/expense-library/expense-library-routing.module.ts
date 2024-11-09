import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseLibComponent } from '../components/expense-lib.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CardViewComponent } from '../components/card-view/card-view.component';
import { ExpenseHeaderComponent } from '../components/expense-header/expense-header.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseLibComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'expense/connect',
    component: ExpenseHeaderComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'card-view',
        component: CardViewComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseLibraryRoutingModule { }
