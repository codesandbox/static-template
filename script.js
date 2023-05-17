let vsplayercount;
let vscomputercount;
let computerrandom = [1, 2, 3];
let selectednumber;
let temporaryplayerscore = 0;
let temporaryenemyscore = 0;
let player1choice = 0;
let gamecounter = 1;

function computerpage() {
  location.href = "playervscomputer.html";
}

function playerpage() {
  location.href = "playervsplayer.html";
}

function vsplayer() {
  vsplayercount = 1;
  vscomputercount = 0;
}

function vscomputer() {
  vscomputercount = 1;
  vsplayercount = 0;
}

function rockmode() {
  if (vscomputercount == 1 && gamecounter < 11) {
    selectednumber =
      computerrandom[Math.floor(Math.random() * computerrandom.length)];
    if (selectednumber == 1) {
      temporaryplayerscore += 0.5;
      temporaryenemyscore += 0.5;
      document.getElementById("playername1").innerHTML = "👊: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :👊";
      document.getElementById("winorlose1").innerHTML = "DRAW";
    } else if (selectednumber == 2 && gamecounter < 11) {
      temporaryenemyscore += 1;
      document.getElementById("playername1").innerHTML = "👊: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :✋";
      document.getElementById("winorlose1").innerHTML = "Computer Wins";
    } else if (selectednumber == 3 && gamecounter < 11) {
      temporaryplayerscore += 1;
      document.getElementById("playername1").innerHTML = "👊: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :✌";
      document.getElementById("winorlose1").innerHTML = "Player 1 Wins";
    }
    gamecounter += 1;
    document.getElementById("playerscore").innerHTML = temporaryplayerscore;
    document.getElementById("enemyscore").innerHTML = temporaryenemyscore;
    document.getElementById("modeselect").innerHTML = "Round: " + gamecounter;
  } else if (vsplayercount == 1 && gamecounter < 11) {
    if (player1choice == 0) {
      player1choice = 1;
      document.getElementById("winorlose").innerHTML = "Turn: Player 2";
      document.getElementById("winorlose1").innerHTML = "&nbsp;";
    } else if (player1choice == 1) {
      player1choice = 0;
      temporaryplayerscore += 0.5;
      temporaryenemyscore += 0.5;
      document.getElementById("playername1").innerHTML = "👊: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :👊";
      document.getElementById("winorlose1").innerHTML = "DRAW";
    } else if (player1choice == 2) {
      player1choice = 0;
      temporaryplayerscore += 1;
      document.getElementById("playername1").innerHTML = "✋: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :👊";
      document.getElementById("winorlose1").innerHTML = "Player 1 Wins";
    } else if (player1choice == 3) {
      player1choice = 0;
      temporaryenemyscore += 1;
      document.getElementById("playername1").innerHTML = "✌: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :👊";
      document.getElementById("winorlose1").innerHTML = "Player 2 Wins";
    }
    if (player1choice == 0) {
      gamecounter += 1;
      document.getElementById("playerscore").innerHTML = temporaryplayerscore;
      document.getElementById("enemyscore").innerHTML = temporaryenemyscore;
      document.getElementById("modeselect").innerHTML = "Round: " + gamecounter;
      document.getElementById("winorlose").innerHTML = "Turn: Player 1";
    }
  }
  if (gamecounter == 11 && vscomputercount == 1) {
    if (temporaryplayerscore > temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 1 Wins";
    } else if (temporaryplayerscore < temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Computer Wins";
    } else {
      document.getElementById("winorlose").innerHTML = "DRAW";
    }
    const gamestoragelocal = {
      gamePlayername: "Player 1",
      gameplayerscore: temporaryplayerscore,
      gameEnemyName: "Computer",
      gameEnemyScore: temporaryenemyscore
    };
    window.localStorage.setItem(
      "GameStorage",
      JSON.stringify(gamestoragelocal)
    );
    console.log(gamestoragelocal);
  }
  if (gamecounter == 11 && vsplayercount == 1) {
    if (temporaryplayerscore > temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 1 Wins";
    } else if (temporaryplayerscore < temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 2 Wins";
    } else {
      document.getElementById("winorlose").innerHTML = "DRAW";
    }
    localStorage.setItem("Name", "Player 1");
    localStorage.setItem("NameScore", temporaryplayerscore);
    localStorage.setItem("Enemy", "Player 2");
    localStorage.setItem("EnemyScore", temporaryenemyscore);
    const gamestoragelocal = {
      gamePlayername: "Player 1",
      gameplayerscore: temporaryplayerscore,
      gameEnemyName: "Player 2",
      gameEnemyScore: temporaryenemyscore
    };
    window.localStorage.setItem(
      "GameStorage",
      JSON.stringify(gamestoragelocal)
    );
    console.log(gamestoragelocal);
  }
  if (gamecounter == 11) {
    document.getElementById("modeselect").innerHTML = "Game Ended";
    document.getElementById("rockbutton").disabled = true;
    document.getElementById("paperbutton").disabled = true;
    document.getElementById("scissorsbutton").disabled = true;
    document.getElementById("rockbutton").style.background = "#031424";
    document.getElementById("paperbutton").style.background = "#031424";
    document.getElementById("scissorsbutton").style.background = "#031424";
    document.getElementById("winorlose1").innerHTML = "&nbsp;";
    alert("See Console for LocalStorage");
  }
}

