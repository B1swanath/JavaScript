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







// Account-Details -

function balbtn(){
    let tbal = 50000;
    const bal = parseInt(tbal);

    document.getElementById("tot-bal").innerHTML=bal +"$";

    // Credit :

    let creValue = localStorage.getItem('creValue');
    const ccv = parseInt(creValue);
    // const crev = bal + ccv;

    // Debit -

    let debValue = localStorage.getItem('debValue');
    const ddv = parseInt(debValue);
    // const debv = crev - ddv;

    const cbal = ((bal - ddv) + ccv);
    document.getElementById("tot-bal").innerHTML= cbal + "$";

}











// CREDIT -

function cre(){
    let credit = document.getElementById("add-c").value;
    let credited = parseInt(credit);
    
    if( credited <= 30000 ){
        alert("" + credited + "$ has been credited to your account.")
        document.getElementById("credited").innerHTML=credited + "$";
        let creValue = credited;
        localStorage.setItem("creValue", creValue);
    }
    else{
        alert("Invalid amount set. You can credit upto 30000$ only.")
        document.getElementById("credited").innerHTML="Transaction Failed";
    }
}



// Debit -

function deb(){
    let debit = document.getElementById("add-d").value;
    let debited = parseInt(debit);

    if( debited <= 30000 ){
        alert("Confirm your amount " + debited + "$ to withdrawal.");
        document.getElementById("debited").innerHTML=debited + "$";
        let debValue = debited;
        localStorage.setItem("debValue", debValue);
    }
    else{
        alert(debited + "$ is insufficient amount. Please check your balance in your Account-Details.");
        document.getElementById("debited").innerHTML="Transaction Failed";
    }
}

