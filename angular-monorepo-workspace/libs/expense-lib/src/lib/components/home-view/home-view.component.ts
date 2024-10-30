import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; // Import Chart and registerables


Chart.register(...registerables);

@Component({
  selector: 'lib-home-view',
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent implements OnInit{

  displayedColumns: string[] = ['subject', 'method', 'amount'];

  dataSource: any[] = [];

  ELEMENT_DATA: any[] = [
    {subject: 'T-Shirt', method: 'UPI', amount: 100},
    {subject: 'T-Shirt', method: 'UPI', amount: 200},
  ];
  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.ELEMENT_DATA;
  }

  

  monthlyChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [500, 400, 600, 300, 700, 800, 750, 550, 600, 650, 500, 700],
        backgroundColor: '#4A90E2', // Blue color
        borderColor: '#003366', // Dark blue border color
        borderWidth: 1,
      }
    ]
  };

  // Sample data for the Weekly Expenses Bar Chart
  weeklyChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Expenses',
        data: [200, 300, 250, 400],
        backgroundColor: '#333333', // Black color
        borderColor: '#000000', // Darker black border color
        borderWidth: 1,
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category', // Specify scale type as 'category'
        grid: { display: false },
        ticks: {
          color: '#ffffff' // Change x-axis tick color
        }
      },
      y: {
        grid: { color: '#4A90E2' },
        ticks: {
          color: '#ffffff' // Change y-axis tick color
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#ffffff' // Change legend text color
        }
      }
    }
  };

  
}
