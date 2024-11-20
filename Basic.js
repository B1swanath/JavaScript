function text0(){
    document.getElementById("msg").innerHTML = "Hello!";
    document.getElementById("msg").style.fontSize="30px";
}

// Date

function date(){
    document.getElementById("pdate").innerHTML=Date();
    }

// Calculator

function sum(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;

    let xval = parseInt(x);
    let yval = parseInt(y);

    const result = xval + yval;
    document.getElementById("OP1").innerHTML="Output : " + result;
}
function sub(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;

    let xval = parseInt(x);
    let yval = parseInt(y);

    const result = xval - yval;
    document.getElementById("OP1").innerHTML="Output : " + result;
}
function mul(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;

    let xval = parseInt(x);
    let yval = parseInt(y);

    const result = xval * yval;
    document.getElementById("OP1").innerHTML="Output : " + result;
}
function div(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;

    let xval = parseInt(x);
    let yval = parseInt(y);

    const result = xval / yval;
    document.getElementById("OP1").innerHTML="Output : " + result;
}
function mod(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;

    let xval = parseInt(x);
    let yval = parseInt(y);

    const result = xval % yval;
    document.getElementById("OP1").innerHTML="Output : " + result;
}

// Logic

function and(){
    let x = document.getElementById("x1").value;
    let y = document.getElementById("y1").value;

    const result = x >= 1 && y >= 1;
    document.getElementById("OP2").innerHTML="Output z : " + result;
}
function or(){
    let x = document.getElementById("x1").value;
    let y = document.getElementById("y1").value;

    const result = x >= 1 || y >= 1;
    document.getElementById("OP2").innerHTML="Output z : " + result;
}
function not(){
    let a = document.getElementById("a1").value;

    const result1 = a;
    const result2 = !a;
    document.getElementById("OP3").innerHTML="Input a : " + result1 + " Output a : " + result2;
}


// Date & DOB

function date2(){
    let Age = document.getElementById("age1").value;
    let DOB = document.getElementById("dob1").value;

    let A = parseInt(Age);
    let B = parseInt(DOB);

    const fnlRes = Age >= 18 && DOB <= 2006;
    document.getElementById("OP4").innerHTML="Output : " + fnlRes;
}


// Age Generator

function data3(){
    let Date  = document.getElementById("date3").value;
    let Month = document.getElementById("month3").value;
    let Year  = document.getElementById("year3").value;

    // const D1 = Date <= 31; 
    // const D2 = Month <= 12;
    // const D3 = Year <= 2024;
    document.getElementById("OP5").innerHTML="Output : " + Date <= 31 + "/" + Month <= 12 + "/" + Year <= 2024;
}