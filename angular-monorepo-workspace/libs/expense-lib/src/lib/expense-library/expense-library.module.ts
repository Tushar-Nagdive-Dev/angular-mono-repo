import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseLibraryRoutingModule } from './expense-library-routing.module';
import { ExpenseLibComponent } from '../components/expense-lib.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    ExpenseLibComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ExpenseLibraryRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    
  ]
})
export class ExpenseLibraryModule { }