function papermode() {
  if (vscomputercount == 1 && gamecounter < 11) {
    selectednumber =
      computerrandom[Math.floor(Math.random() * computerrandom.length)];
    if (selectednumber == 1) {
      temporaryplayerscore += 1;
      document.getElementById("playername1").innerHTML = "✋: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :👊";
      document.getElementById("winorlose1").innerHTML = "Player 1 Wins";
    } else if (selectednumber == 2 && gamecounter < 11) {
      temporaryplayerscore += 0.5;
      temporaryenemyscore += 0.5;
      document.getElementById("playername1").innerHTML = "✋: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :✋";
      document.getElementById("winorlose1").innerHTML = "DRAW";
    } else if (selectednumber == 3 && gamecounter < 11) {
      temporaryenemyscore += 1;
      document.getElementById("playername1").innerHTML = "✋: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :✌";
      document.getElementById("winorlose1").innerHTML = "Computer Wins";
    }
    gamecounter += 1;
    document.getElementById("playerscore").innerHTML = temporaryplayerscore;
    document.getElementById("enemyscore").innerHTML = temporaryenemyscore;
    document.getElementById("modeselect").innerHTML = "Round: " + gamecounter;
  } else if (vsplayercount == 1 && gamecounter < 11) {
    if (player1choice == 0) {
      player1choice = 2;
      document.getElementById("winorlose").innerHTML = "Turn: Player 2";
      document.getElementById("winorlose1").innerHTML = "&nbsp;";
    } else if (player1choice == 1) {
      player1choice = 0;
      temporaryenemyscore += 1;
      document.getElementById("playername1").innerHTML = "👊: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :✋";
      document.getElementById("winorlose1").innerHTML = "Player 2 Wins";
    } else if (player1choice == 2) {
      player1choice = 0;
      temporaryplayerscore += 0.5;
      temporaryenemyscore += 0.5;
      document.getElementById("playername1").innerHTML = "✋: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :✋";
      document.getElementById("winorlose1").innerHTML = "DRAW";
    } else if (player1choice == 3) {
      player1choice = 0;
      temporaryplayerscore += 1;
      document.getElementById("playername1").innerHTML = "✌: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :✋";
      document.getElementById("winorlose1").innerHTML = "Player 1 Wins";
    }
    if (player1choice == 0) {
      gamecounter += 1;
      document.getElementById("playerscore").innerHTML = temporaryplayerscore;
      document.getElementById("enemyscore").innerHTML = temporaryenemyscore;
      document.getElementById("modeselect").innerHTML = "Round: " + gamecounter;
      document.getElementById("winorlose").innerHTML = "Turn: Player 1";
    }
  }
  if (gamecounter == 11 && vscomputercount == 1) {
    if (temporaryplayerscore > temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 1 Wins";
    } else if (temporaryplayerscore < temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Computer Wins";
    } else {
      document.getElementById("winorlose").innerHTML = "DRAW";
    }
    const gamestoragelocal = {
      gamePlayername: "Player 1",
      gameplayerscore: temporaryplayerscore,
      gameEnemyName: "Computer",
      gameEnemyScore: temporaryenemyscore
    };
    window.localStorage.setItem(
      "GameStorage",
      JSON.stringify(gamestoragelocal)
    );
    console.log(gamestoragelocal);
  }
  if (gamecounter == 11 && vsplayercount == 1) {
    if (temporaryplayerscore > temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 1 Wins";
    } else if (temporaryplayerscore < temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 2 Wins";
    } else {
      document.getElementById("winorlose").innerHTML = "DRAW";
    }
    const gamestoragelocal = {
      gamePlayername: "Player 1",
      gameplayerscore: temporaryplayerscore,
      gameEnemyName: "Player 2",
      gameEnemyScore: temporaryenemyscore
    };
    window.localStorage.setItem(
      "GameStorage",
      JSON.stringify(gamestoragelocal)
    );
    console.log(gamestoragelocal);
  }
  if (gamecounter == 11) {
    document.getElementById("modeselect").innerHTML = "Game Ended";
    document.getElementById("rockbutton").disabled = true;
    document.getElementById("paperbutton").disabled = true;
    document.getElementById("scissorsbutton").disabled = true;
    document.getElementById("rockbutton").style.background = "#031424";
    document.getElementById("paperbutton").style.background = "#031424";
    document.getElementById("scissorsbutton").style.background = "#031424";
    document.getElementById("winorlose1").innerHTML = "&nbsp;";
    alert("See Console for LocalStorage");
  }
}

