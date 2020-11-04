let gameContainer = document.getElementById("gamecontainer");

const init = () => {
  for (let i = 0; i < 9; i++) {
    let row = document.createElement("div");

    row.className = "row";
    row.setAttribute("div", `row${i}`);
    for (let j = 0; j < 9; j++) {
      let col = document.createElement("div");
      col.className = "col";
      col.setAttribute("id", `${i}${j}`);
      col.addEventListener("click", () => {
        handelclick(`${i}`, `${j}`);
      });
      row.appendChild(col);
    }

    gameContainer.appendChild(row);
  }
};
let arr = [];
for (let i = 0; i < 10; i++) {
  let i = Math.ceil(Math.random() * 8);
  let j = Math.ceil(Math.random() * 8);
  let idno = `${i}${j}`;

  arr.push(idno);
}

for (let i = 0; i < 10; i++) {
  console.log(arr[i]);
}

let score = document.getElementById("score");
let countscore = 0;
let gameover = document.getElementById("gameover");
let bombclicked = false;

const handelclick = (i, j) => {
  let id = document.getElementById(`${i}${j}`);
  let idvalue = `${i}${j}`;
  console.log(id);

  for (let i = 0; i < 10; i++) {
    if (idvalue === arr[i]) {
      id.innerHTML = "blast";
      id.classList.add("blast");
      bombclicked = true;
      if (bombclicked) {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            for (let k = 0; k < 10; k++) {
              if (arr[k] === `${i}${j}`) {
                let id = document.getElementById(`${i}${j}`);
                id.innerHTML = "blast";
                id.classList.add("blast");
                gameover.classList.remove("hide");
              }
            }
          }
        }
      }
      // alert("Game Over");
      return;
    }
  }

  id.innerHTML = "prize";
  id.classList.add("prize");
  countscore++;
  score.innerHTML = countscore;
};

init();
