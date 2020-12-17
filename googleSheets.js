/* global gapi */
async function loadSheets(sheetId, range) {
  const params = {
    // The spreadsheet to request.
    spreadsheetId: sheetId, // TODO: Update placeholder value.
    // The ranges to retrieve from the spreadsheet.
    range: range
  };

  try {
    let response = await gapi.client.sheets.spreadsheets.values.get(params);
    // TODO: Change code below to process the `response` object:
    // console.log(response.result);
    return response.result;
  } catch (reason) {
    console.error("error: " + reason.result.error.message);
  }
}

function initClient() {
  const API_KEY = "AIzaSyDawuF9w42eROUj0QS65dYr5L9OT2x6QXM"; // 授業用のキー
  // const CLIENT_ID = '746164391621-alg34oltdfg462jqfo5oeed6ih3u43c3.apps.googleusercontent.com';  // 授業用のクライアントID。本来は指定する

  // 以下の中から一つの認証スコープを指定する:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  const SCOPE = "https://www.googleapis.com/auth/drive.readonly";

  gapi.client
    .init({
      apiKey: API_KEY,
      // clientId: CLIENT_ID, // 本来は指定する必要があるが、授業では指定しない。
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(function () {
      console.log("Google sheets API was initialized.");
    });
}

function handleClientLoad() {
  gapi.load("client", initClient);
  //gapi.load('client:auth2', initClient);
}

