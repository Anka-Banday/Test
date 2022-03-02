function checkBalance(accountNumber)
{
    var balance = Select balance from account_details where accountnumber = accountNumber;
    return (balance);
}

