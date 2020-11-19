const startGame = () => {
  let p1 = document.getElementById("player1").value;
  let p2 = document.getElementById("player2").value;
  let dim = numchange();

  if (isEmpty(p1) || isEmpty(p2) || dim === "") {
    alert("fill up all te fields carefully");
    return;
  }
  document.getElementById("player1").setAttribute("disabled", true);
  document.getElementById("player2").setAttribute("disabled", true);
  document.getElementById("dimension").setAttribute("disabled", true);
  document.getElementById("testbutton").setAttribute("disabled", true);
  let grid = [];
  let f = [];
  let gamecontainer = document.getElementById("container");
  for (let i = 0; i < dim; i++) {
    let row = document.createElement("div");
    row.className = "row";
    f = [];
    for (let j = 0; j < dim; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", i.toString() + j.toString());
      cell.className = "cell";
      row.appendChild(cell);
      f.push("");
      cell.addEventListener("click", clickfn);
    }
    gamecontainer.appendChild(row);
    grid.push(f);
  }
  let turn = Math.floor(Math.random() * 2);
  let count = 0;
  let man = turn === 0 ? p1 : p2;
  document.getElementById("status").innerHTML = `${man}'s turn`;
  //from here button click
  function clickfn(event) {
    if (turn % 2 === 0) {
      event.target.innerHTML = "X";
      let id = event.target.id;
      let k = parseInt(id[0]);
      let l = parseInt(id[1]);
      grid[k][l] = "x";
      console.log(grid[k][l]);
      turn = turn + 1;
      count = count + 1;
      if (k + l === dim - 1 && k === l && count < dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k === l && count < dim * dim) {
        let f =
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l === dim - 1 && k !== l && count < dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k !== l && count < dim * dim) {
        let f = vertical(k, l, dim, grid) + horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l === dim - 1 && k === l && count === dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k === l && count === dim * dim) {
        let f =
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l === dim - 1 && k !== l && count === dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k !== l && count === dim * dim) {
        let f = vertical(k, l, dim, grid) + horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p1} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      }
      document.getElementById("status").innerHTML = `${p2}'s turn`;
      event.target.removeEventListener("click", clickfn);
    } else {
      event.target.innerHTML = "O";
      let id = event.target.id;
      let k = parseInt(id[0]);
      let l = parseInt(id[1]);
      grid[k][l] = "o";
      console.log(grid[k][l]);
      turn = turn + 1;
      count = count + 1;
      if (k + l === dim - 1 && k === l && count < dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k === l && count < dim * dim) {
        let f =
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l === dim - 1 && k !== l && count < dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k !== l && count < dim * dim) {
        let f = vertical(k, l, dim, grid) + horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
              document
                .getElementById(x.toString() + y.toString())
                .removeEventListener("click", clickfn);
            }
          }
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l === dim - 1 && k === l && count === dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k === l && count === dim * dim) {
        let f =
          leftdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l === dim - 1 && k !== l && count === dim * dim) {
        let f =
          rightdiagonal(dim, grid) +
          vertical(k, l, dim, grid) +
          horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      } else if (k + l !== dim - 1 && k !== l && count === dim * dim) {
        let f = vertical(k, l, dim, grid) + horizontal(k, l, dim, grid);
        if (f > 0) {
          document.getElementById("status").innerHTML = `${p2} rules😎`;
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        } else {
          document.getElementById("status").innerHTML = "It is a Tie";
          event.target.removeEventListener("click", clickfn);
          document.getElementById("hid").classList.remove("hide");
          return;
        }
      }
      document.getElementById("status").innerHTML = `${p1}'s turn`;
      event.target.removeEventListener("click", clickfn);
    }
  }
  function leftdiagonal(dim, grid) {
    let i = 0;
    let j = 0;
    let flag = 1;
    let c = grid[0][0];
    while (j <= dim - 1 && i <= dim - 1) {
      if (c !== grid[i][j]) {
        flag = 0;
        break;
      }
      i = i + 1;
      j = j + 1;
    }
    return flag;
  }
  function rightdiagonal(dim, grid) {
    let i = 0;
    let j = dim - 1;
    let flag = 1;
    let c = grid[0][dim - 1];
    while (j >= 0 && i <= dim - 1) {
      if (c !== grid[i][j]) {
        flag = 0;
        break;
      }
      i = i + 1;
      j = j - 1;
    }
    return flag;
  }
  function vertical(k, l, dim, grid) {
    let x = 0;
    let flag = 1;
    let c = grid[0][l];
    while (x <= dim - 1) {
      if (c !== grid[x][l]) {
        flag = 0;
        break;
      }
      x = x + 1;
    }
    return flag;
  }
  function horizontal(k, l, dim, grid) {
    let x = 0;
    let flag = 1;
    let c = grid[k][0];
    while (x <= dim - 1) {
      if (c !== grid[k][x]) {
        flag = 0;
        break;
      }
      x = x + 1;
    }
    return flag;
  }
};

function isEmpty(val) {
  return !val || !val.trim();
}
function numchange() {
  let el = document.getElementById("dimension");
  return el.value;
}
