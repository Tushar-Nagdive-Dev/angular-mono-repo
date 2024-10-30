import { Component, OnInit } from '@angular/core';
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'lib-expenses-gird-view',
  templateUrl: './expenses-gird-view.component.html',
  styleUrl: './expenses-gird-view.component.scss'
})
export class ExpensesGirdViewComponent implements OnInit{

  themeClass = "ag-theme-quartz";

  ngOnInit(): void {
    
  }

  rowData: IRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
];
 
  // Column Definitions: Defines & controls grid columns.
  colDefs: any[] = [{ field: 'make' }, { field: 'model' }, { field: 'price' }, { field: 'electric' }];

  defaultColDef: any = {
      flex: 1,
  };
}
