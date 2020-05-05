import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSlipComponent } from './deposit-slip.component';

describe('DepositSlipComponent', () => {
  let component: DepositSlipComponent;
  let fixture: ComponentFixture<DepositSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
