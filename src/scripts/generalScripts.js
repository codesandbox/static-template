
/* color rows on mouseover in search result tables */
function changeRowColourMouseOver(tableRow) {
	var tableCells = tableRow.getElementsByTagName("td");
	for (i = 0; i < tableCells.length; i++) {
		tableCells[i].style.background = "#e0ecec";
	}
}
/* restore color for rows on mouseout in search result tables */
function changeRowColourMouseOut(tableRow, rowIndex) {
	var bgColor = "";
	if (rowIndex % 2 == 1) {
		bgColor = "#eff5f5";
	}
	var tableCells = tableRow.getElementsByTagName("td");
	for (i = 0; i < tableCells.length; i++) {
		tableCells[i].style.background = bgColor;
	}
}
/* restore color for rows on mouseout in search result tables */
function changeRowColourMouseOut(tableRow) {
	var bgColor = "";
	var tableCells = tableRow.getElementsByTagName("td");
	for (i = 0; i < tableCells.length; i++) {
		tableCells[i].style.background = bgColor;
	}
}
/* if enter is pressed in an inputtext field, nothing should happen.
 * search forms containing the name "List" in them are an exception.
 * (default action is to submit the form) */
document.onkeypress = stopReturnKey;
function stopReturnKey(evt) {
	var evt = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	if ((evt.keyCode == 13) && (node.type == "text") && (node.name.indexOf("List") == -1)) {
		return false;
	}
}
/* show designed pop-up window (replaces confirm popup) */
function displayYesNoPopup(parentDivId) {
	/* div positioning on top of another popup.
	 * The div is physically not inside the parent div, so the position needs to be adjusted */
	parentDiv = document.getElementById(parentDivId);
	yesNoDataDiv = document.getElementById("yesNoData");
	yesNoBackboxDiv = document.getElementById("yesNoBackbox");
	yesNoBackboxDiv.style.top = 0;
	yesNoBackboxDiv.style.width = "100%";
	yesNoBackboxDiv.style.height = "100%";
	/* display popup */
	toggleEditor("yesNoData", parentDivId, "yesNoBackbox");
}
/* display confirmation question on actions like deleting important data. with ajax support */
function displayConfirmationPopupA4J(confirmationString) {
	if (!confirm(confirmationString)) {
		form.reset();
		return false;
	}
	cursor_wait();
}

/* show or hide elements based on checkbox value */
function toggleByCheckboxValue(checkBox, fieldIds) {
	for (i = 0; i < fieldIds.length; i++) {
		var theField = document.getElementById(fieldIds[i]);
		if(checkBox.checked){
			theField.style.display = "";
		} else {
			theField.style.display = "none";
		}
	}
	checkBox.value = checkBox.checked;
}
/* function for adding an underscore-postfix to a filename.
 * used to disable and enable buttons in popup windows */
function addPostfix(filename, str) {
	return filename.substr(0, filename.length - 4) + str + filename.substr(filename.length - 4, filename.length - 1);
}
/* function for removing an underscore-postfix from a filename
 * used to disable and enable buttons in popup windows */
