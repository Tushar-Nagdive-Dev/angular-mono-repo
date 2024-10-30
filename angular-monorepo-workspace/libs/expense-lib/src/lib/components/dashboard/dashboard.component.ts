import { Component,OnInit } from '@angular/core';
import { HomeViewComponent } from '../home-view/home-view.component';
import { ExpensesGirdViewComponent } from '../expenses-gird-view/expenses-gird-view.component';
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

  applyChanges(component: string) {
    if(component === 'Home')
      this.loadComponentNow = HomeViewComponent;
    else if (component === 'Expenses') 
      this.loadComponentNow = ExpensesGirdViewComponent;
  }

  logout() {

  }


}
