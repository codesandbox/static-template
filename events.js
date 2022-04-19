var plyrPlayers = {};

function addEvents(grid, id) {
  let g = id !== undefined ? "grid" + id + " " : "";

  grid.on("added", function (e, items) {
    console.log("added");
    var str = "";
    //console.log(' ' + e.type + ' ' + items.length + ' items:' + str );
    //console.log('Before Items: ', items)
    items.forEach(function (item) {
      console.log("clasess", item.el.classList);
      var classes = item.el.classList;

      str += " (x,y)=" + item.x + "," + item.y;
      var Id = Math.floor(Math.random() * 4);

      if (classes.contains("video-grid-stack-item")) {
        item.el.innerHTML =
          '<div class="grid-stack-item-content" style="padding: 0px;" id=customchart' +
          Id +
          '><iframe width="100%" height="100%"  src="https://www.youtube-nocookie.com/embed/BRGwCgfS4Qk?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
      } else if (classes.contains("plyr-grid-stack-item")) {
        //  block of code to be executed if the condition1 is false and condition2 is true
        item.el.innerHTML =
          '<div class="grid-stack-item-content style-1" id=customchart' +
          Id +
          '><button onClick="player.togglePlay()">X</button><br><div id="player' +
          Id +
          '" data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div></div></div>';
        /*style="top: 50%;bottom: 50%;"
                <div class="grid-stack-item">
        <div class="grid-stack-item-content style-1">
            <button onClick="player.togglePlay()">X</button><br>
          <div
            id="player"
            
            data-plyr-provider="youtube"
            data-plyr-embed-id="bTqVqk7FSmY"
          ></div></div>
      </div>
          
          */
        plyrPlayers[Id] = new Plyr("#player" + Id, {});

        // Expose player so it can be used from the console
        window.player[Id] = plyrPlayers[Id];
      } else if (classes.contains("photo-grid-stack-item")) {
        //  block of code to be executed if the condition1 is false and condition2 is true
        item.el.innerHTML =
          '<div class="grid-stack-item-content" id=customchart' +
          Id +
          '><img src="https://placeimg.com/100/100/animals" alt="michi" style="width:100%;vertical-align: middle;/*height:100%;*/"/></div>';

        /*
                <div class="grid-stack-item" gs-w="4" gs-h="2" gs-min-w="3">
        <div class="grid-stack-item-content"><br><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/BRGwCgfS4Qk?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
          
          */
      } else if (classes.contains("text-grid-stack-item")) {
        //  block of code to be executed if the condition1 is false and condition2 is true

        var myIdentifier = "editor" + Id;
        var dou =
          `<div class="grid-stack-item-content" id=customchart` +
          Id +
          ` style="display: block;">
          <div id="` +
          myIdentifier +
          `" style="z-index: 300;">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br></p>
          </div></div>`;

        item.el.innerHTML = dou;
        var quill = new Quill("#" + myIdentifier, {
          theme: "snow"
        });

        /*
                <div class="grid-stack-item" gs-w="4" gs-h="2" gs-min-w="3">
        <div class="grid-stack-item-content"><br><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/BRGwCgfS4Qk?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
          
          */
      } else {
        //  block of code to be executed if the condition1 is false and condition2 is true
      }
      //console.log("Chart ID: ", Id)
      //item.el.innerHTML = '<div class="chart-wrapper"><div class="chart-title"><h3>Orion Disk Utilization</h3></div><div class="chart-stage"><canvas id=customchart' + Id + '></canvas></div></div>'

      //var canvas = $("#customchart" + Id);
      //console.log("Chart Obj: ", canvas)
      //var canvas_context = canvas[0].getContext('2d')
      /*
    var chart = new Chart(canvas_context, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor: [
            "blue",
            "grey",
          ],
        }]
      },
      options: chart_options
    });
    */
      //console.log("Chart Type: ", chart_type);
      //console.log("Chart Data: ", chart_data);
      //console.log("Chart Options: ", chart_options);
    });
    //console.log('After Items: ', items)
    if (e.type == "added") {
      console.log("Adding a thing!");
    }
  });
  grid.on("added removed change", function (event, items) {
    let str = "";
    items.forEach(function (item) {
      str += " (" + item.x + "," + item.y + " " + item.w + "x" + item.h + ")";
    });
    console.log(
      g + event.type + " " + items.length + " items (x,y w h):" + str
    );
  });

  grid.on("enable", function (event) {
    let grid = event.target;
    console.log(g + "enable");
  });

  grid.on("disable", function (event) {
    let grid = event.target;
    console.log(g + "disable");
  });

  grid.on("dragstart", function (event, el) {
    let node = el.gridstackNode;
    let x = el.getAttribute("gs-x"); // verify node (easiest) and attr are the same
    let y = el.getAttribute("gs-y");
    console.log(
      g +
        "dragstart " +
        el.textContent +
        " pos: (" +
        node.x +
        "," +
        node.y +
        ") = (" +
        x +
        "," +
        y +
        ")"
    );
  });

  grid.on("drag", function (event, el) {
    let node = el.gridstackNode;
    let x = el.getAttribute("gs-x"); // verify node (easiest) and attr are the same
    let y = el.getAttribute("gs-y");
    // console.log(g + 'drag ' + el.textContent + ' pos: (' + node.x + ',' + node.y + ') = (' + x + ',' + y + ')');
  });

  grid.on("dragstop", function (event, el) {
    let node = el.gridstackNode;
    let x = el.getAttribute("gs-x"); // verify node (easiest) and attr are the same
    let y = el.getAttribute("gs-y");
    console.log(
      g +
        "dragstop " +
        el.textContent +
        " pos: (" +
        node.x +
        "," +
        node.y +
        ") = (" +
        x +
        "," +
        y +
        ")"
    );
  });

  grid.on("dropped", function (event, previousWidget, newWidget) {
    if (previousWidget) {
      console.log(g + "dropped - Removed widget from grid:", previousWidget);
    }
    if (newWidget) {
      console.log(g + "dropped - Added widget in grid:", newWidget);
    }
  });

  grid.on("resizestart", function (event, el) {
    let node = el.gridstackNode;
    let w = el.getAttribute("gs-w"); // verify node (easiest) and attr are the same
    let h = el.getAttribute("gs-h");
    console.log(
      g +
        "resizestart " +
        el.textContent +
        " size: (" +
        node.w +
        "x" +
        node.h +
        ") = (" +
        w +
        "x" +
        h +
        ")"
    );
  });

  grid.on("resize", function (event, el) {
    let node = el.gridstackNode;
    let w = el.getAttribute("gs-w"); // verify node (easiest) and attr are the same
    let h = el.getAttribute("gs-h");
    // console.log(g + 'resize ' + el.textContent + ' size: (' + node.w + 'x' + node.h + ') = (' + w + 'x' + h + ')');
  });

  grid.on("resizestop", function (event, el) {
    let node = el.gridstackNode;
    let w = el.getAttribute("gs-w"); // verify node (easiest) and attr are the same
    let h = el.getAttribute("gs-h");
    console.log(
      g +
        "resizestop " +
        el.textContent +
        " size: (" +
        node.w +
        "x" +
        node.h +
        ") = (" +
        w +
        "x" +
        h +
        ")"
    );
  });
}
