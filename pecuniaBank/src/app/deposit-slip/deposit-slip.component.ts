import { Component, OnInit } from '@angular/core';
import { DepositSlip, Transaction } from '../data';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-deposit-slip',
  templateUrl: './deposit-slip.component.html',
  styleUrls: ['./deposit-slip.component.css']
})
export class DepositSlipComponent implements OnInit {
  depositSlip: DepositSlip=new DepositSlip();
  transaction:Transaction=new Transaction();
  transactionErrorInfo: any;
  constructor(private transcationService:TransactionService) { }

  ngOnInit(): void {
  }

  
  submit1(  depositSlip: DepositSlip)
  {
    console.log(depositSlip);
    this.transcationService.loadDepositSlip(depositSlip).subscribe(data=>{this.transaction=data,
      this.transactionErrorInfo=undefined;},
      error=>{this.transactionErrorInfo==error.error;
      });
    console.log(this.transaction);
   
  }

}
