let bars = [];
let noOfBars = 0;
let boxwidth;
let container = document.getElementById("box");
let start = document.getElementById("start");
//let resett = document.getElementById("reset");

let number = document.getElementById("input");

const submit = () => {
  noOfBars = document.getElementById("num").value;
if(noOfBars <= 3){
  modal.style.display = 'flex';
  return;
}
  container.classList.remove('hide');
  start.classList.remove('hide');
 // resett.classList.remove('hide');
  number.classList.add('hide');
 

  boxwidth = noOfBars*50;
  container.style.width = `${boxwidth}px`;
  generateBars();
 };
 

const generateBars = () => {
   for (let i = 0; i < noOfBars; i++) {
    let barEl = document.createElement("div");
    barEl.className = "bar";
    barEl.setAttribute("id", i.toString());
    let ran = 120 + Math.ceil(Math.random() * 300);
    barEl.style.height = `${ran}px`;
    barEl.innerHTML = ran;
    let mar = 500 - ran;
    barEl.style.marginTop = `${mar}px`;
    bars[i] = barEl;
    container.appendChild(barEl);
  }
};



const exchange1 = (id1, id2) => {
  anime({
    targets: id1,
    translateX: "+=50",
    duration: 300,
    easing: "linear"
  });

  anime({
    targets: id2,
    translateX: "-=50",
    duration: 300,
     easing: "linear"
  });
};

let temp;
const swap = (i, j) => {
  bars[i].style.opacity = '1';
    bars[j].style.opacity = '1';
  temp = bars[i];
  bars[i] = bars[j];
  bars[j] = temp;
};


let v1 = 0, v2 = 0;
const BubbleSortingVisual = () => {
  console.log('STARTED');
 if(v1 > noOfBars)
 return ;
 v2 = 0;
 bars[v2].style.color = 'red';
let idinterval = setInterval(() => {
if(v2 >= noOfBars -v1 - 1){
  clearInterval(idinterval);
v1++;
bars[v2].style.color = 'green';
BubbleSortingVisual();
console.log("Came Here");
}
else{
  console.log("Value of V2: ",v2);
 
  if (bars[v2].innerHTML > bars[v2 + 1].innerHTML) {
    bars[v2].style.color = 'red';
    bars[v2 + 1].style.color = 'white';
    bars[v2].style.opacity = '0.5';
    bars[v2 + 1].style.opacity = '0.5';
    let id1 = bars[v2];
    let id2 = bars[v2 + 1];
   // exchange1(id1, id2);
    setTimeout(()=>  exchange1(id1, id2), 120);   // Bars will be swapped on display
    setTimeout(()=> swap(v2, v2 + 1), 100);       // ID will be changed of bars
    
  }
 
else{
  bars[v2].style.color = 'white';
}
setTimeout(()=>{
  v2++;
  bars[v2].style.color = 'red';
}, 110);
  console.log("COME TO THIS POINT");
 
}
}, 500)
};



