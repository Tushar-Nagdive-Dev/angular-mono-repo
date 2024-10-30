import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseLibComponent } from '../components/expense-lib.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseLibComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseLibraryRoutingModule { }
