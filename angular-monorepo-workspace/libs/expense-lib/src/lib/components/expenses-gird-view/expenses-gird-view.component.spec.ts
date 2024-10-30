import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesGirdViewComponent } from './expenses-gird-view.component';

describe('ExpensesGirdViewComponent', () => {
  let component: ExpensesGirdViewComponent;
  let fixture: ComponentFixture<ExpensesGirdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesGirdViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesGirdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
