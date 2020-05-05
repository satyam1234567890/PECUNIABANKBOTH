import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Cheque, TransferSlip, Transaction, Data } from '../data';

@Component({
  selector: 'app-transfer-cheque',
  templateUrl: './transfer-cheque.component.html',
  styleUrls: ['./transfer-cheque.component.css']
})
export class TransferChequeComponent implements OnInit {
  transactionType=["PECUNIA","HDFC","ICIC","SBI"];
   cheque:Cheque=new Cheque();
  transferSlip:TransferSlip=new TransferSlip();
  transaction: Transaction;
  data:Data=new Data();
  transactionErrorInfo:any;
    constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.cheque.IFSC="PUNB033950"
  }


  submit()
  {
    this.data.cheque=this.cheque;
    this.data.transferSlip=this.transferSlip;
    console.log(this.cheque+""+this.transferSlip);
    this.transactionService.loadTransferCheque(this.data).subscribe(data=>{this.transaction=data
      this.transactionErrorInfo=undefined;},
      error=>{this.transactionErrorInfo==error.error;
      })
    console.log(this.transaction);
    
  }

}
