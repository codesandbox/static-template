let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let bar5 = document.getElementById("bar5");

let allbars = document.getElementsByClassName('bar');
for(let i = 0 ; i < 5 ; i++){
  let ran = 120 + Math.ceil(Math.random()*300);
  allbars[i].style.height = `${ran}px`;
  allbars[i].innerHTML = ran;
}

// let pos1 = 0;
// let pos2 = 50;
// let pos3 = 100;
// let pos4 = 150;
// let pos5 = 200;
// let pos6 = 250;

const exchange1 =(id1, id2) => {
 anime({
  targets: id1,
  translateX: '+=50',
  duration: 1000,
});

anime({
  targets: id2,
  translateX: '-=50',
  duration: 1000
});
}
let dis = 0;
let temp;

const sort1 = () =>{
  if(bar1.innerHTML > bar2.innerHTML){
  let id1 = bar1;
let id2 = bar2;
exchange1(id1, id2);
//swap(bar1, bar2);
temp = bar1;
bar1 = bar2;
bar2 = temp;
// bar1.style.height  = h2;
// bar2.style.height  = h1;

// setTimeout(() =>{
//   swap();
//  }, 2000
// ) 
//bar2.style.backgroundColor = 'green';
}
}

const sort2 = () =>{
  if(bar2.innerHTML > bar3.innerHTML){
    let id1 = bar2;
   let id2 = bar3;
 
  exchange1(id1, id2);
  temp = bar2;
bar2 = bar3;
bar3 = temp;
//bar3.style.backgroundColor = 'yellow';

  }
  }

  const sort3 = () =>{
    if(bar3.innerHTML > bar4.innerHTML){
      let id1 = bar3;
     let id2 = bar4;
    
    exchange1(id1, id2);
    temp = bar3;
  bar3 = bar4;
  bar4 = temp;
  
    }
  }
    const sort4 = () =>{
      if(bar4.innerHTML > bar5.innerHTML){
        let id1 = bar4;
       let id2 = bar5;
       
      exchange1(id1, id2);
      temp = bar4;
    bar4 = bar5;
    bar5 = temp;
    
      }
    }

 const  swap = (a,b) => {
    temp = a;
    a = b;
    b = temp;
  }
  console.log(bar2, bar3);