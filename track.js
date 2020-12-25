import { getTrack, getTrackAnalysis, getArtists } from "./modules/spotify.js";

async function getDatabase() {
  var database = await fetch(
    "https://spreadsheets.google.com/feeds/list/1JOm_qfQpljX4OS7dfq1eKKWlwjzeZJ_i9dDWKp9j-Uk/od6/public/values?alt=json",
    {
      method: "GET"
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
  return database.feed.entry;
}
async function getFlatId(spotifyId) {
  var database = await getDatabase();
  for (var i = 0; i < database.length; i++) {
    if (database[i].gsx$spotifyid.$t == spotifyId) {
      return database[i].gsx$flatid.$t;
    }
  }
}

var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("track"));

async function getData() {
  let [track, trackAnalysis] = await Promise.all([
    getTrack(urlParams.get("track")),
    getTrackAnalysis(urlParams.get("track"))
  ]);
  track.trackAnalysis = trackAnalysis;
  // get artist ids
  var artistIds = [];
  for (var i = 0; i < track.artists.length; i++) {
    artistIds.push(track.artists[i].id);
  }
  // get artist data
  var artists = await getArtists(artistIds);
  // add artist data to track
  track.artists = artists.artists;
  return track;
}

async function changeDOM() {
  var track = await getData();
  console.log(track);

  let note = (function note(value) {
    return value == 0
      ? "C"
      : value == 1
      ? "C#"
      : value == 2
      ? "D"
      : value == 3
      ? "D#"
      : value == 4
      ? "E"
      : value == 5
      ? "F"
      : value == 6
      ? "F#"
      : value == 7
      ? "G"
      : value == 8
      ? "G#"
      : value == 9
      ? "A"
      : value == 10
      ? "A#"
      : value == 11
      ? "B"
      : "";
  })(track.trackAnalysis.track.key);

  let mode = (function mode(value) {
    return value == 0 ? " Minor" : value == 1 ? " Major" : "";
  })(track.trackAnalysis.track.mode);

  document.querySelector("#key").innerHTML = note + mode;
  document.querySelector("#tempo").innerHTML =
    Math.round(track.trackAnalysis.track.tempo) + " bpm";
  document.querySelector("#album-name").innerHTML = track.album.name;
  document.querySelector("#name").innerHTML = track.name;
  document.querySelector("#album-art").src = track.album.images[0].url;

  track.artists.forEach((artist) => {
    let newElement = document.createElement("li");
    newElement.setAttribute("style", "list-style: none; display: inline-block");
    newElement.innerHTML = `<img src="${artist.images[0].url}" style="border-radius: 50%; width: 120px; height: 120px"><p style=" text-align: center;">${artist.name}</p>`;
    document.querySelector("#artists").appendChild(newElement);
  });

  // popularity
  google.charts.load("current", {
    packages: ["gauge"]
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Label", "Value"],
      ["Popularity", track.popularity]
    ]);

    var options = {
      width: 100,
      height: 100,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5
    };
    var chart = new google.visualization.Gauge(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }

  var container = document.getElementById("embed-container");
  var embed = new Flat.Embed(container, {
    embedParams: {
      appId: "5fe56705315dc443c12fb489",
      controlsPosition: "bottom",
      displayFirstLinePartsNames: false,
      branding: false,
      hideTempo: true
    }
  });

  // Loading any plain XML file here, for a file example from a public Flat score
  fetch(
    `https://raw.githubusercontent.com/kishansripada/musicxml/main/musicxml/${encodeURI(
      track.name
    )}.xml`
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (mxl) {
      // Got the plain XML score as an `String`, load it in the embed
      return embed.loadMusicXML(mxl);
    })
    .then(function () {
      // Score loaded in the embed
    })
    .catch(function (error) {
      // Unable to load the score
    });
}

changeDOM();
