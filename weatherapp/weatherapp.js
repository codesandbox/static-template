/* Älä välitä tästä :) */
/* eslint-disable */

///////////// P Ä I V Ä N  S Ä Ä ///////////////
// JAA MÄÄ VAI?

/*
 * Päivän sää -applikaatiossa tehtäväsi on hakea
 * säätiedot openweather-palvelusta ja näyttää ne
 * ruudulla.
 * 1. Tee aluksi ilmainen tili openweathermap.org-sivulle
 * ja hae oma API-avaimesi osoitteesta
 * https://home.openweathermap.org/api_keys. API-avaimen
 * aktivointiin menee muutama tunti, joten tee tämä
 * ajoissa!
 *
 * 2. Voit kokeilla APIa (https://openweathermap.org/current)
 * esimerkiksi https://apitester.com/ -palvelussa. Kun API
 * toimii, voit aloittaa tehtävän teon.
 */

/*
 * 3. (6p) Hae ensin API-kutsun avulla säätiedot haluamallesi
 * paikkakunnalle. Toteuta haku niin, että se tehdään
 * esimerkiksi minuutin välein.
 * Hakuun voit käyttää javascriptin fetch-toiminnallisuutta,
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch,
 * ja ajastimen voit käynnistää setinterval()-funktiolla:
 * https://www.w3schools.com/jsref/met_win_setinterval.asp.
 * Jos käynnistät toisen haun eri hakuparametreilla,
 * voit pysäyttää edellisen ajastimen clearinterval-funktiolla.
 * Parsi vastaus JSON.parse()-funktiolla ja syötä seuraavaan osioon.
 */
function fetchWeatherData() {}

/* 
 * Muotoile haluamasi säätiedot #weather-elementtiin. Voit käyttää
 * html:n tuottamiseen esimerkiksi javascriptin template literalia:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
function renderWeatherData(weatherData) {}

/*
 * 5. (2p) Tee HTML-sivulle tapa valita toinen kaupunki. Se voi olla
 * esimerkiksi dropdown-valitsin, jossa on muutama eri paikka.
 * Paikat voivat olla vaikka paikkakuntia tai tarkempia sijainteja
 * koordinaatteina, jos tahdot. Kirjoita alle funktio, joka ottaa
 * käsittelee paikan muuttumisen ja käynnistä funktio html-eventistä.
 */
function selectLocation() {}

/*
 * 6. (BONUS: 4p) Toteuta sivulle paikannus geolocation-APIlla:
 * https://www.w3schools.com/html/html5_geolocation.asp. Tee
 * sivulle paikannusnappi, joka käynnistää sijainnin määrittämisen.
 * Voit käyttää paikannusta myös ensimmäisen säätietokutsun tekoon
 * jos tahdot.
 */
function getLocation() {}
