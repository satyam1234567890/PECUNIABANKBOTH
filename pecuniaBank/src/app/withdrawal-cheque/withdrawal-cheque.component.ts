import { Component, OnInit } from '@angular/core';
import { Cheque, Transaction } from '../data';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-withdrawal-cheque',
  templateUrl: './withdrawal-cheque.component.html',
  styleUrls: ['./withdrawal-cheque.component.css']
})
export class WithdrawalChequeComponent implements OnInit {

  cheque:Cheque=new Cheque();
  transcation: Transaction;
  transactionErrorInfo: any;

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.cheque.IFSC="PUNB033950";
  }

  submit1(cheque:Cheque)
  {
   console.log(cheque);
  cheque.bankName="PECUNIA";
   this.transactionService.loadWithdrawalCheque(cheque).subscribe(data=>{this.transcation=data,
    this.transactionErrorInfo=undefined;},
    error=>{this.transactionErrorInfo==error.error;
    });
   console.log(this.transcation);
   
  }

}
