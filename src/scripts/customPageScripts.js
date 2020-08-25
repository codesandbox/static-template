/*******************************************************************************
 * Constants
 ******************************************************************************/

relationTypeChild='LA';
relationTypeRelative='SU';
relationTypeParent='VA';
relationTypeGrandparent='VV';
relationTypeGrandchild='LL';
relationTypeSibling='VO';
relationTypeOther='MU';

/*******************************************************************************
 * Customer Ident data window
 ******************************************************************************/

var numbers = "0123456789";

/* fill gender and birthdate data from entered social security number */
function calculateDataFromSSNumber(ssNumberInput, genderInput, birthdateInput){
	/* original design was not to change values when there was not-null values in gender and birthdate boxes,
		 changed it on request of the feedback, but if original design is needed then remove the comments from code.
		 Also the code to empty the values, if bad code was entered was added. */
	var formField = document.getElementById(ssNumberInput);

	var ssNumber = formField.value;

	var genderBox = document.getElementById(genderInput);
	var bDateBox = document.getElementById(birthdateInput);

	if(ssNumber.length < 7 || !isNumber(ssNumber.charAt(0))){
		bDateBox.value = "";
		genderBox.selectedIndex = 0;
		return;
	}
	var n1 = parseInt(ssNumber.charAt(0));

	/*
	 * select box is not possible to set by value, so index is used - a very
	 * unsafe method to use
	 */
// if(genderBox.selectedIndex == 0){
	if(n1 % 2 == 0){
		// female
		if(parseClassifierValueFromClassifierObject(genderBox.options[1].value) == "N"){
			genderBox.selectedIndex = 1;
		} else {
			genderBox.selectedIndex = 2;
		}
	}
	else {
		// male
		if(parseClassifierValueFromClassifierObject(genderBox.options[2].value) == "M"){
			genderBox.selectedIndex = 2;
		} else {
			genderBox.selectedIndex = 1;
		}
	}
//	}

	var year = "";
	if(n1 > 0 && n1 < 3) {
		year = "18";
	} else if (n1 > 2 && n1 < 5) {
		year = "19";
	} else if (n1 > 4 && n1 < 7) {
		year = "20";
	}

	for(i = 1; i <= 6; i++){
		if(!isNumber(ssNumber.charAt(i))){
			bDateBox.value = "";
			genderBox.selectedIndex = 0;
			return;
		}
	}
	var bDate = ssNumber.substring(5, 7)
		+ "." +
		ssNumber.substring(3, 5)
		+ "." +
		year +
		ssNumber.substring(1, 3);

// if(bDateBox.value == ""){
	bDateBox.value = bDate;
// }
}

/* validate a character for a number */
function isNumber(nr){
	if(numbers.indexOf(nr) > -1){
		return true;
	} else {
		return false;
	}
}


/*****************************
 * New customer message window
 *****************************/

/* hide/show if message subject info */
function toggleMessageSubjectInfo(){
	var checkBox = document.getElementById('isSubjectSameAsSender');
	var subjectInfo = document.getElementById('newCustomerMessageSubjectInfoTable');

	if(checkBox.checked){
		subjectInfo.style.display = "";
	} else {
		subjectInfo.style.display = "none";
	}

	checkBox.value = checkBox.checked;
}

/*********************
 * New customer window
 *********************/

/* display and hide customer actual address info */
function toggleActualAddressInfo(checkBox){
	var actualAddressInfoPanelGrid = document.getElementById('actualAddressPanelGrid');
	var foreignActualAddressInfoPanelGrid = document.getElementById('foreignActualAddressPanelGrid');
	var localActualAddressPanelGrid = document.getElementById('localActualAddressPanelGrid');

	if(checkBox.checked){
		actualAddressInfoPanelGrid.style.display = "";

		if(jQuery('#actualAddressPanelGrid input:checkbox').is(':checked')){
			localActualAddressPanelGrid.style.display = "none";
			foreignActualAddressInfoPanelGrid.style.display = "";
		} else {
			foreignActualAddressInfoPanelGrid.style.display = "none";
			localActualAddressPanelGrid.style.display = "";
		}
	} else {
		actualAddressInfoPanelGrid.style.display = "none";
		var actualAddressDepartureFromResidenceInput = document.getElementById('actualAddressDepartureFromResidence');
		actualAddressDepartureFromResidenceInput.value = "";

		foreignActualAddressInfoPanelGrid.style.display = "none";
		localActualAddressPanelGrid.style.display = "none";
	}
}

/* display and hide customer actual address info */
function toggleForeignActualAddressInfo(checkBox){
	var foreignActualAddressInfoPanelGrid = document.getElementById('foreignActualAddressPanelGrid');
	var localActualAddressPanelGrid = document.getElementById('localActualAddressPanelGrid');

	if(checkBox.checked){
		foreignActualAddressInfoPanelGrid.style.display = "";
		localActualAddressPanelGrid.style.display = "none";
	} else {
		foreignActualAddressInfoPanelGrid.style.display = "none";
		localActualAddressPanelGrid.style.display = "";
	}
}

