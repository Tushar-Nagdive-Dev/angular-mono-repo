import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  recentExpenses = [
    { date: '2024-11-01', description: 'Groceries', amount: 50, category: 'Food' },
    { date: '2024-11-05', description: 'Transport', amount: 20, category: 'Transport' },
    { date: '2024-11-07', description: 'Utilities', amount: 100, category: 'Bills' },
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
