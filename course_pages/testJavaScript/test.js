const login_box=document.querySelector(".login_box");
const info_box=document.querySelector(".info_box");
const exit_btn=info_box.querySelector(".buttons .quit");
const continue_btn=info_box.querySelector(".buttons .restart");
const quiz_box=document.querySelector(".quiz_box");
const certificate_box=document.querySelector(".certificate_box");
const option_list =document.querySelector(".option_list");
const timeCount= quiz_box.querySelector(".timer .time_sec");
const timeLine= quiz_box.querySelector("header .time_line");
const login_btn=document.querySelector(".loginBtn");
const firstName=document.querySelector(".login_box .first_name");
const lastName=document.querySelector(".login_box .last_name");
const emailAddress=document.querySelector(".login_box .email_address");
const password=document.querySelector(".login_box .passWord");
const validationMessage=document.querySelector(".login_box .message");
const validationEmail=document.querySelector(".login_box .emailmessage");
const passwordMessage=document.querySelector(".login_box .passwordmessage");
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
password.onfocus=()=>{
    passwordMessage.style.display="block";
}
// password.onblur=()=>{
//     passwordMessage.style.display="none";
// }
const x=emailAddress.value;   
 
login_btn.onclick =()=>{
    if(firstName.value<1|| lastName.value<1||emailAddress.value<1||password.value<1){
        validationMessage.style.display="block";
    }
    // else if(!x.match(validEmail)){
    //     emailAddress.style.background="#ff7f7f"; 
    //     validationEmail.style.display="block"; 
    // }
    else if(!password.value.match(numbers)||!password.value.match(lowerCaseLetters)||!password.value.match(upperCaseLetters)||!password.value>8){
        password.style.background="#ff7f7f";
        passwordMessage.style.display="block";
    }
    else{
    login_box.classList.add("deactivateLogin");
    info_box.classList.add("activeInfo");
}
}
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
    login_box.classList.add("activateLogin");
}
continue_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(0);
    queCounter(1);
    startTimer(30);
    startTimerLine(0);
}
let que_count=0;
let que_numb=1;
let counter;
let timeValue=30;
let widthValue=0;
let userScore=0;
const next_btn=quiz_box.querySelector(".next_btn");
const result_box=document.querySelector(".result_box");
const restart_quiz=result_box.querySelector(".buttons restart");
const quit_quiz=result_box.querySelector(".buttons .quit");
let resultDeclare=result_box.querySelector(".tryHarder");
let try_hard='<span>Try Harder!!</span>';
resultDeclare.innerHTML=try_hard;
resultDeclare.style.display="none"
quit_quiz.onclick=()=>{
    if(userScore>7){
    result_box.classList.remove("activeResult");
    certificate_box.classList.add("activeCertificate");
    resultDeclare.style.display="none";
    quit_quiz.style.display="block";
    }
    else{
        resultDeclare.style.display="block";
        quit_quiz.style.display="none";
        alert("Taking You Back to the quiz.");
        this.location.reload(true);
    }
}
next_btn.onclick =()=>{
    if(que_count<questions.length-1){
        que_count++;
        que_numb++;
        showQuestion(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display="none";
    }
    else{
        console.log("Questions COmpleted");
        showResultBox();
    }
}

function showQuestion(index){
    document.addEventListener("visibilitychange",function(){
        const state=document.visibilityState;
        if(state=="hidden"){
            countWarning+=1;
            warning_page.classList.add("activateWarning");
            quiz_box.classList.remove("activeQuiz");
            document.title="Warning!!!";
            warningContinue.onclick=()=>{
                warning_page.classList.remove("activateWarning");
                quiz_box.classList.add("activeQuiz");
                document.title="C++:Test";
            }
            if(countWarning>3)
            {
                warning_page.classList.add("activateWarning");
                warningContinue.onclick=()=>{
                    this.location.reload(true);
                    alert("Reloading Page");
                }
            }   
        }
    });
    const que_text=document.querySelector(".que_text");
    let que_tag='<span>'+ questions[index].numb+". "+ questions[index].question +'</span>';
    let option_tag='<div class="option"><span>'+questions[index].options[0]+'</span></div>'
    +'<div class="option"><span>'+questions[index].options[1]+'</span></div>'+'<div class="option"><span>'+questions[index].options[2]+'</span></div>'+'<div class="option"><span>'+questions[index].options[3]+'</span></div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;

    const option= option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");        
    }
} 
let tickicon='<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossicon='<div class="icon tick"><i class="fa-solid fa-xmark"></i></div>';
function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns= answer.textContent;
    let correctAns=questions[que_count].answer;
    let allOptions= option_list.children.length;
    if(userAns==correctAns){
        userScore+=1;
        console.log(userScore);
        answer.classList.add("correct");
    console.log("Answer is correct");
    answer.insertAdjacentHTML("beforeend",tickicon);
    }
    else{
        console.log("Answer is Incorrect");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",crossicon);
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent==correctAns){
                option_list.children[i].setAttribute("class","option correct");
                option_list.children[i].insertAdjacentHTML("beforeend",tickicon);
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
        
    }
    next_btn.style.display="block";
} 

function queCounter(index) {
    const bottom_ques_counter=quiz_box.querySelector(".total_que");
    let totalQuestionsCountTag='<span><p>'+ que_numb+'</p>of<p>'+questions.length+'</p>Questions</span>';
    bottom_ques_counter.innerHTML=totalQuestionsCountTag;
}
function showResultBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText=result_box.querySelector(".score_text");
    if(userScore>7){
        let scoreTag='<span>and Congrats! You got <p>'+userScore+' </p> out of  <p>'+questions.length+'</p></span>';
        scoreText.innerHTML=scoreTag;

    }
    else if(userScore>5){
        let scoreTag='<span>and nice, You got <p>'+userScore+' </p> out of  <p>'+questions.length+'</p></span>';
        scoreText.innerHTML=scoreTag;
    }
    else{
        let scoreTag='<span>and sorry, You got only <p>'+userScore+' </p> out of  <p>'+questions.length+'</p></span>';
        scoreText.innerHTML=scoreTag;
    }
}
function showCertificateBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.remove("activeResult");
    certificate_box.classList.add("activeCertificate");
}
function startTimer(time) {
    counter=setInterval(timer, 1000);
    function timer(){
        timeCount.textContent=time;
        time--;
        if(time<9){
            let addZero=timeCount.textContent;
            timeCount.textContent="0"+addZero;
        }
        if(time<0){
            clearInterval(counter);
            timeCount.textContent="00";
            next_btn.style.display="block";
        }
    }
}
function startTimerLine(time) {
    counterLine=setInterval(timer, 59);
    function timer(){
        time+=1;
        timeLine.style.width=time+"px";
        if(time>549){
            clearInterval(counterLine);
        }
    }
}
generatePdf(firstName.value+" "+lastName.value);
var countWarning=0;
const warning_page=document.querySelector(".warning_box");
// const main_page=document.querySelector(".page")
const warningContinue=document.querySelector(".continue");
