// Element     : HRWINDOW
// Script type : global
// Created by  : FMATHALF

var temoin;

var bLoaded = false;
var aLoaded = false;

var cMotifA = "#FF8080";
var cMotifB = "#80FF80";
var cMotifC = "#ff80ff";
var cMotifD = "#80ffff";
var cMotifE = "#4180ff";
var cMotifFG = "#d3d3d3";
//_____________________________________________________________________

function writeInLog() {
  var aArgs = writeInLog.arguments;

  for (var i = 0; i < aArgs.length; i++) {
    window.DataAccess.trace(aArgs[i]);
  }
}

//_____________________________________________________________________

function createDate(d, m, y) {
  var oDate = new Date(y, m - 1, d);
  return oDate;
}

//_____________________________________________________________________
// Cette fct permet la création des absence par demi journée pour le planning par mois
function createAbs(tChar, day) {
  for (var i = 0; i < 2; i++) {
    var dDay = tChar.charAt(i);

    if (dDay == "A" && i == 0) day.amColor = cMotifA;

    if (dDay == "A" && i == 1) day.pmColor = cMotifA;

    if (dDay == "B" && i == 0) day.amColor = cMotifB;

    if (dDay == "B" && i == 1) day.pmColor = cMotifB;

    if (dDay == "C" && i == 0) day.amColor = cMotifC;

    if (dDay == "C" && i == 1) day.pmColor = cMotifC;

    if (dDay == "D" && i == 0) day.amColor = cMotifD;

    if (dDay == "D" && i == 1) day.pmColor = cMotifD;

    if (dDay == "E" && i == 0) day.amColor = cMotifE;

    if (dDay == "E" && i == 1) day.pmColor = cMotifE;
  }
}
// Cette fct permet la création des absence par demi journée pour le planning par année
function createAbsAn(tChar, absPlann, month, day) {
  //window.alert("day="+day+"****month="+month);
  for (var i = 0; i < 2; i++) {
    var dDay = tChar.charAt(i);

    if (dDay == "A" && i == 0)
      absPlann.setAbsence(month, day, true, false, cMotifA);

    if (dDay == "A" && i == 1)
      absPlann.setAbsence(month, day, false, true, cMotifA);

    if (dDay == "B" && i == 0)
      absPlann.setAbsence(month, day, true, false, cMotifB);

    if (dDay == "B" && i == 1)
      absPlann.setAbsence(month, day, false, true, cMotifB);

    if (dDay == "C" && i == 0)
      absPlann.setAbsence(month, day, true, false, cMotifC);

    if (dDay == "C" && i == 1)
      absPlann.setAbsence(month, day, false, true, cMotifC);

    if (dDay == "D" && i == 0)
      absPlann.setAbsence(month, day, true, false, cMotifD);

    if (dDay == "D" && i == 1)
      absPlann.setAbsence(month, day, false, true, cMotifD);

    if (dDay == "E" && i == 0)
      absPlann.setAbsence(month, day, true, false, cMotifE);

    if (dDay == "E" && i == 1)
      absPlann.setAbsence(month, day, false, true, cMotifE);
  }
}

//_____________________________________________________________________

