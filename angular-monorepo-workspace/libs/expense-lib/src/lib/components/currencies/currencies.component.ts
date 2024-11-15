import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'exp-currencies',
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.scss'
})
export class CurrenciesComponent implements OnInit{

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    domain: ['#1f78b4', '#33a02c', '#e31a1c', '#ff7f00', '#6a3d9a', '#b15928'],
    group: ScaleType.Ordinal
  };
  
  dashboardSummary = [
    { title: 'Total Currencies', value: 5 },
    { title: 'Total Transactions', value: 91 },
    { title: 'Total Expenses', value: '$30,000' },
    { title: 'Most Used Currency', value: 'USD' }
  ];

  // Currency Details
  currencies = [
    {
      name: 'US Dollar',
      code: 'USD',
      symbol: '$',
      exchangeRate: 1.0,
      totalSpent: 15000,
      transactions: 25,
      color: '#007BFF'
    },
    {
      name: 'Euro',
      code: 'EUR',
      symbol: '€',
      exchangeRate: 1.1,
      totalSpent: 10000,
      transactions: 18,
      color: '#28A745'
    },
    {
      name: 'Japanese Yen',
      code: 'JPY',
      symbol: '¥',
      exchangeRate: 110.0,
      totalSpent: 500000,
      transactions: 30,
      color: '#DC3545'
    },
    {
      name: 'British Pound',
      code: 'GBP',
      symbol: '£',
      exchangeRate: 1.3,
      totalSpent: 7000,
      transactions: 12,
      color: '#FFC107'
    },
    {
      name: 'Indian Rupee',
      code: 'INR',
      symbol: '₹',
      exchangeRate: 73.5,
      totalSpent: 200000,
      transactions: 6,
      color: '#6C757D'
    }
  ];

  // Expense Distribution Data
  expenseDistribution = [
    { name: 'USD', value: 15000 },
    { name: 'EUR', value: 10000 },
    { name: 'JPY', value: 5000 },
    { name: 'GBP', value: 7000 },
    { name: 'INR', value: 2000 }
  ];

  // Historical Exchange Rates
  historicalRates = [
    { date: '2024-11-01', currency: 'USD', rate: 1.0 },
    { date: '2024-11-01', currency: 'EUR', rate: 1.1 },
    { date: '2024-11-01', currency: 'JPY', rate: 110.0 },
    { date: '2024-11-01', currency: 'GBP', rate: 1.3 },
    { date: '2024-11-01', currency: 'INR', rate: 73.5 }
  ];

  // Event Handlers
  viewDetails(currency: any) {
    alert(`Details for ${currency.name}`);
  }

  convertCurrency(currency: any) {
    alert(`Convert ${currency.name}`);
  }

  constructor(

  ) {}

  ngOnInit(): void {
    
  }
}
