package com.capgemini.pecunia.controller;


import java.time.LocalDate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.pecunia.entity.Cheque;
import com.capgemini.pecunia.entity.Data;
import com.capgemini.pecunia.entity.Data1;
import com.capgemini.pecunia.entity.DepositSlip;
import com.capgemini.pecunia.entity.TransactionDetails;
import com.capgemini.pecunia.entity.TransferSlip;
import com.capgemini.pecunia.entity.withdrawalSlip;
import com.capgemini.pecunia.exception.UserException;
import com.capgemini.pecunia.service.TransactionService;


/****************************
 *          @author          Satyam Sinha
 *          Description      It is a Rest full service class that provides the services for Transaction
  *         Version             1.0
  *         Created Date    07-APR-2020
 ****************************/

//This crossOrgin helps us to connect with angular application.
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TransactionController {

	@Autowired
	TransactionService transactionService;
	/*
	 *RestFul Service For Deposit Money From Slip
	 */
	@PostMapping("/DepositUsingSlip")
	public ResponseEntity<TransactionDetails> DepositSlip(@RequestBody DepositSlip slip) throws UserException   {
		System.out.println(slip.toString());
		TransactionDetails transactionDetails = null;
			try {
				transactionDetails = transactionService.depositMoneyBySlip(slip);
			} catch (UserException e) {
				// TODO Auto-generated catch block
				throw new UserException(e.getMessage());

			}
		return new ResponseEntity<TransactionDetails>(transactionDetails,HttpStatus.OK);
	}
	/*
	 *RestFul Service For Withdrawal Money From Slip
	 */
	@PostMapping("/WithdrawingUsingSlip")
	public ResponseEntity<TransactionDetails>  WithdrawalSlip(@RequestBody withdrawalSlip slip) throws UserException   {
		TransactionDetails transactionDetails = null;
	
			try {
				transactionDetails = transactionService.withdrawalMoneyBySlip(slip);
			} catch (UserException e) {
				// TODO Auto-generated catch block
				throw new UserException(e.getMessage());
			}
		
		return new ResponseEntity<TransactionDetails>(transactionDetails,HttpStatus.OK);
	}
	
	/*
	 *  Getting Today's transaction history . 
	 */
	@GetMapping("/todayTransaction")
	public ResponseEntity<List<TransactionDetails>>todayTransaction() {
		List<TransactionDetails> transactionList=transactionService.showTransaction();
		return new ResponseEntity<List<TransactionDetails>>(transactionList,HttpStatus.OK);
	}
	/*
	 * Withdrawal money using cheque
	 */
	@PostMapping("/WithdrawingUsingCheque")
	public ResponseEntity<TransactionDetails>  withdrawalCheque(@RequestBody Cheque cheque) throws UserException  {
		System.out.println(cheque);
		String []data;
		data=cheque.getIssuedate().split("-");
		int year = Integer.parseInt( data[0] );
		int month = Integer.parseInt( data[1] );  
		int day = Integer.parseInt( data[2] );
		LocalDate issueDate = LocalDate.of(year,month,day);
		cheque.setIssueDate(issueDate);
		TransactionDetails transactionDetails = null;
	
			transactionDetails = transactionService.withdrawalMoneyUsingCheque(cheque);
		
		return new ResponseEntity<TransactionDetails>(transactionDetails,HttpStatus.OK);
	}
	
	/*
	 * Transfer money from one account to another using cheque and transfer slip(carry benificary details)
	 */
	@PostMapping("/TransferMoneyUsingCheque")
	public ResponseEntity<TransactionDetails>  transferCheque(@RequestBody Data1 data1) throws UserException  {
		String []data;
		data=data1.getCheque().getIssuedate().split("-");
		int year = Integer.parseInt( data[0] );
		int month = Integer.parseInt( data[1] );  
		int day = Integer.parseInt( data[2] );
		LocalDate issueDate = LocalDate.of(year,month,day);
		data1.getCheque().setIssueDate(issueDate);
		TransactionDetails transactionDetails = null;
		
			transactionDetails = transactionService.transferMoneyUsingCheque(data1.getCheque(), data1.getTransferSlip());
			return new ResponseEntity<TransactionDetails>(transactionDetails,HttpStatus.OK);
		
	
	}
	
	@PostMapping("/DepositMoneyUsingCheque")
	public ResponseEntity<TransactionDetails>  depositCheque(@RequestBody Data data2) throws UserException {
		String []data;
		data=data2.getCheque().getIssuedate().split("-");
		int year = Integer.parseInt( data[0] );
		int month = Integer.parseInt( data[1] );  
		int day = Integer.parseInt( data[2] );
		LocalDate issueDate = LocalDate.of(year,month,day);
		data2.getCheque().setIssueDate(issueDate);
		TransactionDetails transactionDetails = null;

			transactionDetails = transactionService.depositChequeInAccount(data2.getCheque(), data2.getDepositSlip());
			
		
		return new ResponseEntity<TransactionDetails>(transactionDetails,HttpStatus.OK);
		
	}
	
	
}
