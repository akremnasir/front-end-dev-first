const date = new Date();

const rendercalander = ()=> {
    const month = date.getMonth();
    const real = date.toDateString();
    const monthdays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
    const lastdaynum= new Date(date.getFullYear(), date.getMonth(),0).getDate();
    const todysdayindex = new Date(date.getFullYear(), date.getMonth(), 1).getDay()-1;
    const lastdayindex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() + 1;
    const nextmonthdays = 7 - lastdayindex;
    const today = new Date().getDate();

    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july", 
        "augest",
        "september",
        "october",
        "november",
        "december"
    ];

    document.querySelector('.amin-month').innerHTML
    = months[month];
    document.querySelector('.month .form .p').innerHTML
    = real;
    
    let days = "";
    for(let x = todysdayindex; x >= 0; x--){
        days += `<div  class = "last-month-days"> ${lastdaynum - x}</div>`;
        monthdays.innerHTML = days;
    };

    for( let i = 1; i <= lastDay; i++) {

        if(i === today && date.getMonth() === new Date().getMonth()){
            days += `<div class = "curentdate"> ${i}</div>`;  
        }
        else {
        days += `<div> ${i}</div>`;
        monthdays.innerHTML = days;
        }
    };


    for(let p = 1; p <= nextmonthdays; p++){
        days += `<div class = "next-month-days"> ${p}</div>`;
        monthdays.innerHTML = days;
    }

    const weakdays = document.querySelector('.weak');
    const weakarray = [
        "su",
        "mo",
        "tu",
        "wa",
        "th",
        "fr",
        "sa",
    ];

    let weaks = "";
    for(let j = 0;j <= 6; j++){
        weaks += `<div> ${weakarray[j]} </div>`; 
        weakdays.innerHTML = weaks;
    };


    
};


document.querySelector('.prev').addEventListener("click",()=> {
    date.getMonth() - 1;
    rendercalander();
});
document.querySelector('.next').addEventListener('click',()=> {
    date.getMonth() + 1;
    rendercalander();
});

 rendercalander();

 let st_name = "Tim Abel";
 let sto1 = "five places to visit in okland with fantastic negrito.";
 let sto2 = " A Giant Swing. Jumgle Screaming. Ice Plunges. You'll Love It.";
 let sto3 = "No Fixed Abode: Quitting Home.";

document.querySelector(".stu-suc-sto .one .pro .f-na-na").innerHTML = st_name;
document.querySelector(".stu-suc-sto .one .pro .s-na-na").innerHTML = st_name;
document.querySelector(".stu-suc-sto .one .pro .t-na-na").innerHTML = st_name;

document.querySelector(".stu-suc-sto .one .pro .f-na-st").innerHTML = sto1;
document.querySelector(".stu-suc-sto .one .pro .s-na-st").innerHTML = sto2;
document.querySelector(".stu-suc-sto .one .pro .t-na-st").innerHTML = sto3;


