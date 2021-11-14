/* eslint-env jquery */

//console.log("initialized: " + localStorage.getItem("initialized"));
if (localStorage.getItem("initialized") === undefined) {
  localStorage.setItem("initialized", false);
  localStorage.setItem("componentsLoaded", false);
}

window.sections = [
  "inicio",
  "biografia",
  "filmografia",
  "fotografia",
  "docencia",
  "contacto",
  "nosotrxs"
];

window.includeCSS = function (filename) {
  return new Promise((resolve, reject) => {
    var head = document.getElementsByTagName("head")[0];

    var style = document.createElement("link");
    style.href = filename;
    style.type = "text/css";
    style.rel = "stylesheet";
    head.append(style);
    resolve();
  });
};

window.includeJS = function (filename) {
  return new Promise((resolve, reject) => {
    var head = document.getElementsByTagName("head")[0];

    var script = document.createElement("script");
    script.src = filename;
    script.type = "text/javascript";
    head.append(script);
    resolve();
  });
};

window.includeHTML = function (target, filename, data) {
  return new Promise((resolve, reject) => {
    $(target).load(filename, function (response, status, xhr) {
      if (status == "error") {
        var msg = "Sorry but there was an error: ";
        $("#error").html(msg + xhr.status + " " + xhr.statusText);
        reject();
      }

      if (filename.indexOf("film-card") > -1) {
        console.log("************************");
        console.log("************************");
        console.log(target.getAttribute("film-name"));
        console.log("");
        console.log("************************");
        console.log("************************");
        $(".movieTitle", target).html(data["filmName"]);
        $(".movieYear", target).html(data["filmYear"]);
        $(".movieDesc", target).html(data["filmDesc"]);
        $(".movieLink", target).html(data["filmLink"]);
        $(".movieImg", target).attr("src", data["filmImg"]);
      }
      resolve();
    });
  });
};

window.loadSection = function (section) {
  console.log("===== [loadSection] =====");
  return new Promise((resolve, reject) => {
    var sectionTitleContainer, sectionContainer, file;
    sectionContainer = document.getElementById("section-container");
    sectionTitleContainer = document.getElementById("section-title");
    //console.log("sectionTitleContainer: " + sectionTitleContainer);
    console.log("Loading section: " + section);
    $(document).attr("title", "John Waters | " + section);
    file = section + ".html";
    let sectionTitle = section.trim().replace(/^\w/, (c) => c.toUpperCase());
    sectionTitleContainer.innerHTML = sectionTitle;
    let stylesheetName = "css/" + file.slice(0, file.length - 5) + ".css";
    console.log("stylesheetName: " + stylesheetName);
    $.when(includeCSS(stylesheetName)).done(() => {
      let scriptname = "../js/" + file.slice(0, file.length - 5) + ".js";
      console.log("scriptname: " + scriptname);
      $.when(includeJS(scriptname)).done(() => {
        let htmlname = "../sections/" + file;
        console.log("htmlname: " + htmlname);
        $.when(includeHTML(sectionContainer, htmlname)).done(() => {
          console.log("===== [loadSection] =====");
          resolve();
        });
      });
    });
  });
};

window.loadComponents = function () {
  return new Promise((resolve, reject) => {
    var allComponents,
      i,
      elmnt,
      file,
      data = [];
    allComponents = $("[include-component]");
    for (i = 0; i < allComponents.length; i++) {
      //console.log("Elemento N°" + i);
      elmnt = allComponents[i];
      //console.log(elmnt);
      file = elmnt.getAttribute("include-component");
      //console.log("file: " + file);
      if (file) {
        if (file.indexOf("film-card") > -1) {
          console.log("WORKING ON FILM CARD");
          console.log(data);
          data["filmName"] = elmnt.getAttribute("film-name");
          data["filmYear"] = elmnt.getAttribute("film-year");
          data["filmDesc"] = elmnt.getAttribute("film-desc");
          data["filmLink"] = elmnt.getAttribute("film-link");
          data["filmImg"] = elmnt.getAttribute("film-img");
        }
        let stylesheetName = "css/" + file.slice(0, file.length - 5) + ".css";
        //console.log("stylesheetName: " + stylesheetName);
        includeCSS(stylesheetName);

        let scriptname = "../js/" + file.slice(0, file.length - 5) + ".js";
        //console.log("scriptname: " + scriptname);
        includeJS(scriptname);

        let htmlname = "../components/" + file;
        //console.log("htmlname: " + htmlname);
        includeHTML(elmnt, htmlname, data);
      }
    }

    localStorage.setItem("componentsLoaded", true);
    resolve();
  });
};

// Si la pagina termino de cargar, ejecutamos la carga de los componentes
$(document).ready(function () {
  console.log("[includeHTML]");

  // Log Initial State
  if (!localStorage.getItem("initialized")) {
    console.log("[Inicializando...]");

    // Establish Variables
    var State = History.getState(),
      $log = $("#log");
    History.log("initial:", State.data, State.title, State.url);

    // Bind to State Change
    History.Adapter.bind(window, "statechange", function () {
      // Note: We are using statechange instead of popstate
      // Log the State
      History.log("statechange:", State.data, State.title, State.url);
    });
    localStorage.setItem("initialized", true);
  }
  console.log("[Continue...]");
  $.when(loadComponents()).done(() => {
    let section = $(location)[0].pathname.replace("/", "");
    //console.log(section);
    if (!section) {
      section = "inicio";
    }
    if (sections.indexOf(section) > -1) {
      //console.log("la seccion " + section + " SI existe");
    } else {
      //console.log("la seccion " + section + " no existe");
      section = "404";
    }
    $.when(loadSection(section)).done(() => {
      resolve();
    });
  });
});
