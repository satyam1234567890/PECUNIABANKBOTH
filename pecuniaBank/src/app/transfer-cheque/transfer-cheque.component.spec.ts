import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferChequeComponent } from './transfer-cheque.component';

describe('TransferChequeComponent', () => {
  let component: TransferChequeComponent;
  let fixture: ComponentFixture<TransferChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
