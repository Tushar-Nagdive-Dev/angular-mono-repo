import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feature } from '../../interfaces';

@Component({
  selector: 'exp-card-view',
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent implements OnInit{

  features: Feature[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.features = [
      { 
        title: 'Feature 1', 
        description: 'Manage all your expenses efficiently.', 
        route: '/feature1', 
        icon: 'fas fa-wallet',  // Font Awesome Icon
        color: '#8e24aa'  // Soft Purple
      },
      { 
        title: 'Feature 2', 
        description: 'Track and categorize your expenses.', 
        route: '/feature2', 
        icon: 'fas fa-chart-pie',  // Font Awesome Icon
        color: '#3949ab'  // Soft Blue
      },
      { 
        title: 'Brief View', 
        description: 'Get a quick overview of your financial status.', 
        route: '/brief-view', 
        icon: 'fas fa-info-circle',  // Font Awesome Icon
        color: '#0288d1'  // Soft Cyan
      },
      { 
        title: 'Feature 3', 
        description: 'Generate expense reports and insights.', 
        route: '/feature3', 
        icon: 'fas fa-file-alt',  // Font Awesome Icon
        color: '#1e88e5'  // Blue
      },
      { 
        title: 'Feature 4', 
        description: 'Set reminders for pending payments.', 
        route: '/feature4', 
        icon: 'fas fa-bell',  // Font Awesome Icon
        color: '#7c4dff'  // Soft Purple
      },
      { 
        title: 'Expense Grid', 
        description: 'List View of Expenses (Overall)', 
        route: 'expense/connect/expense-list', 
        icon: 'fa-solid fa-circle-dollar-to-slot',  // Font Awesome Icon
        color: 'linear-gradient(to right, #FDA766, #00563F)'  // Soft Purple
      }
    ];
  }

  navigateToFeature(rts: string) {
    this.router.navigate([rts]);
  }

}
