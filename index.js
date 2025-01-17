let userInput=document.querySelector(".date");
userInput.max=new Date().toISOString().split("T")[0];

function calculateAge(){

    let dob=new Date(userInput.value);

    let y1=dob.getFullYear();
    let m1=dob.getMonth()+1;
    let d1=dob.getDate();

    let currdate= new Date();

    let y2=currdate.getFullYear();
    let m2=currdate.getMonth()+1;
    let d2=currdate.getDate();

    let y3,m3,d3;

    y3=y2-y1;

    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;
    }

    // tricky || logically 
    if(m3<0){
        m3=11;
        y3--;
    }

    result.innerHTML=`your age is <span>${y3}</span> years,<span>${m3}</span> months, <span>${d3}</span> days`
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}