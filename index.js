const btn = document.querySelector("#btn").addEventListener("click", (event)=>{
event.target;
const day=document.querySelector("#day");
const month=document.querySelector("#month");
const years=document.querySelector("#year");
const febuary =["02"];
const monthsEnding30 =["04", "06", "09", "11"];
const monthsEnding31 =["01", "03", "05", "07", "08", "10", "12"];
const febuaryDays =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"
];
  const daysEnding30 =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
];
  const daysEnding31 =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
];
// Starting calculation for the day, month and yaer of the Age Calculator 
const date= new Date();
const dayCal =String(date.getDate()).padStart(2,"0");
const monthCal =String(date.getMonth() + 1).padStart(2,"0");
const yearCal =String(date.getFullYear());
const beforeCurrentMonth= "0"+ monthCal - 1;
// + monthCal - 1;
console.log(beforeCurrentMonth)
day.value;
month.value;
years.value;
if(dayCal ===day.value){  
 var dayAge = dayCal-day.value;
}else if(dayCal > day.value){
  var dayAge = dayCal-day.value;
}else{
  const dayCal =date.getDate()
  var dayAge = (31) + (dayCal) - (day.value);
}if(month.value > monthCal && day.value > dayCal){
  const monthCal =date.getMonth() + 1;
  var monthAge= 12 + (monthCal)-(month.value)-1;
}else if(month.value > monthCal && day.value <= dayCal){
  const monthCal =date.getMonth() + 1;
    var monthAge= 12 + (monthCal)-(month.value);
}else{
  null
}if(monthCal > month.value && dayCal > day.value ){
  const monthCal =date.getMonth() + 1;
  var monthAge= (monthCal)-(month.value)-1;
 }else if(monthCal > month.value && dayCal < day.value ){
    var monthAge= (monthCal)-(month.value);
    // 
 }
else{
   null
 }if(monthCal === month.value && dayCal === day.value){  
  const monthCal =date.getMonth() + 1;
  var monthAge = (monthCal) - (month.value);
}else if(monthCal === month.value && day.value < dayCal){
  const monthCal =date.getMonth() + 1;
  var monthAge = (monthCal) - (month.value);
}else if(monthCal === month.value && day.value > dayCal){
  const monthCal =date.getMonth() + 1;
  var monthAge= (12) + (monthCal)-(month.value)-1;
}else{
  null
}
if(month.value == beforeCurrentMonth && dayCal > day.value ){
  var monthAge =1;}
else if(month.value == beforeCurrentMonth && day.value > dayCal ){
var monthAge =0;
}else if(month.value == beforeCurrentMonth && dayCal === day.value){
  var monthAge =0;
}else{
  null
}

