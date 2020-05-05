import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalChequeComponent } from './withdrawal-cheque.component';

describe('WithdrawalChequeComponent', () => {
  let component: WithdrawalChequeComponent;
  let fixture: ComponentFixture<WithdrawalChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
