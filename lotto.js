var tippek = new Array();
var szamok = new Array();

window.onload = function () {
  szelvenytKeszito();
  //beker();
};

function beker() {
  let i;
  for (i = 0; i < 6; i++) {
    tippek[i] = Number.parseInt(prompt("Kérem a(z) " + (i + 1) + ". számot"));
    if (!Number.isInteger(tippek[i])) {
      alert("Nem egész számot írtál!");
      i--;
    } else {
      if (tippek[i] < 1 || tippek[i] > 45) {
        alert("A tippnek 1-45 közöttinek kell legyen!");
        i--;
      } else {
        if (i > 0) {
          if (ellenorzes(tippek)) {
            alert("Ezt a számot már írtad!");
            i--;
          }
        }
      }
    }
  }

  sorsol(6);

  tippek.sort(function (a, b) {
    return a - b;
  });
  szamok.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("tippek6").innerHTML = "Tippek: " + tippek;
  document.getElementById("sorsolt6").innerHTML = "Húzott számok: " + szamok;
  document.getElementById("eredmeny6").innerHTML =
    "Találatok száma: " + talalatok(6);
  document.getElementById("s1").focus();
}

function ellenorzes(tomb) {
  let i;
  let egyezik = false;

  for (i = 0; i < tomb.length - 1; i++) {
    if (tomb[i] == tomb[tomb.length - 1]) {
      egyezik = true;
    }
  }

  return egyezik;
}

function sorsol(db) {
  let i;
  for (i = 0; i < db; i++) {
    if (db == 6) {
      szamok[i] = Math.round(Math.random() * 44 + 1);
    } else {
      if (db == 7) {
        szamok[i] = Math.round(Math.random() * 34 + 1);
      } else if (db == 5) {
        szamok[i] = Math.round(Math.random() * 89 + 1);
      }
    }
    if (ellenorzes(szamok)) {
      i--;
    }
  }
}

function talalatok(db) {
  let i;
  let j;
  let talalat = 0;

  for (i = 0; i < db; i++) {
    for (j = 0; j < db; j++) {
      if (tippek[i] == szamok[j]) {
        talalat++;
        break;
      }
    }
  }
  tippek = [];
  szamok = [];
  return talalat;
}

/*
 * Az alábbi függvényben nem tudom visszaállítani a fókuszt
 * a függvényt hívó szövegbeviteli mezőre
 */
function inputSkandi(inputMezo) {
  let szam = Number.parseInt(inputMezo.value);
  let azon = inputMezo.id;

  //alert("ID= " + azon + "\nTípus: " + typeof(azon));

  let mezo = document.getElementById(azon);

  if (!Number.isInteger(szam)) {
    alert("Nem egész számot írtál!");
    /*
     * Itt visszarakni a fókuszt, de valamiért egyik módszerem sem működik. :(
     */
    mezo.focus();
    document.getElementById(azon).focus();
  }
}

function sorsolSkandi(urlap) {
  let i;
  let szam;
  let azon;
  for (i = 0; i < 7; i++) {
    azon = "s" + (i + 1);
    szam = Number.parseInt(document.getElementById(azon).value);
    if (!Number.isInteger(szam)) {
      alert("A(z) " + (i + 1) + ". tipped nem egész szám!");
      document.getElementById(azon).focus();
      break;
    } else {
      if (szam < 1 || szam > 35) {
        alert("A tippnek 1-35 közöttinek kell legyen!");
        document.getElementById(azon).focus();
        break;
      } else {
        tippek[i] = szam;
      }
    }
  }
  if (ellenorzes(tippek)) {
    alert("Valamelyik számra többször is tippeltél!");
  } else {
    sorsol(7);

    tippek.sort(function (a, b) {
      return a - b;
    });
    szamok.sort(function (a, b) {
      return a - b;
    });

    document.getElementById("tippek7").innerHTML = "Tippek: " + tippek;
    document.getElementById("sorsolt7").innerHTML = "Húzott számok: " + szamok;
    document.getElementById("eredmeny7").innerHTML =
      "Találatok száma: " + talalatok(7);
  }
}

function szelvenytKeszito() {
  let szam = 1;
  let i;
  let j;
  let azon;

  for (i = 0; i < 9; i++) {
    for (j = 0; j < 10; j++) {
      azon = "mezo" + szam;
      document.getElementById("szelveny").innerHTML +=
        "<div id = " +
        azon +
        " class = mezoAlap onclick = jelol(this)>" +
        szam +
        "</div>";
      szam++;
    }
  }
}

function jelol(mezo) {
  let i;
  let j = 0;
  let szam = mezo.id.substring(4, 6);
  let seged = new Array();

  if (
    document.getElementById(mezo.id).classList.value.includes("valasztottMezo")
  ) {
    document.getElementById(mezo.id).classList.remove("valasztottMezo");

    for (i = 0; i < tippek.length; i++) {
      if (tippek[i] == szam) {
        continue;
      } else {
        seged[j] = tippek[i];
        j++;
      }
    }

    tippek = [];

    for (i = 0; i < seged.length; i++) {
      tippek[i] = seged[i];
    }
  } else {
    if (tippek.length == 5) {
      alert(
        "Már kijelölötél 5 számot.\nHa szertnéd módosítani a választásodat, akkor előbb kattints arra a számra amelyiket mégsem szeretnéd jelölni."
      );
    } else {
      document.getElementById(mezo.id).classList.add("valasztottMezo");
      tippek[tippek.length] = szam;
    }
  }
}

function bekuld() {
  if (tippek.length == 5) {
    sorsol(5);

    tippek.sort(function (a, b) {
      return a - b;
    });
    szamok.sort(function (a, b) {
      return a - b;
    });

    document.getElementById("tippek5").innerHTML = "Tippek: " + tippek;
    document.getElementById("sorsolt5").innerHTML = "Húzott számok: " + szamok;
    document.getElementById("eredmeny5").innerHTML =
      "Találatok száma: " + talalatok(5);
  } else {
    alert("Még nem jelölted ki a szükséges öt számot.");
  }
}