function Load() {
  // jours de début, de fin et courrant
  var dtBeginDate, dtEndDate, dtCurDate;
  // Année et mois saisis dans le formulaire en string
  var stYear0, stMonth0;
  // Année et mois saisis dans le formulaire convertis en nombre
  var stYear, stMonth;
  // Motifs saisis dans le formulaire
  var stMotifA, stMotifB, stMotifC, stMotifD, stMotifE;

  var oDate;
  var iNbDay;
  var oFreeModel;

  var stPersonne, oPersonne, stPersonne_identi, stPersonne_nom;
  var oDay, iRang;
  var i, j, iCount;
  var oRsrc;
  var wMois, wDay;
  var wBissextile;
  var resourceTmp;

  var cell = new PlanningDayModel("DayModel");
  cell.upCellColor = true;
  cell.downCellColor = false;
  cell.upCellContent = PlanningDayModel.CONTENT.NONE;
  cell.downCellContent = PlanningDayModel.CONTENT.NONE;

  var view = new View("View");
  view.addDayModel(cell);

  //Create the planning
  var planningTest = new Planning("ctrlPlanning");

  //set the language

  //  planningTest.setLanguage("F");
  var codLang = hrGetConnectionLanguage();
  planningTest.setLanguage(codLang);

  // Récupération du mois et de l'année de traitement
  stYear0 = hrGetParamValue("ZY1EANNEE");
  stMonth0 = hrGetParamValue("ZY1EMOIS");
  stYear = parseInt(stYear0, 10);
  stMonth = parseInt(stMonth0, 10);

  bLoaded = false;
  if (
    hrGetDossierCount() != 0 &&
    stYear0 != "" &&
    stMonth0 != "" &&
    stMonth0 != 00
  ) {
    bLoaded = true;
    // Constitution du jour de début et du jour de fin
    dtBeginDate = 1;
    if (
      stMonth0 == "1" ||
      stMonth0 == "01" ||
      stMonth0 == "3" ||
      stMonth0 == "03" ||
      stMonth0 == "5" ||
      stMonth == "05" ||
      stMonth0 == "7" ||
      stMonth0 == "07" ||
      stMonth0 == "8" ||
      stMonth0 == "08" ||
      stMonth0 == "10" ||
      stMonth0 == "12"
    )
      dtEndDate = 31;

    if (
      stMonth0 == "4" ||
      stMonth0 == "04" ||
      stMonth0 == "6" ||
      stMonth0 == "06" ||
      stMonth0 == "9" ||
      stMonth0 == "09" ||
      stMonth0 == "11"
    )
      dtEndDate = 30;

    if (stMonth0 == "2" || stMonth0 == "02") {
      // Vérification si l'année en cours de traitement est une année bissextile.
      wBissextile = stYear / 4 - Math.floor(stYear / 4);
      if (wBissextile == 0) dtEndDate = 29;
      if (wBissextile > 0) dtEndDate = 28;
    }

    // Récupération des codes motif d'absences
    stMotifA = hrGetParamValue("ZY1EMOTIFA");
    stMotifB = hrGetParamValue("ZY1EMOTIFB");
    stMotifC = hrGetParamValue("ZY1EMOTIFC");
    stMotifD = hrGetParamValue("ZY1EMOTIFD");
    stMotifE = hrGetParamValue("ZY1EMOTIFE");

    if (dtBeginDate != 0 && dtEndDate != 0) {
      // Calcul du nombre de jour
      iNbDay = dtEndDate - dtBeginDate + 1;
    }

    // Déclaration des differents motifs d'absence
    //legend
    var legend = new PlanningLegend();
    legend.addElement(hrLoadString("MOTIFA"), cMotifA);
    legend.addElement(hrLoadString("MOTIFB"), cMotifB);
    legend.addElement(hrLoadString("MOTIFC"), cMotifC);
    legend.addElement(hrLoadString("MOTIFD"), cMotifD);
    legend.addElement(hrLoadString("MOTIFE"), cMotifE);
    planningTest.legend = legend;

    // On traite tous les dossiers de la population courante
    for (iRang = 0; iRang < hrGetDossierCount(); iRang++) {
      stPersonne_nom = hrGetValue("ZY3YNMPRES", 0, iRang);
      stPersonne_identi = hrGetNudoss(iRang);
      stPersonne = stPersonne_nom;

      wMois = hrGetValue("ZYV2ZONUXX", 0, iRang);
      // window.alert("wMois"+wMois);

      // Ajout d'un élément dans la collection de Ressource
      // Ajout d'une personne dans le tableau

      resourceTmp = new Resource(stPersonne_identi, stPersonne);
      dtCurDate = dtBeginDate;
      i = 0;
      j = 0;

      while (dtCurDate <= dtEndDate && wMois != "") {
        wDay = wMois.substr(j, 2);
        //wMois.charAt(i);
        i = i + 1;
        j = j + 2;
        //   window.alert("wDay="+wDay);

        var day = new PlanningDay(i, stMonth, stYear);
        createAbs(wDay, day);
        resourceTmp.pushDay(day);
        //  }

        dtCurDate = dtCurDate + 1;
      } // fin du while
      view.pushResource(resourceTmp);
      planningTest.addView(view);
    } // fin du for

    planningTest.setABSPlanning(true, "week");
    //planningTest.planningBanner='week';
    planningTest._date_format = "DD";
    planningTest.compacted = true;
    planningTest.setNbOfDisplayDays(dtEndDate);
    var dte = "01/" + stMonth + "/" + stYear;
    planningTest.setDisplayPeriodByDay(dte);
    planningTest.print();

    temoin = 0;
  } //  fin du if ((hrGetDossierCount() != 0 ) && (stYear != "") && ...
} // fin de la fonction

//_____________________________________________________________________

