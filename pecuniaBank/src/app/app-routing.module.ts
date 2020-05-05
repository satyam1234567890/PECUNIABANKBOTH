import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { DepositSlipComponent } from './deposit-slip/deposit-slip.component';
import { WithdrawalSlipComponent } from './withdrawal-slip/withdrawal-slip.component';
import { WithdrawalChequeComponent } from './withdrawal-cheque/withdrawal-cheque.component';
import { DepositChequeComponent } from './deposit-cheque/deposit-cheque.component';
import { TransferChequeComponent } from './transfer-cheque/transfer-cheque.component';


const routes: Routes = [
  {path:'Transcation',component:TransactionComponent},
  {path:'DepositSlip',component:DepositSlipComponent},
  {path:'WithdrawalSlip',component:WithdrawalSlipComponent},
  {path:'WithdrawalCheque',component:WithdrawalChequeComponent},
  {path:'DepositCheque',component:DepositChequeComponent},
  {path:'TransferCheque',component:TransferChequeComponent},
  {path:'',redirectTo:'/Transcation',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