if( month.value === monthCal ){
  var yearAge = (yearCal)-(years.value)-1;
}else if( month.value > monthCal){
  var yearAge = (yearCal)-(years.value)-1;
}else{
  var yearAge = yearCal-years.value;
}
const anwerOfAgeInYears= yearAge;
const anwerOfAgeInMonths= monthAge;
const anwerOfAgeInDays= dayAge;
// End
// day, month & yaer error messages 
  if(day.value ===""){
    const days=document.querySelector("#day");
    const errors =document.querySelectorAll(".error");
    const paragraphs =document.querySelectorAll(".p");
    errors[0].textContent="This field is required";
    days.style.border="2px ridge red";
    paragraphs[0].style.color="red";
    days.focus();
    const ageInYears=document.querySelector("#em1");
      ageInYears.innerHTML="--";
      const ageInMonths=document.querySelector("#em2");
      ageInMonths.innerHTML="--";
      const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";  
  }else if(day.value >=32 || day.value <=0){
    const days=document.querySelector("#day");
    days.style.border="2px ridge red";
    const errors =document.querySelectorAll(".error");
    errors[0].textContent="Must be a valid day";
    const paragraphs =document.querySelectorAll(".p");
    paragraphs[0].style.color="red";
    days.focus();
    const ageInYears=document.querySelector("#em1");
      ageInYears.innerHTML="--";
      const ageInMonths=document.querySelector("#em2");
      ageInMonths.innerHTML="--";
      const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";   
  }else{
    const days=document.querySelector("#day");
    const errors =document.querySelectorAll(".error");
    errors[0].textContent="";
    days.style.border="2px ridge #000"
    days.focus();
    const paragraphs =document.querySelectorAll(".p");
    paragraphs[0].style.color="black"; 
  }if(years.value ===""){
    const years=document.querySelector("#year");
    const errors =document.querySelectorAll(".error");
    const paragraphs =document.querySelectorAll(".p");
    errors[2].textContent="This field is required";
    years.style.border="2px ridge red";
    paragraphs[2].style.color="red";
    years.focus();
    const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML="--";
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML="--";
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";
  }else if(years.value <= 0){
      const years=document.querySelector("#year");
      years.style.border="2px ridge red"
      const errors =document.querySelectorAll(".error");
      errors[2].textContent="Must be a valid year"
      const paragraphs =document.querySelectorAll(".p");
      paragraphs[2].style.color="red";
      years.focus();
      const ageInYears=document.querySelector("#em1");
      ageInYears.innerHTML="--";
      const ageInMonths=document.querySelector("#em2");
      ageInMonths.innerHTML="--";
      const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";
  }else if(years.value >= 2024){
    const years=document.querySelector("#year");
    years.style.border="2px ridge red"
    const errors =document.querySelectorAll(".error");
    errors[2].textContent="Must be in the past"
    const paragraphs =document.querySelectorAll(".p");
    paragraphs[2].style.color="red";
    years.focus();
    const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML="--";
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML="--";
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--"; 
  }else{
    const years=document.querySelector("#year");
    const errors =document.querySelectorAll(".error");
    errors[2].textContent="";
    years.style.border="2px ridge #000"
    years.focus();
    const paragraphs =document.querySelectorAll(".p");
    paragraphs[2].style.color="black";}
  if(month.value ===""){
    const months=document.querySelector("#month");
    const errors =document.querySelectorAll(".error");
    const paragraphs =document.querySelectorAll(".p");
    errors[1].textContent="This field is required";
    months.style.border="2px ridge red";
    paragraphs[1].style.color="red";
    months.focus();
    const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML="--";
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML="--";
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";
  }else if(month.value >=13 || month.value <=0){
    const months=document.querySelector("#month");
    months.style.border="2px ridge red"
    const errors =document.querySelectorAll(".error");
    errors[1].textContent="Must be a valid month"
    const paragraphs =document.querySelectorAll(".p");
    paragraphs[1].style.color="red";
    months.focus();
    const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML="--";
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML="--";
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--"; 
  }else{
    const months=document.querySelector("#month");
    const errors =document.querySelectorAll(".error");
    errors[1].textContent="";
    months.style.border="2px ridge #000"
    months.focus();
    const paragraphs =document.querySelectorAll(".p");
    paragraphs[1].style.color="black";
  }if(daysEnding30.includes(day.value) && monthsEnding30.includes(month.value) && years.value <=2023){
    const days=document.querySelector("#day");
    const months=document.querySelector("#month");
    const years=document.querySelector("#year");
  days.style.border="2px ridge"
 months.style.border="2px ridge"
 years.style.border="2px ridge"
  const paragraphs =document.querySelectorAll(".p");
  paragraphs[0].style.color="#000";
  paragraphs[1].style.color="#000";
  paragraphs[2].style.color="#000";
  const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML=anwerOfAgeInYears;
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML=anwerOfAgeInMonths;
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML=anwerOfAgeInDays;
}else if(day.value===""){
  const days=document.querySelector("#day");
    const errors =document.querySelectorAll(".error");
    const paragraphs =document.querySelectorAll(".p");
    errors[0].textContent="This field is required";
    days.style.border="2px ridge red";
    paragraphs[0].style.color="red";
    days.focus();
}else if(day.value >=32 || day.value <=0){
  const days=document.querySelector("#day");
  days.style.border="2px ridge red";
  const errors =document.querySelectorAll(".error");
  errors[0].textContent="Must be a valid day";
  const paragraphs =document.querySelectorAll(".p");
  paragraphs[0].style.color="red";
  days.focus();
}else{
    const days=document.querySelector("#day");
    const months=document.querySelector("#month");
    const years=document.querySelector("#year");
  days.style.border="2px ridge red"
 months.style.border="2px ridge red"
 years.style.border="2px ridge red"
  const errors =document.querySelectorAll(".error");
  errors[0].textContent="Must be a valid code"
  const paragraphs =document.querySelectorAll(".p");
  paragraphs[0].style.color="red";
  paragraphs[1].style.color="red";
  paragraphs[2].style.color="red";
  const ageInYears=document.querySelector("#em1");
  ageInYears.innerHTML="--";
  const ageInMonths=document.querySelector("#em2");
  ageInMonths.innerHTML="--";
  const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";
  } if(daysEnding31.includes(day.value) && monthsEnding31.includes(month.value) && years.value <=2023){
    const days=document.querySelector("#day");
    const months=document.querySelector("#month");
    const years=document.querySelector("#year");
  days.style.border="2px ridge"
 months.style.border="2px ridge"
 years.style.border="2px ridge"
  const paragraphs =document.querySelectorAll(".p");
  paragraphs[0].style.color="#000";
  paragraphs[1].style.color="#000";
  paragraphs[2].style.color="#000";
  const errors =document.querySelectorAll(".error");
  errors[0].textContent="";
  const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML=anwerOfAgeInYears;
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML=anwerOfAgeInMonths;
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML=anwerOfAgeInDays;
  }else{
    null
  }if(febuaryDays.includes(day.value) && febuary.includes(month.value) && years.value <=2023){
    const days=document.querySelector("#day");
    const months=document.querySelector("#month");
    const years=document.querySelector("#year");
  days.style.border="2px ridge"
 months.style.border="2px ridge"
 years.style.border="2px ridge"
  const paragraphs =document.querySelectorAll(".p");
  paragraphs[0].style.color="#000";
  paragraphs[1].style.color="#000";
  paragraphs[2].style.color="#000";
  const errors =document.querySelectorAll(".error");
  errors[0].textContent="";
  const ageInYears=document.querySelector("#em1");
    ageInYears.innerHTML=anwerOfAgeInYears;
    const ageInMonths=document.querySelector("#em2");
    ageInMonths.innerHTML=anwerOfAgeInMonths;
    const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML=anwerOfAgeInDays;
  }else{
    null
  }if( years.value==="" || years.value <= 0 || years.value <=1000 ){
  const ageInYears=document.querySelector("#em1");
  ageInYears.innerHTML="--";
  const ageInMonths=document.querySelector("#em2");
  ageInMonths.innerHTML="--";
  const ageInDays=document.querySelector("#em3");
    ageInDays.innerHTML="--";
}});
