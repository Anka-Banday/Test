function logicOfTransaction(accountNumber,recieverAccountNumber,transferAmount)  //assuming user is already logged in, hence verification is done already.
    {
            //check balance
            var user_balance = FetchBalance.checkBalance(accountNumber);
            console.log('Your account balance is'+ user_balance);


            //transfer funds and update new balance
            FundTransfer.sendFund(accountNumber,recieverAccountNumber,transferAmount);
            
    }