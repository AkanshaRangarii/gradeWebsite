const calcy=()=>{
    let english=document.getElementById("english").value;
    let maths=document.getElementById("maths").value;
    let science=document.getElementById("science").value;
    let social=document.getElementById("social").value;
    let grades=""
    

    if(english<=35 ||maths<=35 ||science<=35 || social<=35 ){
        document.getElementById("showData").innerHTML="You are fail"
     }



     else{
    let totalGrade=parseFloat(english)+parseFloat(maths)+parseFloat(science)+parseFloat(social);
    let per=(totalGrade/400)*100;
    

    if(per<=100&&per>=80){
      grades="A";
    }
    else if(per<=79&&per>=60){
        grades="B";
    }
    else if(per<=59&&per>=40){
        grades="C";
    }
    else{
        grades="F";
    }


    if(per>=35){
   document.getElementById("showData").innerHTML= `Out of 400 Your total is ${totalGrade} and percentage is ${per}%. <br> Your grade is ${grades}. Congratulations! You are Pass`
    }
    else{
    document.getElementById("showData").innerHTML= `Out of 400 Your total is ${totalGrade} and percentage is ${per}%. <br> Your grade is ${grades}. You are Fail`
    }
}
}