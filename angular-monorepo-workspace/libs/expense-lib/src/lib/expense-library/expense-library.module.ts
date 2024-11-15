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
import { NgbCollapseModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CardViewComponent } from '../components/card-view/card-view.component';
import { ExpenseHeaderComponent } from '../components/expense-header/expense-header.component';
import { ExpenseListComponent } from '../components/expense-list/expense-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../Interceptors/auth.Interceptor';
import { ToastContainerComponent } from '../components/toast-container/toast-container.component';
import { HasValuePipe } from '../pipes/has-value.pipe';
import { AddExpenseComponent } from '../components/add-expense/add-expense.component';
import { CurrenciesComponent } from '../components/currencies/currencies.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BriefViewComponent } from '../components/brief-view/brief-view.component';

@NgModule({
  declarations: [
    ExpenseLibComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CardViewComponent,
    ExpenseHeaderComponent,
    ExpenseListComponent,
    ToastContainerComponent,
    HasValuePipe,
    AddExpenseComponent,
    CurrenciesComponent,
    BriefViewComponent
  ],
  imports: [
    CommonModule,
    ExpenseLibraryRoutingModule,
    BaseChartDirective,
    AgGridAngular,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbToastModule,
    NgxChartsModule
  ],
  providers: [
    AuthService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    }
  ]
})
export class ExpenseLibraryModule { }
