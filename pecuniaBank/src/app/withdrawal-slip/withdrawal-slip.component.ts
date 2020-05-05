import { Component, OnInit } from '@angular/core';
import { Transaction, WithdrawalSlip } from '../data';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-withdrawal-slip',
  templateUrl: './withdrawal-slip.component.html',
  styleUrls: ['./withdrawal-slip.component.css']
})
export class WithdrawalSlipComponent implements OnInit {
  transaction:String;
  withdrawalSlip:WithdrawalSlip=new WithdrawalSlip();
  transactionErrorInfo: any;
  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
  }

  
  submit( withdrawalSlip:WithdrawalSlip)
  {
    console.log(withdrawalSlip);
    this.transactionService.loadWithdrawalSlip(withdrawalSlip).subscribe(data=>{this.transaction=data,
      this.transactionErrorInfo=undefined;},
      error=>{this.transactionErrorInfo==error.error;
      });
     console.log(this.transaction);
    
      
   
  }

}
