const hideMenuBar = (show) => {
  const array = [
    ".header",
    ".main",
    ".button.flatButton.menu.landscapeMenuBtn",
    ".algebraPanel.customScrollbar.tab"
  ];
  if (show) {
    for (const className of array) {
      const element = document.querySelector(className);
      if (element) {
        element.classList.remove("hide");
      }
    }
  } else {
    for (const className of array) {
      const element = document.querySelector(className);
      if (element) {
        element.classList.add("hide");
      }
    }
  }
};

const fullscreen = (full) => {
  const element = document.querySelector(".undoRedoPanel");
  if (full) {
    element.classList.add("fullscreen");
  } else {
    element.classList.remove("fullscreen");
  }
};

let xml = "";
let canvas = "";
// let xmin, xmax, ymin, ymax;
let sx, sy, w, h;
const user_language = window.navigator.language;
function viewChanged2D(e) {
  if (e.type == "viewChanged2D") {
    w = canvas.width / 100 / 2;
    h = canvas.height / 100 / 2;
    const xZero = e.xZero / 100;
    const yZero = e.yZero / 100;
    sx = 100 / e.scale;
    sy = 100 / e.yscale;
    // xmax = w * sx - xZero * sx * 1;
    // xmin = -xZero * sx * 1;
    // ymax = -(h * sy - yZero * sy * 1);
    // ymin = yZero * sy * 1;
  }
}
var params = {
  appName: "graphing",
  width: window.innerWidth,
  height: window.innerHeight,
  showAlgebraInput: true,
  showMenuBar: true,
  language: user_language,
  appletOnLoad: function (api) {
    if (xml) {
      ggbApplet.setXML(xml);
    } else {
      ggbApplet.setGridVisible(false);
    }
    hideMenuBar(false);
    canvas = document.querySelector(".EuclidianPanel canvas");
    ggbApplet.registerClientListener("viewChanged2D");
  }
};

var applet = new GGBApplet(params, true);
window.addEventListener("load", function () {
  applet.inject("ggb-element");
});

function resizeWindow() {
  ggbApplet.setSize(window.innerWidth, window.innerHeight);
}
window.onresize = resizeWindow;

window.addEventListener("message", function (event) {
  switch (event.data.type) {
    case "file_upload":
      ggbApplet.setPerspective("G");
      ggbApplet.exportSVG((svg) => {
        if (typeof svg === "string" || svg instanceof String) {
          const xml = ggbApplet.getXML();
          window.parent.postMessage({ svg: svg, xml: xml }, "*");
        }
      });
      break;
    case "hide_source":
      hideMenuBar(!event.data.toggle);
      break;
    case "fullscreen":
      if (!event.data.toggle) {
        ggbApplet.setPerspective("G");
        fullscreen(true);
      } else {
        ggbApplet.setPerspective("AG");
        fullscreen(false);
      }
      break;
    case "center_focus_weak":
      const w2 = (w * sx) / 2;
      const h2 = (h * sy) / 2;
      ggbApplet.setCoordSystem(-w2, w2, -h2, h2);
      break;
    case "xml":
      xml = event.data.xml;
      break;
    default:
      break;
  }
  // ggbApplet.setSize(480, 320);
  // ggbApplet.setPerspective("G");
  // ggbApplet.setCoordSystem(-4, 4, -4, 4);
});
