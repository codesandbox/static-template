let allwords = ['BUGGATI', 'FORD', 'FERRARI', 'MERCEDES', 'TATA', 'DASSAULT', 'AUDI', 'CHEVEROLET', 'BENTLEY', 'MAHINDRA'];
let ran = Math.ceil(10*Math.random() - 1);
console.log(ran);
let word = allwords[ran];
let lives = 9;
let count = 0;
let gameover = false;
let demand = document.getElementById("word");
let score = document.getElementById('score');
score.innerHTML = lives;
for (let i = 0; i < word.length; i++) {
  let letter = document.createElement("div");
  letter.className = "letter";
  demand.appendChild(letter);
}

let danger = document.getElementById("threat");
for (let i = 0; i < 9; i++) {
  let life = document.createElement("img");
  life.src = 'alive.png'  ;
  life.className = "life";
life.setAttribute('id', (100 + i).toString());
  danger.appendChild(life);
}

let keyboard = document.getElementById("keyboard");
let ch = 65;
for (let i = 11; i < 37; i++) {
  let key = document.createElement("div");
  key.className = "key";
  key.setAttribute("id", i.toString());
  let str = String.fromCharCode(ch);
  key.innerHTML = str;
  key.addEventListener("click", (event) => handleclick(key, i));
  ch++;
  keyboard.appendChild(key);
}

// mataching the pressed key with letter in given word
//if present it will show on screen
let letters = document.getElementsByClassName("letter");
//let zindagi = document.getElementsByClassName("life");
let k = 100;
let result = document.getElementById('congo');
let st ='';
const handleclick = (key, i) => {
 let flag = false;
  if (gameover === false) {
//    console.log("clicked");
let bypass = false;
let alredy = key.innerHTML;
      if(!absent(alredy)){
        bypass = true;
      }
        
    for (let j = 0; j < word.length; j++) {
      
     // break;

      if (key.innerHTML === word[j]){
       letters[j].innerHTML = word[j];
      // console.log(catch);
       flag = true;
       if(!bypass){
       count++;
       st = st + word[j];
       }
      console.log(st);
      }
    }
    console.log(count);
    if(flag === true){
      let hide = document.getElementById(`${i}`);
      hide.style.opacity = '0.5';
  //  hide.removeEventListener('click',(event) => handleclick(key, i), {once: true});
   //   key.removeEventListener('click',(event) => handleclick(key, i));
    }
    if(flag === false){
      lives--;
      let zindagi = document.getElementById(`${k}`);
      zindagi.setAttribute('src', 'dead.png');
      k++;
      score.innerHTML = lives;
    }
    if (count === word.length ) {
   //  alert("You win");
      congo.innerHTML = 'CONGRATS, YOU SAVED '+lives+' PUPPIES';
      modal.style.display = "block";
      confetti.start();
      gameover = true;
    }
    if (lives === 0) {
    congo.innerHTML = 'YOU FAILED TO SAVE PUPPIES';
    modal.style.display = "block";
      //  alert("You lost");
      gameover = true;
    }
  }
};
const absent = (wo) =>{
  for(let m = 0 ;  m < st.length ; m++){
if(st[m] === wo)
return false;
  }
  return true;
}
