/* Älä välitä tästä :) */
/* eslint-disable */

/*
 * Paina ensin yläkulman fork-nappia ja katso, että osoitepalkin
 * osoite muuttuu eikä ole enää vbogd-loppuinen.
 *
 * HUOM. Jos et ole tehnyt vielä tiliä toisen tehtävän
 * openweathermap.orgiin, tee se nyt. Tilin aktivoinnissa
 * menee muutama tunti. ->>>
 */

////////////////// A R V A U S P E L I ///////////////////

/*
 * Arvauspelissä tehtäväsi on arpoa luku esimerkiksi yhden
 * ja kymmenen väliltä ja sitten antaa käyttäjän arvata
 * numeroa kunnes hän arvaa oikein. Pelin voi myös aloittaa
 * alusta.
 *
 * Tehtävän maksimimistemäärä on 4p.
 */

/* Start-funktiota kutsutaan heti kun sivu ladataan. */
start();

/*
 * Kirjoita tähän koodi, joka arpoo satunnaisnumeron,
 * ja tallentaa sen muuttujaan. Muuttujan on hyvä sijaita
 * tämän funktion ulkopuolella, jotta se näkyy myös
 * toisessa funktiossa.
 * Math.random() on hyvä tapa tuottaa satunnaislukuja,
 * ja esimerkiksi Math.floor() on helppo tapa muodostaa
 * desimaaliluvusta kokonaisluku jättämällä desimaalit
 * pois.
 */
var random;

function start() {
  random = Math.round(Math.random() * 10);
}
/*
 * Kirjoita tähän koodi, joka ottaa arvon
 * tekstikentästä, tarkistaa onko se isompi, pienempi
 * vai oikea numero, ja antaa käyttäjälle palautteen
 * feedback-diviin. Voit lisätä palautteelle luokan
 * too-small tai too-big näyttääksesi palautteen myös
 * värinä. Tyhjennä samalla tekstikenttä uutta arvausta
 * varten.
 * Käytettäviä eri elementtejä voi hakea
 * document.getElementById()-funktiolla. Feedback-
 * elementin sisälle voi asettaa html-sisältöä innerHTML-
 * muuttujalla.
 */
function erase() {
  document.getElementById("app").reset();
}

function guessNumber() {
  console.log("Guess made");
  var a = document.getElementById("guess").value;
  console.log(random);

  if (a < 11 && a > -1) {
    if (a == random) {
      document.getElementById("feedback").innerHTML = "Correct Guess!";
      erase();
      start();
    } else {
      alert("Wrong!");
      erase();
    }
  } else alert("Invalid Number!");
}
