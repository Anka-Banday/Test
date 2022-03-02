
function calculator_sum() //define / create 
{
    console.log("enter the  operation you want to perform");
    var operator = console.read();
    
    if(operator=='+')
    {
        addTwoNumbers(); 
    }


    else if(operator=='-')
     {
        subtractTwoNumbers(); 
     }


    else if(operator == '*')
     {
         multiplyTwoNumbers();
     }


    else if(operator =='/')
     {
         divideTwoNumbers();
     }

    else
     {
      console.log('Please enter valid operator');
     }
}


//define function for adding two numbers
function addTwoNumbers()
{
 console.log("enter two numbers");
 var num1 = console.read(); 
 var num2 = console.read(); 
 var res= num1+num2
 console.log(res);
}

//define function for subtracting two numbers
function subtractTwoNumbers()
{
    console.log("enter two numbers");
 var num1 = console.read(); 
 var num2 = console.read(); 
 var res= num1-num2
 console.log(res);
}

//define function for multiplying two numbers
function multiplyTwoNumbers()
{
    console.log("enter two numbers");
    var num1 = console.read(); 
    var num2 = console.read(); 
    var res= num1*num2
    console.log(res);
}


//define function for dividing two numbers
function divideTwoNumbers()
{
    console.log("enter divisor");
    var divisor = console.read(); 
    console.log("enter dividend"); 
    var dividend = console.read(); 

    if(divisor==0) // check if divisor is 0
    {
        console.log("undefined");
    }
    
    else
    {
        var res = dividend / divisor;
        console.log(res);
    }
}

