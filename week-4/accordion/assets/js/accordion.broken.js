(function (w, doc, undefined) {
  "use strict";

  /**
   * Local object for method references
   * and define script meta-data
   */
  var Accordion = {};
  w.Accordion = Accordion;

  Accordion.NS = "Accordion";
  Accordion.AUTHOR = "Scott O'Hara";
  Accordion.VERSION = "3.2.1";
  Accordion.LICENSE =
    "https://github.com/scottaohara/accessible_accordions/blob/master/LICENSE";

  var widgetClass = "accordion";
  var widgetTriggerClass = widgetClass + "__trigger";
  var widgetHeadingClass = widgetClass + "__heading";
  var widgetPanelClass = widgetClass + "__panel";

  var widgetHeading = "[data-accordion-heading]";
  var widgetPanel = "[data-accordion-panel]";

  var idCounter = 0;

  /**
   * Global Create
   *
   * This function validates that the minimum required markup
   * is present to create the ARIA widget(s).
   * Any additional markup elements or attributes that
   * do not exist in the found required markup patterns
   * will be generated via this function.
   */
  Accordion.create = function () {
    var self;
    var panels;
    var defaultPanel = "none";
    var headings;
    var triggers;
    var constantPanel;
    var multiPanel;
    var i;

    var widget = doc.querySelectorAll("[data-accordion]");

    idCounter += 1;

    for (i = 0; i < widget.length; i++) {
      self = widget[i];
      var t;

      /**
       * Check for IDs and create arrays of necessary
       * panels & headings for further setup functions.
       */
      if (!self.hasAttribute("id")) {
        self.id = "acc_" + idCounter + "-" + i;
      }

      /**
       * Setup accordion classes
       */
      self.classList.add(widgetClass);

      /**
       * Get all panels & headings of an accordion pattern based
       * on a specific ID > direct child selector (this will ensure
       * that nested accordions don't get properties meant for
       * the parent accordion, or vice-versa).
       *
       * If accordions are contained within an ol/ul, the selector
       * needs to be different.
       */
      if (doc.querySelectorAll("#" + self.id + "> li").length) {
        panels = doc.querySelectorAll("#" + self.id + " li > " + widgetPanel);
        headings = doc.querySelectorAll(
          "#" + self.id + " li > " + widgetHeading
        );
      } else {
        panels = doc.querySelectorAll("#" + self.id + " > " + widgetPanel);
        headings = doc.querySelectorAll("#" + self.id + " > " + widgetHeading);
      }

      /**
       * Check for options:
       * data-default - is there a default opened panel?
       * data-constant - should the accordion always have A panel open?
       */
      if (self.hasAttribute("data-default")) {
        defaultPanel = self.getAttribute("data-default");
      }

      /**
       * Accordions with a constantly open panel are not a default
       * but if a data-constant attribute is used, then we need this
       * to be true.
       */
      constantPanel = self.hasAttribute("data-constant");

      /**
       * Accordions can have multiple panels open at a time,
       * if they have a data-multi attribute.
       */
      multiPanel = self.hasAttribute("data-multi");

      /**
       * If accordion panels are meant to transition, apply this inline style.
       * This is to help mitigate a quick flash of CSS being applied to the
       * no-js styling, and having an unwanted transition on initial page load.
       */
      if (self.hasAttribute("data-transition")) {
        var thesePanels = self.querySelectorAll(widgetPanel);

        for (t = 0; t < thesePanels.length; t++) {
          thesePanels[t].classList.add(widgetPanelClass + "--transition");
        }
      }

      /**
       * Setup Panels, Headings & Buttons
       */
      Accordion.setupPanels(self.id, panels, defaultPanel, constantPanel);
      Accordion.setupHeadingButton(headings, constantPanel);

      if (doc.querySelectorAll("#" + self.id + "> li").length) {
        triggers = doc.querySelectorAll(
          "#" + self.id + " li > " + widgetHeading + " ." + widgetTriggerClass
        );
      } else {
        triggers = doc.querySelectorAll(
          "#" + self.id + " > " + widgetHeading + " ." + widgetTriggerClass
        );
      }

      /**
       * Now that the headings/triggers and panels are setup
       * we can grab all the triggers and setup their functionality.
       */
      for (t = 0; t < triggers.length; t++) {
        triggers[t].addEventListener("mousedown", Accordion.actions);
        triggers[t].addEventListener("keydown", Accordion.keytrolls);
      }
    } // for(widget.length)
  }; // Accordion.create()

  Accordion.setupPanels = function (id, panels, defaultPanel, constantPanel) {
    var i;
    var panel;
    var panelID;
    var setPanel;
    var constant;

    for (i = 0; i < panels.length; i++) {
      panel = panels[i];
      panelID = id + "_panel_" + (i + 1);
      setPanel = defaultPanel;
      constant = constantPanel;

      panel.setAttribute("id", panelID);
      setHidden(panels[0], true);

      panel.classList.add(widgetPanelClass);

      /**
       * Set the accordion to have the appropriately
       * opened panel if a data-default value is set.
       * If no value set, then no panels are open.
       */
      if (setPanel !== "none" && parseInt(setPanel) !== NaN) {
        // if value is 1 or less
        if (setPanel <= 1) {
          setHidden(panels[0], false);
        }
        // if value is more than the number of panels, then open
        // the last panel by default
        else if (setPanel - 1 >= panels.length) {
          setHidden(panels[panels.length - 1], false);
        }
        // for any other value between 2 - the last panel #, open that one
        else {
          setHidden(panels[setPanel - 1], false);
        }
      }

      /**
       * If an accordion is meant to have a consistently open panel,
       * and a default open panel was not set (or was not set correctly),
       * then run one more check.
       */
      if ((constant && setPanel === "none") || parseInt(setPanel) === NaN) {
        setHidden(panels[0], false);
      }
    }
  }; // Accordion.setupPanels

  Accordion.setupHeadingButton = function (headings, constantPanel) {
    var heading;
    var targetID;
    var targetState;
    var newButton;
    var buttonText;
    var i;

    for (i = 0; i < headings.length; i++) {
      heading = headings[i];
      let lbl = heading.getAttribute("data-aria-label");
      console.log(lbl);
      targetID = heading.nextElementSibling.id;
      targetState = doc.getElementById(targetID).getAttribute("data-hidden");

      // setup new heading buttons
      newButton = doc.createElement("span");
      buttonText = heading.textContent;
      // clear out the heading's content
      heading.innerHTML = "";
      // provide the heading with a class for styling
      heading.classList.add(widgetHeadingClass);

      if (lbl !== null) newButton.setAttribute("aria-label", lbl);
      newButton.setAttribute("data-controls", targetID);
      newButton.setAttribute("id", targetID + "_trigger");

      newButton.setAttribute("tabindex", "-1");

      newButton.classList.add(widgetTriggerClass);

      /**
       * Check the corresponding panel to see if it was set up
       * to be hidden or shown by default. Add an aria-expanded
       * attribute value that is appropriate.
       */
      if (targetState === "false") {
        setExpanded(newButton, true);
        isCurrent(newButton, true);

        /**
         * Check to see if this an accordion that needs a constantly
         * opened panel, and if the button's target is not hidden.
         */
        if (constantPanel) {
          newButton.setAttribute("data-disabled", "true");
        }
      } else {
        setExpanded(newButton, false);
        isCurrent(newButton, false);
      }

      // Add the Button & previous heading text
      heading.appendChild(newButton);
      newButton.appendChild(doc.createTextNode(buttonText));
    }
  }; // Accordion.createButton

  Accordion.actions = function (e) {
    // Need to pass in if this is a multi accordion or not.
    // Also need to pass in existing trigger arrays.
    var thisAccordion = this.id.replace(/_panel.*$/g, "");
    var thisTarget = doc.getElementById(this.getAttribute("data-controls"));
    var thisTriggers;

    if (doc.querySelectorAll("#" + thisAccordion + "> li").length) {
      thisTriggers = doc.querySelectorAll(
        "#" +
          thisAccordion +
          " li > " +
          widgetHeading +
          " ." +
          widgetTriggerClass
      );
    } else {
      thisTriggers = doc.querySelectorAll(
        "#" + thisAccordion + " > " + widgetHeading + " ." + widgetTriggerClass
      );
    }

    e.preventDefault();

    Accordion.togglePanel(e, thisAccordion, thisTarget, thisTriggers);
  }; // Accordion.actions()

  Accordion.togglePanel = function (e, thisAccordion, targetPanel, triggers) {
    var getID;
    var i;
    var thisTrigger = e.target;

    // check to see if a trigger is disabled
    if (thisTrigger.getAttribute("data-disabled") !== "true") {
      getID = thisTrigger.getAttribute("data-controls");

      isCurrent(thisTrigger, "true");

      if (thisTrigger.getAttribute("data-expanded") === "true") {
        setExpanded(thisTrigger, "false");
        setHidden(targetPanel, "true");
      } else {
        setExpanded(thisTrigger, "true");
        setHidden(targetPanel, "false");

        if (doc.getElementById(thisAccordion).hasAttribute("data-constant")) {
          setDisabled(thisTrigger, "true");
        }
      }

      if (
        doc.getElementById(thisAccordion).hasAttribute("data-constant") ||
        !doc.getElementById(thisAccordion).hasAttribute("data-multi")
      ) {
        for (i = 0; i < triggers.length; i++) {
          if (thisTrigger !== triggers[i]) {
            isCurrent(triggers[i], "false");
            getID = triggers[i].getAttribute("data-controls");
            setDisabled(triggers[i], "false");
            setExpanded(triggers[i], "false");
            setHidden(doc.getElementById(getID), "true");
          }
        }
      }
    }
  };

  Accordion.keytrolls = function (e) {
    if (e.target.classList.contains(widgetTriggerClass)) {
      var keyCode = e.keyCode || e.which;

      var keyEnter = 13;

      var thisAccordion = this.id.replace(/_panel.*$/g, "");
      var thisTarget = doc.getElementById(this.getAttribute("data-controls"));
      var thisTriggers;

      if (doc.querySelectorAll("#" + thisAccordion + "> li").length) {
        thisTriggers = doc.querySelectorAll(
          "#" +
            thisAccordion +
            " li > " +
            widgetHeading +
            " ." +
            widgetTriggerClass
        );
      } else {
        thisTriggers = doc.querySelectorAll(
          "#" +
            thisAccordion +
            " > " +
            widgetHeading +
            " ." +
            widgetTriggerClass
        );
      }

      switch (keyCode) {
        /**
         * keyEnd/Home are optional functions that may not be inherently known
         * to most users and, in the case of END, conflict with expected
         * usage of that key with NVDA.
         */
        case keyEnter:
          Accordion.togglePanel(e, thisAccordion, thisTarget, thisTriggers);
          break;

        default:
          break;
      }
    }
  }; // Accordion.keytrolls()

  /**
   * Initialize Accordion Functions
   * if expanding this script, place any other
   * initialize functions within here.
   */
  Accordion.init = function () {
    Accordion.create();

    document.addEventListener("keydown", function (e) {
      var keyCode = e.keyCode || e.which;
      var keyHome = 72;
      var keyEnd = 69;

      var thisTriggers = doc.querySelectorAll(".accordion__trigger");

      switch (keyCode) {
        /**
         * keyEnd/Home are optional functions that may not be inherently known
         * to most users and, in the case of END, conflict with expected
         * usage of that key with NVDA.
         */
        case keyEnd:
          e.preventDefault();
          thisTriggers[thisTriggers.length - 1].focus();
          console.log("end");
          break;

        case keyHome:
          e.preventDefault();
          thisTriggers[0].focus();
          console.log("home");
          break;

        default:
          break;
      }
    });
  };

  /**
   * Helper Functions
   * Just to cut down on the verboseness of some declarations
   */
  /**
   * CHANGED:
   * ariaHidden to setHidden
   * ariaExpanded to setExpanded
   * ariaDisabled to setDisabled
   */
  var setHidden = function (el, state) {
    // el.setAttribute("aria-hidden", state);
    // CHANGED: changed aria-hidden to data-hidden
    el.setAttribute("data-hidden", state);
  };

  var setExpanded = function (el, state) {
    // el.setAttribute("aria-expanded", state);
    // CHANGED: changed aria-expanded to data-expanded
    el.setAttribute("data-expanded", state);
  };

  var setDisabled = function (el, state) {
    // el.setAttribute("aria-disabled", state);
    // CHANGED: changed aria-disabled to data-disabled
    el.setAttribute("data-disabled", state);
  };

  var isCurrent = function (el, state) {
    el.setAttribute("data-current", state);
  };

  // go go JavaScript
  Accordion.init();
})(window, document);
