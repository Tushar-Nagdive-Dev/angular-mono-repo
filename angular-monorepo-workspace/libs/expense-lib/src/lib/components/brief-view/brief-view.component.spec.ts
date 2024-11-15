import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefViewComponent } from './brief-view.component';

describe('BriefViewComponent', () => {
  let component: BriefViewComponent;
  let fixture: ComponentFixture<BriefViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
