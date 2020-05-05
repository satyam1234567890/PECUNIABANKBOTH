export class Data {
	cheque:Cheque;
	transferSlip:TransferSlip;
}
export class Data1{
	cheque:Cheque;
	depositSlip:DepositSlip;
}
export class Transaction{
    transactionId:number;
	accountNumber:number;
    transactionOption:String ;
	transactionType:String;
    transactionStatus:String;
	transactionAmount:number;
	transactionDate:any;
    benificaryName:String;
	benificaryAccoountNumber:number;
	bankName:String;
	current_Balance:number;
}

export class DepositSlip{
    accountNumber:number;
	accountHolderName:String;
	amount:number;
}

export class TransferSlip{
   accountNumber:number;
	accountHolderName:String;
	IFSC:String;
	bankName:String
}

export class WithdrawalSlip{
     accountHolderName:String;	
     accountNumber:number;
     amount:number;


}
export class Cheque{
	
    pay:String;
	accountNumber:number;
	chequeNumber:number;
	amount:number;
	issuedate:String;  
	bankName:String;
	IFSC:String;
	
}