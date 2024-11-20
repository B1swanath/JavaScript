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

    document.getElementById("OP5").innerHTML="Output : " + Date + "/" + Month + "/" + Year;

    const d = new Date(2024, 11, 21) - (Year, Month, Date);
    document.getElementById("OP8").innerHTML="Output : " + d;
}


// Marks-Sheet

// function D1(){
//     let eng = document.getElementById("eng1").value;

//     const engresult = eng >= 35 && eng <=100 ;
//     document.getElementById("OP001").innerHTML="Output for English : " + eng + " is " + engresult;
// }
// function D2(){
//     let hin = document.getElementById("hin1").value;

//     const hinresult = hin >= 35 && hin <=100 ;
//     document.getElementById("OP002").innerHTML="Output for Hindi : " + hin + " is " + hinresult;
// }
// function D3(){
//     let mat = document.getElementById("mat1").value;

//     const matresult = mat >= 35 && mat <=100 ;
//     document.getElementById("OP003").innerHTML="Output for Math : " + mat + " is " + matresult;
// }
// function D4(){
//     let sci = document.getElementById("sci1").value;

//     const sciresult = sci >= 35 && sci <=100 ;
//     document.getElementById("OP004").innerHTML="Output for Science : " + sci + " is " + sciresult;
// }
// function D5(){
//     let soc = document.getElementById("soc1").value;

//     const socresult = soc >= 35 && soc <=100 ;
//     document.getElementById("OP005").innerHTML="Output for Social : " + soc + " is " + socresult;
// }
function D6(){
    let eng = document.getElementById("eng1").value;
    const engresult = eng >= 35 && eng <=100 ;
    document.getElementById("OP001").innerHTML="Output for English : " + eng + " is " + engresult;

    let hin = document.getElementById("hin1").value;
    const hinresult = hin >= 35 && hin <=100 ;
    document.getElementById("OP002").innerHTML="Output for Hindi : " + hin + " is " + hinresult;

    let mat = document.getElementById("mat1").value;
    const matresult = mat >= 35 && mat <=100 ;
    document.getElementById("OP003").innerHTML="Output for Math : " + mat + " is " + matresult;
    
    let sci = document.getElementById("sci1").value;
    const sciresult = sci >= 35 && sci <=100 ;
    document.getElementById("OP004").innerHTML="Output for Science : " + sci + " is " + sciresult;

    let soc = document.getElementById("soc1").value;
    const socresult = soc >= 35 && soc <=100 ;
    document.getElementById("OP005").innerHTML="Output for Social : " + soc + " is " + socresult;
    
    let B01 = parseInt(eng);
    let B02 = parseInt(hin);
    let B03 = parseInt(mat);
    let B04 = parseInt(sci);
    let B05 = parseInt(soc);
    
    let tot = B01 + B02 + B03 + B04 + B05 ;

    const totalresult = tot >= 175 && tot <=500 ;
    document.getElementById("OP006").innerHTML="Output condition to check 175 & 500 : " + tot + " is " + totalresult;

    let tot02 = engresult && hinresult && matresult && sciresult && socresult;

    const totalresult02 = tot02;
    document.getElementById("OP007").innerHTML="Total marks is " + tot + "/500 " + "  Are you Pass : " + totalresult02;
}