function scissorsmode() {
  if (vscomputercount == 1 && gamecounter < 11) {
    selectednumber =
      computerrandom[Math.floor(Math.random() * computerrandom.length)];
    if (selectednumber == 1) {
      temporaryenemyscore += 1;
      document.getElementById("playername1").innerHTML = "✌: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :👊";
      document.getElementById("winorlose1").innerHTML = "Computer Wins";
    } else if (selectednumber == 2 && gamecounter < 11) {
      temporaryplayerscore += 1;
      document.getElementById("playername1").innerHTML = "✌: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :✋";
      document.getElementById("winorlose1").innerHTML = "Player 1 Wins";
    } else if (selectednumber == 3 && gamecounter < 11) {
      temporaryplayerscore += 0.5;
      temporaryenemyscore += 0.5;
      document.getElementById("playername1").innerHTML = "✌: Player 1";
      document.getElementById("enemyname1").innerHTML = "Computer :✌";
      document.getElementById("winorlose1").innerHTML = "DRAW";
    }
    gamecounter += 1;
    document.getElementById("playerscore").innerHTML = temporaryplayerscore;
    document.getElementById("enemyscore").innerHTML = temporaryenemyscore;
    document.getElementById("modeselect").innerHTML = "Round: " + gamecounter;
  } else if (vsplayercount == 1 && gamecounter < 11) {
    if (player1choice == 0) {
      player1choice = 3;
      document.getElementById("winorlose").innerHTML = "Turn: Player 2";
      document.getElementById("winorlose1").innerHTML = "&nbsp;";
    } else if (player1choice == 1) {
      player1choice = 0;
      temporaryplayerscore += 1;
      document.getElementById("playername1").innerHTML = "👊: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :✌";
      document.getElementById("winorlose1").innerHTML = "Player 1 Wins";
    } else if (player1choice == 2) {
      player1choice = 0;
      temporaryenemyscore += 1;
      document.getElementById("playername1").innerHTML = "✋: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :✌";
      document.getElementById("winorlose1").innerHTML = "Player 2 Wins";
    } else if (player1choice == 3) {
      player1choice = 0;
      temporaryplayerscore += 0.5;
      temporaryenemyscore += 0.5;
      document.getElementById("playername1").innerHTML = "✌: Player 1";
      document.getElementById("enemyname1").innerHTML = "Player 2 :✌";
      document.getElementById("winorlose1").innerHTML = "DRAW";
    }
    if (player1choice == 0) {
      gamecounter += 1;
      document.getElementById("playerscore").innerHTML = temporaryplayerscore;
      document.getElementById("enemyscore").innerHTML = temporaryenemyscore;
      document.getElementById("modeselect").innerHTML = "Round: " + gamecounter;
      document.getElementById("winorlose").innerHTML = "Turn: Player 1";
    }
  }
  if (gamecounter == 11 && vscomputercount == 1) {
    if (temporaryplayerscore > temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 1 Wins";
    } else if (temporaryplayerscore < temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Computer Wins";
    } else {
      document.getElementById("winorlose").innerHTML = "DRAW";
    }
    const gamestoragelocal = {
      gamePlayername: "Player 1",
      gameplayerscore: temporaryplayerscore,
      gameEnemyName: "Computer",
      gameEnemyScore: temporaryenemyscore
    };
    window.localStorage.setItem(
      "GameStorage",
      JSON.stringify(gamestoragelocal)
    );
    console.log(gamestoragelocal);
  }
  if (gamecounter == 11 && vsplayercount == 1) {
    if (temporaryplayerscore > temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 1 Wins";
    } else if (temporaryplayerscore < temporaryenemyscore) {
      document.getElementById("winorlose").innerHTML = "Player 2 Wins";
    } else {
      document.getElementById("winorlose").innerHTML = "DRAW";
    }
    localStorage.setItem("Name", "Player 1");
    localStorage.setItem("NameScore", temporaryplayerscore);
    localStorage.setItem("Enemy", "Player 2");
    localStorage.setItem("EnemyScore", temporaryenemyscore);
    const gamestoragelocal = {
      gamePlayername: "Player 1",
      gameplayerscore: temporaryplayerscore,
      gameEnemyName: "Player 2",
      gameEnemyScore: temporaryenemyscore
    };
    window.localStorage.setItem(
      "GameStorage",
      JSON.stringify(gamestoragelocal)
    );
    console.log(gamestoragelocal);
  }
  if (gamecounter == 11) {
    document.getElementById("modeselect").innerHTML = "Game Ended";
    document.getElementById("rockbutton").disabled = true;
    document.getElementById("paperbutton").disabled = true;
    document.getElementById("scissorsbutton").disabled = true;
    document.getElementById("rockbutton").style.background = "#031424";
    document.getElementById("paperbutton").style.background = "#031424";
    document.getElementById("scissorsbutton").style.background = "#031424";
    document.getElementById("winorlose1").innerHTML = "&nbsp;";
    alert("See Console for LocalStorage");
  }
}