function removePostfix(filename) {
	return filename.substr(0, filename.length - 6) + filename.substr(filename.length - 4, filename.length - 1);
}
/* set cursor to waiting on button click */
function cursor_wait() {
//	document.body.style.cursor = "wait";
	$.blockUI.defaults.overlayCSS = {
		backgroundColor: '#fff',
		opacity:         '0.3'
	};
	$.blockUI.defaults.css.color = '#679e93';
	$.blockUI.defaults.css.border = '1px solid #679e93';
	$.blockUI({ message: '<h1><img src="../img/wait30trans.gif" />&nbsp;&Uuml;ks hetk...</h1>' });
}
/* set cursor to default after form has submitted */
function cursor_clear() {
	$.unblockUI();
	document.body.style.cursor = "default";
}
/* Set an event handler for each form's onsubmit event */
function setSubmitHandlers() {
	var forms = document.forms;
	for (i = 0; i < forms.length; i++) {
		forms[i].onsubmit = function () {
			trimFormFields(this);
			// clear javascript placeholders (IE is not supporting placeholders, so we are using javascript placeholders)
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});
		};
	}
}
/* Go through all form fields and trim string values */
function trimFormFields(form) {
	var elements = form.elements;
	for (i = 0; i < elements.length; i++) {
		if (elements[i].type == "text") {
			elements[i].value = elements[i].value.replace(/^\s+|\s+$/g, "");
		}
	}
}
/* set focus to the element identified by id */
function setFocusToBtnInDiv(divId) {
	var divElement = document.getElementById(divId);
	var linkElement = divElement.getElementsByTagName("a")[0];
	linkElement.focus();
}
/*
Probably need to be checked after every Tomahawk implementation change, as the generated element names can change.
*/
function dataTableSelectOneRadio(radio) {
	var id = radio.name.substring(radio.name.lastIndexOf(":"));
	var lookupName = radio.name.substring(0,radio.name.lastIndexOf(":"));
	lookupName = lookupName.substring(0,lookupName.lastIndexOf(":"));
	var el = radio.form.elements;
	for (var i = 0; i < el.length; i++) {
		var theName = el[i].name.substring(0,el[i].name.lastIndexOf(":"));
		theName = theName.substring(0,theName.lastIndexOf(":"));
		if (theName == lookupName) {
			if (el[i].name.substring(el[i].name.lastIndexOf(":")) == id) {
				el[i].checked = false;
			}
		}
	}
	radio.checked = true;
}
function checkFoodAidReason() {
	var radio = $(".foodAidSelect").find("input:checked");
	var reason = $("#foodAidDenyReason");
	var error = $(".foodAidError")
	if (radio != null && radio.length > 0 && reason != null && reason.length > 0){
		var val = radio.val();
		if (val === "2" && reason.val().length < 1) {
			error.show();
			return false;
		}
	}
	cursor_wait();
	return true;
}
/* show one of elements in list and hide all others based on radiobox value */
function toggleByRadioBoxValue(radioBox, fieldIds) {
	for (i = 0; i < fieldIds.length; i++) {
		var theField = document.getElementById(fieldIds[i]);
		if (theField == null) continue;
		if( i == parseInt(radioBox.value) ){
			theField.style.display = "";
		} else {
			theField.style.display = "none";
		}
	}
	radioBox.checked = true;
}

/* show one of elements in list and hide all others based on radiobox value
*/
function toggleByRadioBoxValueExt(radioBox, fieldIds, commonPartOfName) {
	for (i = 0; i < fieldIds.length; i++) {
		var theField = document.getElementById(fieldIds[i]);
		var valueToCompare = fieldIds[i].substring(commonPartOfName.length);
		if( valueToCompare == radioBox.value ){
			theField.style.display = "";
		} else {
			theField.style.display = "none";
		}
	}
	radioBox.checked = true;
}

function checkDate(id, appendId) {
	id = id.replace("[", "\\[");
	id = id.replace("]", "\\]");
	if ($("#" + id).val().length == 10 && $("#" + id).val().substring(6,7) != '2') {
		$.fn.jQueryMsg({ msg: 'Kontrolli sisestatud kuup&#228;eva &#245;igsust!', msgClass: 'alert', fx: 'fade', speed: 1000, append: appendId});
	}
}

function closeMe()
{
	var win = window.open('','_self'); /* url = ï¿½ï¿½ or ï¿½about:blankï¿½; target=ï¿½_selfï¿½ */
	win.close();
}

function fixPlaceholderOnDocumentReadyForIE() {
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	});
	$('[placeholder]').blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	});
	$('[placeholder]').blur();
}

function autocompleteWithDefaultPlaceholderById(elementId, sourceArray) {
	var elementName = "." + elementId;
	autocompleteWithDefaultPlaceholder(elementName, sourceArray);
}

function autocompleteWithDefaultPlaceholderByClass(elementClass, sourceArray) {
	var elementName = "." + elementClass;
	autocompleteWithDefaultPlaceholder(elementName, sourceArray);
}

function autocompleteWithDefaultPlaceholder(elementName, sourceArray){
	// autocomplete is available since jquery ui 1.8
	// STAR is using jquery ui 1.7
	// so we are using two different parallel versions, autocomplete from jquery ui version 1.10
	jquery_1_9_1_ui_1_10_0(elementName).autocomplete({
		source: sourceArray,
		maxShowItems: 5,
		create: function(event, ui) {
			// jquery ui 1.7 and 1.10 stylesheets are not compatible
			// so we used CSS scope ".autocomplete_1_10_4" for version 1.10 to get both jquery ui 1.7 and 1.10 to work
			$('.ui-autocomplete').wrap('<span class="autocomplete_1_10_4"></span>');
		}
	});
	// getting localized default placeholder string from main template, from hidden div with id autocompletePlaceholder
	$(elementName).attr("placeholder", $('#autocompletePlaceholder').text());
	// IE is not supporting placeholders, so lets do it with javascript
	fixPlaceholderOnDocumentReadyForIE();
}