function Load2() {
  var dtBeginDate, dtEndDate, dtCurDate;
  var stYear, Month_i;
  var stYear0;

  var stMotifA, stMotifB, stMotifC, stMotifD, stMotifE;
  var iNbDay;
  var oFreeModel;

  var oMonth;
  var oDay, iNudoss;
  var i, j;
  var oRsrc;
  var wMois, wDay;
  var month_lib, stMonth_Year;

  var wBissextile;
  var dtDayPlus;

  // Récupération de l'année de traitement

  stYear0 = hrGetParamValue("ZY1EANNEE");
  stYear = parseInt(stYear0, 10);

  //dayModel
  var cell2 = new PlanningDayModel("DayModel");
  cell2.upCellColor = true;
  cell2.downCellColor = false;
  cell2.upCellContent = PlanningDayModel.CONTENT.NONE;
  cell2.downCellContent = PlanningDayModel.CONTENT.NONE;

  //Create the planning
  var ctrlPlanning2 = new AbsencePlanning("ctrlPlanning2");
  ctrlPlanning2.setYear(stYear);
  //set the language
  var codLang1 = hrGetConnectionLanguage();
  ctrlPlanning2.setLanguage(codLang1);

  ctrlPlanning2.createRessources(cell2);
  ctrlPlanning2.createNWDay();
  ////*******************************************
  aLoaded = false;
  if (hrGetDossierCount() != 0 && stYear0 != "") {
    aLoaded = true;

    var year = {
      january: hrGetValue("ZYV2ZONU01"),
      febrary: hrGetValue("ZYV2ZONU02"),
      march: hrGetValue("ZYV2ZONU03"),
      april: hrGetValue("ZYV2ZONU04"),
      may: hrGetValue("ZYV2ZONU05"),
      june: hrGetValue("ZYV2ZONU06"),
      july: hrGetValue("ZYV2ZONU07"),
      august: hrGetValue("ZYV2ZONU08"),
      september: hrGetValue("ZYV2ZONU09"),
      october: hrGetValue("ZYV2ZONU10"),
      november: hrGetValue("ZYV2ZONU11"),
      december: hrGetValue("ZYV2ZONU12")
    };

    for (Month_i = 1; Month_i < 13; Month_i++) {
      var Month_lib;
      if (Month_i == 1) {
        stMonth_Year = hrGetValue("ZYV2ZONU01");
        dtCurDate = 01;
        dtEndDate = 31;
        // window.alert("ZYV2ZONU01"+stMonth_Year);
      }

      if (Month_i == 2) {
        stMonth_Year = hrGetValue("ZYV2ZONU02");
        dtCurDate = 01;

        wBissextile = stYear / 4 - Math.floor(stYear / 4);
        if (wBissextile == 0) dtEndDate = 29;
        if (wBissextile > 0) dtEndDate = 28;

        // window.alert("ZYV2ZONU02"+stMonth_Year);
      }

      if (Month_i == 3) {
        stMonth_Year = hrGetValue("ZYV2ZONU03");
        dtCurDate = 01;
        dtEndDate = 31;

        //  window.alert("ZYV2ZONU03"+stMonth_Year);
      }

      if (Month_i == 4) {
        stMonth_Year = hrGetValue("ZYV2ZONU04");
        dtCurDate = 01;
        dtEndDate = 30;
        //    window.alert("ZYV2ZONU04"+stMonth_Year);
      }

      if (Month_i == 5) {
        stMonth_Year = hrGetValue("ZYV2ZONU05");
        dtCurDate = 01;
        dtEndDate = 31;
        //    window.alert("ZYV2ZONU05"+stMonth_Year);
      }

      if (Month_i == 6) {
        stMonth_Year = hrGetValue("ZYV2ZONU06");
        dtCurDate = 01;
        dtEndDate = 30;
        //    window.alert("ZYV2ZONU06"+stMonth_Year);
      }

      if (Month_i == 7) {
        stMonth_Year = hrGetValue("ZYV2ZONU07");
        dtCurDate = 01;
        dtEndDate = 31;
        //  window.alert("ZYV2ZONU07"+stMonth_Year);
      }

      if (Month_i == 8) {
        stMonth_Year = hrGetValue("ZYV2ZONU08");
        dtCurDate = 01;
        dtEndDate = 31;
        //   window.alert("ZYV2ZONU08"+stMonth_Year);
      }

      if (Month_i == 9) {
        stMonth_Year = hrGetValue("ZYV2ZONU09");
        dtCurDate = 01;
        dtEndDate = 30;
        //    window.alert("ZYV2ZONU09"+stMonth_Year);
      }

      if (Month_i == 10) {
        stMonth_Year = hrGetValue("ZYV2ZONU10");
        dtCurDate = 01;
        dtEndDate = 31;
        //   window.alert("ZYV2ZONU10"+stMonth_Year);
      }

      if (Month_i == 11) {
        stMonth_Year = hrGetValue("ZYV2ZONU11");
        dtCurDate = 01;
        dtEndDate = 30;
        // window.alert("ZYV2ZONU11"+stMonth_Year);
      }

      if (Month_i == 12) {
        stMonth_Year = hrGetValue("ZYV2ZONU12");
        dtCurDate = 01;
        dtEndDate = 31;
        //    window.alert("ZYV2ZONU12"+stMonth_Year);
      }

      var i = 0;
      var j = 0;

      while (dtCurDate <= dtEndDate && wMois != "") {
        wDay = stMonth_Year.substr(j, 2);
        i = i + 1;
        j = j + 2;
        // window.alert("dtCurDate="+dtCurDate);

        createAbsAn(wDay, ctrlPlanning2, Month_i, dtCurDate);
        dtCurDate = dtCurDate + 1;
      }
    } //Fin FOR

    var legend = new PlanningLegend();
    legend.addElement(hrLoadString("MOTIFA"), cMotifA);
    legend.addElement(hrLoadString("MOTIFB"), cMotifB);
    legend.addElement(hrLoadString("MOTIFC"), cMotifC);
    legend.addElement(hrLoadString("MOTIFD"), cMotifD);
    legend.addElement(hrLoadString("MOTIFE"), cMotifE);
    legend.addElement(hrLoadString("MOTIFG"), cMotifFG);
    ctrlPlanning2.legend = legend;

    ctrlPlanning2.print();
  } //Fin IF ((hrGetDossierCount() != 0 ) && (stYear0 != ""))
  ////*******************************************
} // Fin Fct
