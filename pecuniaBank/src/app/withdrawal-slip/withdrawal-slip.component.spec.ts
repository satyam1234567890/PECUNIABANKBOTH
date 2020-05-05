import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalSlipComponent } from './withdrawal-slip.component';

describe('WithdrawalSlipComponent', () => {
  let component: WithdrawalSlipComponent;
  let fixture: ComponentFixture<WithdrawalSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
