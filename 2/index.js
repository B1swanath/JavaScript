function D6(){
    let eng = document.getElementById("eng1").value;
    const engresult = eng >= 35 && eng <=100 ;
    document.getElementById("OP001").innerHTML= eng + " is " + engresult;

    let hin = document.getElementById("hin1").value;
    const hinresult = hin >= 35 && hin <=100 ;
    document.getElementById("OP002").innerHTML= hin + " is " + hinresult;

    let mat = document.getElementById("mat1").value;
    const matresult = mat >= 35 && mat <=100 ;
    document.getElementById("OP003").innerHTML= mat + " is " + matresult;
    
    let sci = document.getElementById("sci1").value;
    const sciresult = sci >= 35 && sci <=100 ;
    document.getElementById("OP004").innerHTML= sci + " is " + sciresult;

    let soc = document.getElementById("soc1").value;
    const socresult = soc >= 35 && soc <=100 ;
    document.getElementById("OP005").innerHTML= soc + " is " + socresult;
    
    let B01 = parseInt(eng);
    let B02 = parseInt(hin);
    let B03 = parseInt(mat);
    let B04 = parseInt(sci);
    let B05 = parseInt(soc);
    
    let tot = B01 + B02 + B03 + B04 + B05 ;

    // const totalresult = tot >= 175 && tot <=500 ;
    // document.getElementById("OP006").innerHTML="condition 175 & 500 : " + tot + " is " + totalresult;
    if(tot >= 400 && tot <=500){
        document.getElementById("OP008").innerHTML=tot+" grade A";
    }
    else if(tot >= 350 && tot <=400){
        document.getElementById("OP008").innerHTML=tot+"grade B";
    }
    else if(tot >= 250 && tot <=350){
        document.getElementById("OP008").innerHTML=tot+"grade C";
    }
    else if(tot >= 175 && tot <=250){
        document.getElementById("OP008").innerHTML=tot+"grade D";
    }
    else if(tot >= " "){
        document.getElementById("OP008").innerHTML="enter Valid Marks";
    }
    else{
        document.getElementById("OP008").innerHTML="fail";
    }

    let tot02 = engresult && hinresult && matresult && sciresult && socresult;

    const totalresult02 = tot02;
    document.getElementById("OP007").innerHTML=" "+ tot + "/500 " + totalresult02;

}