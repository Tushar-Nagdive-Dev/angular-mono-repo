import { Component,OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions } from 'chart.js';
import { HomeViewComponent } from '../home-view/home-view.component';
@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  public loggedIn: boolean = true;

  public componentToLoad: boolean = true;

  loadComponentNow: any = null;

  constructor() {}

  ngOnInit(): void {
    if(this.componentToLoad) {
      this.loadComponentNow = HomeViewComponent;
    }
  }

  logout() {

  }


}
