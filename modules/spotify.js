var client_id = "29110b23f6d14d67856438c2504dd2c4"; // Your client id
var client_secret = "66a194de8fc54b7eac48ae165ecdd09f"; // Your secret

async function getToken() {
  var access_token = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      authorization: "Basic " + btoa(client_id + ":" + client_secret),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  })
    .then((response) => response.json())
    .then((response) => response.access_token);
  return access_token;
}
async function getPage(apiUrl) {
  var access_token = await getToken();
  var page = await fetch(apiUrl, {
    method: "GET",
    headers: {
      authorization: "Bearer " + access_token
    }
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
  return page;
}

async function getPlaylist(playlistId) {
  var tracks = [];
  let apiUrl = "https://api.spotify.com/v1/playlists/" + playlistId;

  // get initial data
  let body = await getPage(apiUrl);
  apiUrl = body.tracks.next;
  tracks.push(body.tracks.items);
  delete body.tracks;
  var playlistInfo = body;

  // get all other data
  while (apiUrl) {
    body = await getPage(apiUrl);
    apiUrl = body.next;
    body.items.forEach((track) => tracks.push(track));
  }
  return [playlistInfo, tracks];
}

async function getAlbums(artistId) {
  var apiUrl =
    "https://api.spotify.com/v1/artists/" +
    artistId +
    "/albums?offset=0&limit=50&include_groups=album,single";
  let albums = [];

  while (apiUrl) {
    let body = await getPage(apiUrl);
    apiUrl = body.next;
    body.items.forEach((album) => albums.push(album));
  }
  return albums;
}

async function getAlbumTracks(albumIds) {
  var tracks = [];
  for (var i = 0; i < albumIds.length; i++) {
    var album = await getPage(
      "https://api.spotify.com/v1/albums/" + albumIds[i] + "/tracks?limit=50"
    );
    for (var j = 0; j < album.items.length; j++) {
      tracks.push(album.items[j]);
    }
  }
  return tracks;
}
async function search(query, types, limit) {
  let apiUrl =
    "https://api.spotify.com/v1/search?q=" +
    query.replace(" ", "%20") +
    "&type=" +
    types.join("%2C") +
    "&limit=" +
    limit;
  var result = await getPage(apiUrl);
  return result;
}

async function getTrack(trackId) {
  var apiUrl = "https://api.spotify.com/v1/tracks/" + trackId;
  let body = await getPage(apiUrl);
  return body;
}
async function getTrackAnalysis(trackId) {
  var apiUrl = "https://api.spotify.com/v1/audio-analysis/" + trackId;
  let body = await getPage(apiUrl);
  return body;
}

async function getArtists(artistIds) {
  var apiUrl =
    "https://api.spotify.com/v1/artists?ids=" + artistIds.join("%2C");
  let body = await getPage(apiUrl);
  return body;
}

export {
  getPlaylist,
  getAlbums,
  getAlbumTracks,
  getTrack,
  search,
  getTrackAnalysis,
  getArtists
};

// search("ed sheeran", ["artist"], 5)

// getAlbumTracks(["6uhEg4ASZYLIilZFCBFy1r", "2yXnY2NiaZk9QiJJittS81", "47Q0J5RzfzIrTd6KBYmsbK"])

// getAlbums("13y7CgLHjMVRMDqxdx0Xdo")
