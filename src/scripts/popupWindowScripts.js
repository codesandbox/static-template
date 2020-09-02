
/* function for displaying "popup" windows in detail views for data editing */
function toggleEditor(elementId, parentOverboxId, backboxId) {
	/* popup div */
	var elementDiv = document.getElementById(elementId);
	var wrapDiv = document.getElementById("wrap");
	/* outmost page div */
	if (wrapDiv == null) {
		wrapDiv = document.getElementById("help_wrap");
	}

	var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent);


	/* use the default semitransparent background div */
	if (backboxId == null) {

		backboxId = "backbox";
		var backboxDiv = document.getElementById(backboxId);

		/* show the window */
		if (elementDiv.style.display == "none" || 1==1) {


			/* show background */
			backboxDiv.style.display = "";

			/* set background height */
			if(ie6){
				if (wrapDiv.clientHeight > document.body.clientHeight) {
					backboxDiv.style.height = wrapDiv.clientHeight + "px";
				} else {
					backboxDiv.style.height = document.body.clientHeight + "px";
				}
			}else{
				backboxDiv.style.height = "100%";
			}

			/* set background width */
			if(ie6){
				if (wrapDiv.clientWidth > document.body.clientWidth) {
					backboxDiv.style.width = wrapDiv.clientWidth + "px";
				} else {
					backboxDiv.style.width = document.body.clientWidth + "px";
				}
			}else{
				backboxDiv.style.width = "100%";
			}



			/* show popup */
			elementDiv.style.display = "";

			/* set popup position top */
			if (elementDiv.clientHeight > backboxDiv.clientHeight) {
				elementDiv.style.top = "0px";
				//backboxDiv.style.height = elementDiv.clientHeight + "px";
			} else {
				elementDiv.style.top = "20px";
			}

			/* set popup position left if */
			var mLeft = (wrapDiv.clientWidth-elementDiv.clientWidth)/2-160;
			if(wrapDiv.id.indexOf('help_')==-1 || mLeft>10){
				if(mLeft<-129) {
					mLeft=-129;
				}
				elementDiv.style.marginLeft = ""+mLeft+"px";
			}
		}

		/* hide popup window */
		else {
			elementDiv.style.display = "none";
			backboxDiv.style.display = "none";
		}

		/* background div was set for leveled popups */
	} else {
		var parentOverboxDiv = document.getElementById(parentOverboxId);
		var backboxDiv = document.getElementById(backboxId);

		backboxDiv.style.height = "100%";
		backboxDiv.style.display = "";

		/* set background height */
		if(ie6){
			if (wrapDiv.clientHeight > document.body.clientHeight) {
				backboxDiv.style.height = wrapDiv.clientHeight + "px";
			} else {
				backboxDiv.style.height = document.body.clientHeight + "px";
			}
		}else{
			backboxDiv.style.height = "100%";
		}

		/* set background width */
		if(ie6){
			if (wrapDiv.clientWidth > document.body.clientWidth) {
				backboxDiv.style.width = wrapDiv.clientWidth + "px";
			} else {
				backboxDiv.style.width = document.body.clientWidth + "px";
			}
		}else{
			backboxDiv.style.width = "100%";
		}


		elementDiv.style.display = "";
		if (parentOverboxDiv==null)
		{
			var mLeft = (wrapDiv.clientWidth-elementDiv.clientWidth)/2;
		}else{
			var mLeft = (parentOverboxDiv.clientWidth-elementDiv.clientWidth)/2;
		}
		elementDiv.style.marginLeft = ""+mLeft+"px";
	}

	/* scroll to the top of the page */
	window.scrollTo(0, 0);

	$("#"+backboxId).bgiframe();
	/* When calling this function, the page is not refreshed */
	return false;
}

function hideBackbox(backboxId){
	var backboxDiv = document.getElementById(backboxId);
	backboxDiv.style.display = "none";
}


/* function for showing editable rows in popup windows */
function showEditorRow(rowNr, divId) {
	var div = document.getElementById(divId);
	var table = div.getElementsByTagName("table")[0];
	var tableFooters = table.getElementsByTagName("tfoot");
	//alert("tfooter length: " + tableFooters.length);
	/* disable buttons in table rows */
	var tableBody = table.getElementsByTagName("tbody")[0];
	var rows = tableBody.getElementsByTagName("tr");
	for (i = 0; i < rows.length; i++) {
		if (i != rowNr) {
			/* disable edit buttons */
			var cells = rows[i].getElementsByTagName("td");
			var buttons = cells[cells.length - 1].getElementsByTagName("input");
			for (j = 0; j < buttons.length; j++) {
				buttons[j].src = addPostfix(buttons[j].src, "_d");
				buttons[j].disabled = "disabled";
			}
		}
	}
	/* display editable fields */
	var cells = rows[rowNr].getElementsByTagName("td");
	for (i = 0; i < cells.length; i++) {
		var nodes = cells[i].childNodes;
		nodes[0].style.display = "none";
		nodes[1].style.display = "inline";
	}
	/* when a row is opened for editing, adding new row functionality is disabled in the footer */
	if (tableFooters.length > 0) {
		rows = tableFooters[0].getElementsByTagName("tr");
		cells = rows[0].getElementsByTagName("td");
		for (i = 0; i < cells.length - 1; i++) {
			var nodes = cells[i].childNodes;
			for (j = 0; j < nodes.length; j++) {
				nodes[j].disabled = "disabled";
			}
		}
		var nodes = cells[cells.length - 1].childNodes;
		for (j = 0; j < nodes.length; j++) {
			nodes[j].disabled = "disabled";
			nodes[j].src = addPostfix(nodes[j].src, "_d");
		}
	}
}

function confirm(classId) {
	$(classId).jqmShow().end().find(':submit:visible').click( function() {
		$(classId).jqmHide();
	});
}

function resizeBackboxForIESix() {

	var wrapDiv = document.getElementById("wrap");
	/* outmost page div */
	if (wrapDiv == null) {
		wrapDiv = document.getElementById("help_wrap");
	}

	backboxId = "backbox";
	var backboxDiv = document.getElementById(backboxId);

	if (wrapDiv.clientHeight > document.body.clientHeight) {
		backboxDiv.style.height = wrapDiv.clientHeight + "px";
	} else {
		backboxDiv.style.height = document.body.clientHeight + "px";
	}


	if (wrapDiv.clientWidth > document.body.clientWidth) {
		backboxDiv.style.width = wrapDiv.clientWidth + "px";
	} else {
		backboxDiv.style.width = document.body.clientWidth + "px";
	}
};

var resizeBoxTimer = null;
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent);
if(ie6){
	$(window).bind('resize', function() {
		if (resizeBoxTimer) clearTimeout(resizeBoxTimer);
		resizeBoxTimer = setTimeout(resizeBackboxForIESix, 100);
	});
}
