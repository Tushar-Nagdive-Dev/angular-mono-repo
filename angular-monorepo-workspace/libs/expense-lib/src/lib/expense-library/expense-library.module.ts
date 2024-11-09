import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseLibraryRoutingModule } from './expense-library-routing.module';
import { ExpenseLibComponent } from '../components/expense-lib.component';
import { BaseChartDirective } from 'ng2-charts'
import { AgGridAngular } from 'ag-grid-angular';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CardViewComponent } from '../components/card-view/card-view.component';
import { ExpenseHeaderComponent } from '../components/expense-header/expense-header.component';


@NgModule({
  declarations: [
    ExpenseLibComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CardViewComponent,
    ExpenseHeaderComponent
  ],
  imports: [
    CommonModule,
    ExpenseLibraryRoutingModule,
    BaseChartDirective,
    AgGridAngular,
    ReactiveFormsModule,
    NgbCollapseModule
  ],
  exports: [
    
  ]
})
export class ExpenseLibraryModule { }
