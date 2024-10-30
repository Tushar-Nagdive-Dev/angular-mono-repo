import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipwiseLibComponent } from './sipwise-lib.component';

describe('SipwiseLibComponent', () => {
  let component: SipwiseLibComponent;
  let fixture: ComponentFixture<SipwiseLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SipwiseLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipwiseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
