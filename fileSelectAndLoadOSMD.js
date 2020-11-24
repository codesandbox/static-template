function handleFileSelect(evt) {
  var maxOSMDDisplays = 10; // how many scores can be displayed at once (in a vertical layout)
  var files = evt.target.files; // FileList object
  var osmdDisplays = Math.min(files.length, maxOSMDDisplays);

  var output = [];
  for (var i = 0, file = files[i]; i < osmdDisplays; i++) {
    output.push("<li><strong>", escape(file.name), "</strong> </li>");
    output.push("<div id='osmdCanvas" + i + "'/>");
  }
  document.getElementById("list").innerHTML =
    "<ul>" + output.join("") + "</ul>";

  for (var i = 0, file = files[i]; i < osmdDisplays; i++) {
    if (!file.name.match(".*.xml") && !file.name.match(".*.musicxml")) {
      alert("You selected a non-xml file. Please select only music xml files.");
      continue;
    }

    var reader = new FileReader();

    reader.onload = (function (theFile) {
      return function (e) {
        var openSheetMusicDisplay = new opensheetmusicdisplay.OpenSheetMusicDisplay(
          "osmdCanvas",
          {
            // set options here
            backend: "svg",
            drawFromMeasureNumber: 1,
            drawUpToMeasureNumber: Number.MAX_SAFE_INTEGER // draw all measures, up to the end of the sample
          }
        );
        openSheetMusicDisplay.load(e.target.result).then(function () {
          window.osmd = openSheetMusicDisplay; // give access to osmd object in Browser console, e.g. for osmd.setOptions()
          //console.log("e.target.result: " + e.target.result);
          openSheetMusicDisplay.render();
          // osmd.cursor.show(); // this would show the cursor on the first note
          // osmd.cursor.next(); // advance the cursor one note
        });
      };
    })(file);
    reader.readAsText(file);
  }
}

document
  .getElementById("files")
  .addEventListener("change", handleFileSelect, false);
