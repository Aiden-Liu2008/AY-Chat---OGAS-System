var calculator; //0=null 1=add 2=subs 3=mult 4=divs 5=left from divs 6~ undefined : prolly bitwise calculation
var first=0;
var second=0;
var result=0;

var isBefore=true;
var canCalculate=false;

var times=1;
var tempBool=false;

function setv(num){
    if(isBefore) {
        if(tempBool) first*=10;
        first+=num;
        document.getElementsByName('ShowExpression')[0].placeholder=first;
        tempBool=true;
    } else {
        if(tempBool) second*=10;
        second+=num;
        switch(calculator){
            case 1:
                result =first+second;
                document.getElementsByName('ShowExpression')[0].placeholder=first + ' + ' + second + ' = '+result;
                break;
            case 2:
                result =first-second;
                document.getElementsByName('ShowExpression')[0].placeholder=first + ' - ' + second + ' = '+result;
                break;
            case 3:
                result =first*second;
                document.getElementsByName('ShowExpression')[0].placeholder=first + ' * ' + second + ' = '+result;
                break;
            case 4:
                result =first/second;
                document.getElementsByName('ShowExpression')[0].placeholder=first + ' / ' + second + ' = '+result;
                break;
            case 5:
                result =first%second;
                document.getElementsByName('ShowExpression')[0].placeholder=first + ' % ' + second + ' = '+result;
                break;
            case 0:
                alert('Calculator is NULL : E0002');
                break;
            default:
                break;
        }
        tempBool=true;
        canCalculate=true;
    } return num;
}
function clearSet(){
    canCalculate=false;
    first =0;
    second=0;
    document.getElementsByName('ShowExpression')[0].placeholder='';
    isBefore=true;
    tempBool=false;
    result = 0;
}
function show(){
    if(!canCalculate) return;
    document.getElementsByName('ShowExpression')[0].placeholder=result;
    second =0;
    isBefore=true;
    tempBool=false;
}
//CALCULATION UNDER THIS LINE ______________________________________________________
function calc(string,calculator) {
    if(tempBool) {
        document.getElementsByName('ShowExpression')[0].placeholder+=string;
        tempBool=false;
    }
    else if(result!=0)
    {
        var temp=result;
        clearSet();
        setv(temp);
        document.getElementsByName('ShowExpression')[0].placeholder=temp + string;
    }
    else if(first!=0) document.getElementsByName('ShowExpression')[0].placeholder=first+ string;
    isBefore=false;
    this.calculator=calculator;
}
