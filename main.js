document.addEventListener("DOMContentLoaded", function() {
    const firstSlides = document.querySelectorAll('.interesting .ff-img, .interesting .fs-img, .interesting .ft-img');
    const firstLeftArrow = document.getElementById("firstArrowLeft");
    const firstRightArrow = document.getElementById("firstArrowRight");

    let firstActiveIndex = 1;// Start with the second slide as active

    function updateFirstActiveSlide() {
        firstSlides.forEach((fslide, index) => {
            fslide.classList.remove('active');
            fslide.querySelector('.slideImg').classList.remove('h-200');
            fslide.querySelector('.slideImg').classList.add('h-150');
            if (index === firstActiveIndex) {
                 fslide.classList.add('active');
                 fslide.querySelector('.slideImg').classList.remove('h-150');
                 fslide.querySelector('.slideImg').classList.add('h-200');
            }
        });
    }
    firstLeftArrow.addEventListener('click', () => {
        firstActiveIndex = (firstActiveIndex - 1 + firstSlides.length) % firstSlides.length;
        updateFirstActiveSlide();
    });
    firstRightArrow.addEventListener('click', () => {
        firstActiveIndex = (firstActiveIndex + 1) % firstSlides.length;
        updateFirstActiveSlide();
    });
    
    updateFirstActiveSlide();
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.interesting .sf-img, .interesting .ss-img, .interesting .st-img');
    const leftArrow = document.getElementById("secondArrowLeft");
    const rightArrow = document.getElementById("secondArrowRight");

    let activeIndex = 1; // Index of the initially active slide

    function updateActiveSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.querySelector('.slideImg').classList.remove('h-200');
            slide.querySelector('.slideImg').classList.add('h-150');
            if (index === activeIndex) {
                slide.classList.add('active');
                slide.querySelector('.slideImg').classList.remove('h-150');
                slide.querySelector('.slideImg').classList.add('h-200');
            }
        });
    }

    leftArrow.addEventListener('click', () => {
        activeIndex = (activeIndex - 1 + slides.length) % slides.length;
        updateActiveSlide();
    });

    rightArrow.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % slides.length;
        updateActiveSlide();
    });

    updateActiveSlide(); // Initialize with the default active slide
});

document.addEventListener("DOMContentLoaded", function() {
    const thirdSlides = document.querySelectorAll('.interesting .tf-img, .interesting .ts-img, .interesting .tt-img');
    const thirdLeftArrow = document.getElementById("thirdArrowLeft");
    const thirdRightArrow = document.getElementById("thirdArrowRight");

    let thirdActiveIndex = 1; 

    function updateThirdActiveSlide() {
        thirdSlides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.querySelector('.slideImg').classList.remove('h-200');
            slide.querySelector('.slideImg').classList.add('h-150');
            if (index === thirdActiveIndex) {
                 slide.classList.add('active');
                 slide.querySelector('.slideImg').classList.remove('h-150');
                 slide.querySelector('.slideImg').classList.add('h-200');
            }
        });
    }
        
    thirdLeftArrow.addEventListener('click', () => {
        thirdActiveIndex = (thirdActiveIndex - 1 + thirdSlides.length) % thirdSlides.length;
        updateThirdActiveSlide();
    });
    thirdRightArrow.addEventListener('click', () => {
        thirdActiveIndex = (thirdActiveIndex + 1) % thirdSlides.length;
        updateThirdActiveSlide();
    });
    updateThirdActiveSlide();
});
const date = new Date()
let month = date.getMonth()
let year = date.getYear()

const rendercalander = ()=> {
  
    const real = date.toDateString()
    const monthdays = document.querySelector('.days');
    const lastDay = new Date(year, month +1, 0).getDate()
    const lastdaynum= new Date(year, month,0).getDate()
    const todysdayindex = new Date(year, month, 1).getDay()-1
    const lastdayindex = new Date(year, month + 1, 0).getDay() + 1
    const nextmonthdays = 7 - lastdayindex
    const today = new Date().getDate()

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
    ]

    let dispYear = year
    dispYear += 1900
    document.querySelector('.amin-month').innerHTML
    = months[month] + " " + dispYear
    document.querySelector('.month .form .p').innerHTML
    = real
    
    let days = ""
    for(let x = todysdayindex; x >= 0; x--){
        days += `<div  class = "last-month-days"> ${lastdaynum - x}</div>`
        monthdays.innerHTML = days
    };

    for( let i = 1; i <= lastDay; i++) {

        if(i === today && month === new Date().getMonth() && year === new Date().getYear()){
            days += `<div class = "curentdate"> ${i}</div>`; 
        }
        else {
        days += `<div> ${i}</div>`
        monthdays.innerHTML = days
        }
    }


    for(let p = 1; p <= nextmonthdays; p++){
        days += `<div class = "next-month-days"> ${p}</div>`
        monthdays.innerHTML = days
    }

    const weakdays = document.querySelector('.weak')
    const weakarray = [
        "su",
        "mo",
        "tu",
        "wa",
        "th",
        "fr",
        "sa",
    ];

    let weaks = ""
    for(let j = 0;j <= 6; j++){
        weaks += `<div> ${weakarray[j]} </div>`
        weakdays.innerHTML = weaks
    }


    
}


document.querySelector('.prev').addEventListener("click",()=> {
    month -= 1
    if(month == "-1"){
        month = 11
        year -= 1
        console.log(year)
    }
    rendercalander()
})

document.querySelector('.next').addEventListener('click',()=> {
    month += 1

    if(month == "12"){
        month = 0
        year += 1
        console.log(year)
    }
    rendercalander()
});

rendercalander()

let st_name = "Tim Abel"
let sto1 = "five places to visit in okland with fantastic negrito."
let sto2 = " A Giant Swing. Jumgle Screaming. Ice Plunges. You'll Love It."
let sto3 = "No Fixed Abode: Quitting Home.";
let sto4 = "No Fixed Abode: Quitting Home.";

document.querySelector(".stu-suc-sto .one .pro .fi-na-na").innerHTML = st_name
document.querySelector(".stu-suc-sto .one .pro .s-na-na").innerHTML = st_name
document.querySelector(".stu-suc-sto .one .pro .t-na-na").innerHTML = st_name
document.querySelector(".stu-suc-sto .one .pro .fo-na-na").innerHTML = st_name

document.querySelector(".stu-suc-sto .one .pro .fi-na-st").innerHTML = sto1
document.querySelector(".stu-suc-sto .one .pro .s-na-st").innerHTML = sto2
document.querySelector(".stu-suc-sto .one .pro .t-na-st").innerHTML = sto3
document.querySelector(".stu-suc-sto .one .pro .fo-na-st").innerHTML = sto4

function popup(){
    document.getElementById("pop-up-view").style.display =  "block"
}

function closeNav(){
    document.getElementById("pop-up-view").style.display = "none" 
}

function searchnow(){
    const searchArea = document.getElementById("search-place")
    let searchValue = searchArea.value  
    searchArea.value = ""
}

// let first = "middle"
// let second = "middle"
// let third = "middle"
// document.addEventListener("DOMContentLoaded", function() {
//     const firstRight = document.getElementById("firstArrowRight");

//     if (firstRight) {
//         firstRight.addEventListener("click", function() {
//             console.log("clicked");
//             // myPopup.classList.add("show");
//         });
//     } else {
//         console.error('Element with ID "firstArrowRight" not found.');
//     }
// });



