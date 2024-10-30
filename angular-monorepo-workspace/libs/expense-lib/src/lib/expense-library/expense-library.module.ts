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
import { HomeViewComponent } from '../components/home-view/home-view.component';
import { MatCardModule } from '@angular/material/card'
import { BaseChartDirective } from 'ng2-charts'
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ExpenseLibComponent,
    DashboardComponent,
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    ExpenseLibraryRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    BaseChartDirective,
    MatTableModule
  ],
  exports: [
    
  ]
})
export class ExpenseLibraryModule { }
