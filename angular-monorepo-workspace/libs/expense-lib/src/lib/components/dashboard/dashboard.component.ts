import { Component,OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  public loggedIn: boolean = true;

  constructor() {}

  ngOnInit(): void {
    
  }

  logout() {

  }


}