/* display and hide customer actual address info */
function toggleForeignActualAddressInfo2(checkBox){
	var foreignActualAddressInfoPanelGrid = document.getElementById('foreignActualAddressPanelGrid2');
	var localActualAddressPanelGrid = document.getElementById('localActualAddressPanelGrid2');

	if(checkBox.checked){
		foreignActualAddressInfoPanelGrid.style.display = "";
		localActualAddressPanelGrid.style.display = "none";
	} else {
		foreignActualAddressInfoPanelGrid.style.display = "none";
		localActualAddressPanelGrid.style.display = "";
	}
}

/* display and hide customer postal address info */
function togglePostalAddressInfo(checkBox){
	var postalAddressInfoPanelGrid = document.getElementById('postalAddressPanelGrid');
	if(checkBox.checked){
		postalAddressInfoPanelGrid.style.display = "";
	} else {
		postalAddressInfoPanelGrid.style.display = "none";
	}
}

function toggleDetail(rowNr){
	var detailsId='subsidyPaymentsDataTable:'+rowNr+':plus'
	if (document.getElementById(detailsId)!=null)document.getElementById(detailsId).click();
}

/******************************
 * New person relation window
 ******************************/

/* depending on the type of relation, some fields must be enabled/disabled */
function newRelationTypeChanged(relationTypeSelect){

	var relationType = parseClassifierValueFromClassifierObject(relationTypeSelect.value);

	var dateStartField=document.getElementById("newRelationStartDate");
	var dateEndField=document.getElementById("newRelationEndDate");
	var relationStartRequired=document.getElementById("relationStartRequired");

	if(isRelationRelative(relationType)){
		dateStartField.value = "";
		dateStartField.disabled = true;
		$("#newRelationStartDate").datepicker("disable");
		relationStartRequired.style.display = "none";
		dateEndField.value = "";
		dateEndField.disabled = true;
		$("#newRelationEndDate").datepicker("disable");
	} else {
		if(dateStartField.disabled){
			dateStartField.disabled = false;
			$("#newRelationStartDate").datepicker("enable");
			relationStartRequired.style.display = "";
		}
		if(dateEndField.disabled){
			dateEndField.disabled = false;
			$("#newRelationEndDate").datepicker( "enable" );
		}
	}

	var descriptionField=document.getElementById("newRelationDescription");
	if(relationType == relationTypeOther){
		if(descriptionField.disabled){
			descriptionField.disabled = false;
		}
	} else {
		descriptionField.value = "";
		descriptionField.disabled = true;
	}

}


/* depending on the type of relation, some fields must be enabled/disabled */
function personRelationTypeChanged(rowNr, relationNr){

	var relationTypeSelect = document.getElementById("personRelationTypeSelect" + relationNr + "[" + rowNr + "]");
	var relationType = parseClassifierValueFromClassifierObject(relationTypeSelect.value);

	var dateStartField=document.getElementById("relationDateStart[" + rowNr + "]");
	var dateEndField=document.getElementById("relationDateEnd[" + rowNr + "]");

	if(isRelationRelative(relationType)){
		dateStartField.value = "";
		dateEndField.value = "";
		dateStartField.disabled = true;
		dateEndField.disabled = true;
	} else {
		if(dateStartField.disabled){
			dateStartField.disabled = false;

		}
		if(dateEndField.disabled){
			dateEndField.disabled = false;
		}
	}


	var descriptionField=document.getElementById("relationDescription[" + rowNr + "]");
	if(relationType == relationTypeOther){
		if(descriptionField.disabled){
			descriptionField.disabled = false;
		}
	} else {
		descriptionField.value = "";
		descriptionField.disabled = true;
	}

}

/* ugly string  for parsing classifier value from the entire object */
function parseClassifierValueFromClassifierObject(classifierObject){
	var startOfValue = classifierObject.indexOf('value [') + 7;
	var endOfValue = classifierObject.indexOf(']', startOfValue);
	return classifierObject.substring(startOfValue, endOfValue);
}

/* check if the relation type means the related people are relatives */
function isRelationRelative(relationType){
	return ( relationType == relationTypeChild
		|| relationType == relationTypeRelative
		|| relationType == relationTypeParent
		|| relationType == relationTypeGrandparent
		|| relationType == relationTypeSibling
		|| relationType == relationTypeGrandchild
	);
}

function colourRowsWithIds(idsA){
	var bg = "#FDECC9";
	if(idsA == null){
		return;
	}
	for (i = 0; i < idsA.length; i++) {
		document.getElementById(idsA[i]).style.backgroundColor = bg;
	}
}
/********
 * Help.
 ********/
function showHelpWindow(){
	cursor_wait();
	window.open('061Help.faces', 'list', 'height=700,width=950,left=50,top=50,toolbar=no,resizable=no,menubar=no,scrollbars=yes,status=no');
	cursor_clear();
}
