import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WithdrawalSlip, DepositSlip, Cheque, Data, Data1 } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  

  constructor(private http: HttpClient) { }

  loadWithdrawalSlip(withdrawalSlip:WithdrawalSlip):Observable<any>{
    return this.http.post("http://localhost:8084/WithdrawingUsingSlip",withdrawalSlip,{responseType:"text"});

  }
  loadDepositSlip(depositSlip:DepositSlip):Observable<any>
  {
    return this.http.post("http://localhost:8084/DepositUsingSlip",depositSlip,{responseType:"text"});
  }

  
  loadWithdrawalCheque(cheque:Cheque):Observable<any>
  {
    console.log(cheque);
    return this.http.post("http://localhost:8084/WithdrawingUsingCheque",cheque,{responseType:"text"});
  }

  loadTransferCheque(data:Data):Observable<any>
  {
    
   

    return this.http.post("http://localhost:8084/TransferMoneyUsingCheque",data,{responseType:"text"});
  }

  loadDepositCheque(data1:Data1):Observable<any>
  {
  
    return this.http.post("http://localhost:8084/DepositMoneyUsingChequee",data1,{responseType:"text"});
  }
  

  getDataTransaction():Observable<any>
  {
    return this.http.get("http://localhost:8084/todayTransaction");
  }
}
