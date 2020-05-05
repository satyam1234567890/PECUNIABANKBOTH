import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DepositSlipComponent } from './deposit-slip/deposit-slip.component';
import { WithdrawalSlipComponent } from './withdrawal-slip/withdrawal-slip.component';
import { WithdrawalChequeComponent } from './withdrawal-cheque/withdrawal-cheque.component';
import { TransferChequeComponent } from './transfer-cheque/transfer-cheque.component';
import { DepositChequeComponent } from './deposit-cheque/deposit-cheque.component';
@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    DepositSlipComponent,
    WithdrawalSlipComponent,
    WithdrawalChequeComponent,
    TransferChequeComponent,
    DepositChequeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
