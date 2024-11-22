function A1(){
    const pin = 4444
    let x = +prompt("Please Enter your 4 digits PWD");

    if( x === pin){
        alert("Success");
        window.location.href = "account.html";
    }
    else{
        alert("Password invalid");
    }
}

function C1(){
    const pin = 4444
    let x = +prompt("Please Enter your 4 digits PWD");

    if( x === pin){
        alert("Success");
        window.location.href = "credit.html";
    }
    else{
        alert("Password invalid");
    }
}

function D1(){
    const pin = 4444
    let x = +prompt("Please Enter your 4 digits PWD");

    if( x === pin){
        alert("Success");
        window.location.href = "debit.html";
        // let pageacc = window.location.href = "debit.html";
        // if( pin === pagecredit ){
        //     alert("Yep")
        // }
        // else{}
    }
    else{
        alert("Password invalid");
    }
}