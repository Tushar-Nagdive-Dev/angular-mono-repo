import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-brief-view',
  templateUrl: './brief-view.component.html',
  styleUrls: ['./brief-view.component.scss']
})
export class BriefViewComponent implements OnInit {

  // Data for total expenses and categories
  totalExpense: number = 3450; // Example total expense
  expenseCategories = {
    food: 1200,
    transportation: 500,
    entertainment: 300,
    utilities: 450,
    health: 300,
    others: 200
  };

  // Data for recent transactions
  recentTransactions = [
    { name: 'Grocery Shopping', amount: 120 },
    { name: 'Uber Ride', amount: 15 },
    { name: 'Restaurant Bill', amount: 45 }
  ];

  // Data for charts
  expenseDistribution = [
    { name: 'Food', value: 1200 },
    { name: 'Transportation', value: 500 },
    { name: 'Entertainment', value: 300 },
    { name: 'Utilities', value: 450 },
    { name: 'Health', value: 300 },
    { name: 'Others', value: 200 }
  ];

  expenseTrend = [
    { name: 'January', value: 1200 },
    { name: 'February', value: 800 },
    { name: 'March', value: 450 },
    { name: 'April', value: 600 },
    { name: 'May', value: 700 }
  ];

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    domain: ['#1f78b4', '#33a02c', '#e31a1c', '#ff7f00', '#6a3d9a', '#b15928'],
    group: ScaleType.Ordinal
  };

  constructor() { }

  ngOnInit(): void {
    // Additional initialization if needed
  }
}
