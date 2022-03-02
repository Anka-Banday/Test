function sendFund(accountNumber,recieverAccountNumber,transferAmount)
{

    //check if user has sufficient funds to transfer

    var balance = FetchBalance.checkBalance(accountNumber);

    if(balance>=transferAmount)
        {
            var new_balance = UpdateNewBalance.updateBalance(transferAmount); //deduct amount from sender account and update new balance
            console.log(transferAmount+"successfully sent to"+ recieverAccountNumber);
            console.log("your available balace is"+ new_balance);
        }

    else
    {
        console.log("Insufficient funds!");
    }
}