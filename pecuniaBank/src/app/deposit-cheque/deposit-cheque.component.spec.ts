import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositChequeComponent } from './deposit-cheque.component';

describe('DepositChequeComponent', () => {
  let component: DepositChequeComponent;
  let fixture: ComponentFixture<DepositChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
