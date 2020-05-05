import { Component, OnInit } from '@angular/core';
import { Transaction, WithdrawalSlip, DepositSlip } from '../data';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
 

  constructor( private transactionService: TransactionService) { }

 

  transactions:Transaction[]=[]


  ngOnInit(): void {
  
   this.transactionService.getDataTransaction().subscribe(data=>{this.transactions=data});
   console.log(this.transactions);
  }
 
 

}
