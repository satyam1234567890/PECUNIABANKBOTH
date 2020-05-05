import { Component, OnInit } from '@angular/core';
import { Cheque, DepositSlip, Transaction, Data1 } from '../data';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-deposit-cheque',
  templateUrl: './deposit-cheque.component.html',
  styleUrls: ['./deposit-cheque.component.css']
})
export class DepositChequeComponent implements OnInit {
  transactionType=["PECUNIA","HDFC","ICIC","SBI"];
cheque :Cheque=new Cheque();
depositSlip:DepositSlip=new DepositSlip();
transaction:Transaction;
data1:Data1=new Data1();
  transactionErrorInfo: any;
  constructor(private transactionService:TransactionService) { }
  ngOnInit(): void {
  }
  submit1()
  {
    this.data1.cheque=this.cheque;
    this.data1.depositSlip=this.depositSlip;
   
    console.log(this.cheque+" "+this.depositSlip);
    this.transactionService.loadDepositCheque(this.data1).subscribe(data=>{this.transaction=data,
      this.transactionErrorInfo=undefined;},
      error=>{this.transactionErrorInfo==error.error;
      });
    console.log(this.transaction);

    

  }

}
