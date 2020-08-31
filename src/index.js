/**
 * Title: DragAndDrop
 * Description: Native HTML5 "DragAndDrop" support for STAR web. Specifically for the table "Toimingud"
 * Author: Iglu OÜ (Tõnis Terasmaa)
 * Version: 0.14
 */
var dropEventListeners = [],
	currentlyDraggedItem = false,
	currentHoverTargetRow = false,
	previousHoverTargetRow = false,
	hoverTargetChanged = false,
	isDraggingSubAction = false,
	isIE11 = window.document.documentMode,
	isFF = typeof InstallTrigger !== "undefined";

/**
 * Check if array contains value
 * @param {string[]} array
 * @param {string} value
 */
function includes(array, value) {
	return array.indexOf(value) !== -1;
}

/**
 * return boolean value of provided value
 * @param {boolean, number, string} value
 */
function boolify(value) {
	var array = [true, 1, "TRUE", "true", "True"];
	return includes(array, value);
}

/**
 * Add provided class to the provided element, if not already added.
 * @param {Element} element
 * @param {string} className
 */
function addClass(element, className) {
	var classNames = element.className.split(" ");
	if (classNames.indexOf(className) === -1) {
		classNames.push(className);
	}
	element.className = classNames.join(" ");
	return element;
}

/**
 * Remove provided class from the provided element
 * @param {Element} element
 * @param {string} className
 */
function removeClass(element, className) {
	var classNames = element.className.split(" ").filter(function (cn) {
		return cn !== className;
	});
	element.className = classNames.join(" ");
	return element;
}

/**
 * Returns boolean value of the provided element beign equipped with the provided class name
 * @param {Element} element
 * @param {string} className
 */
function hasClass(element, className) {
	var classNames = element.className.split(" ");
	return includes(classNames, className);
}

/**
 * Retrieve classNames array of event target element
 * @param {DragEvent} e
 */
function getHoverTargetClasses(e) {
	/**
	 * in current version of FireFox when hovering on text inside of elements, the target is of "#text" type, instead of the container
	 */
	if (isFF && e.target.nodeName === "#text") {
		return e.target.parentNode.className.split(" ");
	}
	return e.target.className.split(" ");
}

function isTargetSubActionDropZone(target) {
	var classes = target.className.split(" ");
	return classes.indexOf("sub-action-drop-zone") !== -1;
}

function isSourceSubAction(target) {
	return /_subs:/.test(target.id);
}

function isDroppingSubOnTheParent(target, source) {
	return target.id.split("_")[0] === source.id.split("_")[0];
}

/**
 * Check if user is hovering over drop-target of sub-actions
 * @param {DragEvent} evt
 */
function checkIsHoveringSubActionsDropArea(evt) {
	/**
	 * get currently hovered drop-target classNames
	 * @type {Element|boolean}
	 */
	var subActionDropArea = false;
	if (isFF && evt.target.nodeName === "#text" && evt.target.parentNode.nodeName === "DIV") {
		subActionDropArea = evt.target.parentNode;
	} else if (evt.target.nodeName === "DIV" && evt.target.parentNode.nodeName === "DIV") {
		subActionDropArea = evt.target;
	}
	if (subActionDropArea) {
		return includes(subActionDropArea.className.split(" "), "sub-action-drop-zone") && subActionDropArea;
	}
	return false;
}

/**
 * Fetches Main Action ID from provided string
 * @param id {string}
 * @returns {*|string}
 */
function getParentActionId(id) {
	return id.split("_")[0];
}

/**
 * Fetches Sub-Action ID from provided string
 * @param id {string}
 * @returns {*|string}
 */
function getChildActionId(id) {
	return id.split("_")[1];
}

/**
 * Check if user is hovering the sub-actions table
 * @param {DragEvent} evt
 */
function checkIsHoveringSubActionsTable(evt) {
	var hoverTargetTable = false;
	var hoverTargetTableId = false;
	var hoverTargetRow = false;
	var subActionTableElement = false;

	var isDropAreaEnabled = false;
	var isHoveringCurrentSubTableDropArea = false;
	var isHoveringOverSubActionParent = false;

	/**
	 * in FireFox we need to check if we are hovering an element or plain text inside an element
	 * here we check if we are hovering the text inside an element, if so, we need to use one higher level parent than on other browsers
	 */
	if (
		includes(["#text", "IMG"], evt.target.nodeName) &&
		includes(["TD", "TH"], evt.target.parentNode.nodeName)
	) {
		hoverTargetRow = evt.target.parentNode.parentNode;
	} else if (includes(["TD", "TH"], evt.target.nodeName)) {
		hoverTargetRow = evt.target.parentNode;
	}

	if (hoverTargetRow) {
		hoverTargetTable = hoverTargetRow.parentNode.parentNode;
		hoverTargetTableId = hoverTargetTable.className.split(" ").filter(function (className) {
			return /(^list:[0-9]+_subs$)/.test(className);
		});
		if (hoverTargetTableId.length > 0) {
			hoverTargetTableId = hoverTargetTableId[0];
		} else {
			hoverTargetTableId = false;
		}
	}
	/**
	 * check if we are hovering a sub-action tr
	 */
	var isHoveringOverSubActionTd = /_subs:/.test(hoverTargetRow.id);
	/**
	 * check if we are hovering over sub-action table
	 */
	var isHoveringOverSubActionTable = false;
	/**
	 * if hovering tr with no CLASSNAME nor ID, then it is a THEAD TR, then reference the hoverTargetTable
	 */
	if (!hoverTargetRow.className || !hoverTargetRow.id) {
		isHoveringOverSubActionTable = /(list:[0-9]+_subs)/.test(hoverTargetTable.className);
	} else if (evt.target.nodeName === "TABLE") {
		isHoveringOverSubActionTable = /(list:[0-9]+_subs)/.test(evt.target.className);
	}

	if (!currentlyDraggedItem || !currentlyDraggedItem.id) {
		currentlyDraggedItem = document.getElementById(
			evt.dataTransfer.getData(isIE11 ? "Text" : "text/plain")
		);
	}

	subActionTableElement = hoverTargetTable;

	if (subActionTableElement && /_subs/.test(subActionTableElement.className) || isDraggingSubAction) {
		if ((
			evt.target.nodeName === "TD" &&
			getParentActionId(currentlyDraggedItem.id) === getParentActionId(evt.target.parentNode.id)
		) || (
			includes(["#text", "IMG"], evt.target.nodeName) && evt.target.parentNode.nodeName === "TD" &&
			getParentActionId(currentlyDraggedItem.id) === getParentActionId(evt.target.parentNode.parentNode.id)
		) || (
			evt.target.nodeName === "TH" && hoverTargetTableId &&
			getParentActionId(currentlyDraggedItem.id) === getParentActionId(hoverTargetTableId)
		) || (
			includes(["#text", "IMG"], evt.target.nodeName) && evt.target.parentNode.nodeName === "TH" &&
			getParentActionId(currentlyDraggedItem.id) === getParentActionId(hoverTargetTableId)
		)) {
			isHoveringOverSubActionParent = true;
		}
	}

	var isHoveringSubActionDropArea = checkIsHoveringSubActionsDropArea(evt);
	if (isHoveringSubActionDropArea) {
		/**
		 * list of sub-action drop area classNames
		 * @type {string[]}
		 */
		var dropAreaParentId = isHoveringSubActionDropArea.className.split(" ").filter(function (cn) {
			return /_drop/.test(cn);
		});
		if (dropAreaParentId.length > 0) {
			isHoveringCurrentSubTableDropArea =
				currentlyDraggedItem.id.split("_")[0] === dropAreaParentId[0].split("_")[0];
		}
	}

	if (subActionTableElement && !isHoveringOverSubActionParent) {
		isDropAreaEnabled =
			subActionTableElement &&
			boolify(subActionTableElement.getAttribute("data-drop-target"));
	}

	return {
		isHoveringCurrentSubTableDropArea: isHoveringCurrentSubTableDropArea,
		isHoveringParent: isHoveringOverSubActionParent,
		isHoveringTable: isHoveringOverSubActionTable,
		isHoveringTableChild: isHoveringOverSubActionTd,
		tableElement: subActionTableElement,
		isDropAreaEnabled: isDraggingSubAction && isHoveringCurrentSubTableDropArea || isDropAreaEnabled
	};
}

/**
 * Check if current hover target is allowed to have current dragged element to be dropped on
 * @param {DragEvent} evt
 * @param {Object} subActionTable
 * @param {boolean}isHoveringOverRow
 * @returns {boolean}
 */
function checkIsDropAllowed(evt, subActionTable, isHoveringOverRow) {
	if (!evt) {
		return false;
	}
	if (
		subActionTable.isHoveringParent ||
		subActionTable.isHoveringTable ||
		subActionTable.isHoveringTableChild ||
		subActionTable.isHoveringCurrentSubTableDropArea
	) {
		return subActionTable.isDropAreaEnabled;
	}
	var hoverTarget = false;
	if (isHoveringOverRow) {
		if (includes(["#text", "IMG"], evt.target.nodeName)) {
			hoverTarget = evt.target.parentNode.parentNode;
		} else if (evt.target.nodeName === "TD") {
			hoverTarget = evt.target.parentNode;
		}
		return boolify(hoverTarget.getAttribute("data-drop-target"));
	}
	return false;
}

/**
 * Set new currentHoverTarget and previousHoverTarget
 * @param {DragEvent} evt
 * @param {Object} subActionTable
 * @param {boolean} isHoveringOverRow
 * @param {boolean} isHoveringOverSubActionDropArea
 */
function setHoverTargets(
	evt,
	subActionTable,
	isHoveringOverRow,
	isHoveringOverSubActionDropArea
) {
	var newHoverTarget = false;

	if (isHoveringOverSubActionDropArea) {
		if (evt.target.nodeName === "#text") {
			/**
			 * in FF we need to go one level deeper into the DOM to get our sub-action drop-target
			 */
			newHoverTarget = evt.target.parentNode;
		} else if (evt.target.nodeName === "DIV") {
			newHoverTarget = evt.target;
		}
	} else if (
		subActionTable &&
		(subActionTable.isHoveringTable || subActionTable.isHoveringTableChild)
	) {
		/**
		 * if user is hovering the sub-actions TABLE then use the provided table element as hover target
		 */
		newHoverTarget = subActionTable.tableElement;
	} else if (isHoveringOverRow) {
		if (includes(["#text", "IMG"], evt.target.nodeName)) {
			/**
			 * in FF we need to go one level deeper into the DOM to get our TR that is draggable
			 */
			newHoverTarget = evt.target.parentNode.parentNode;
		} else if (evt.target.nodeName === "TD") {
			newHoverTarget = evt.target.parentNode;
		}
	} else {
		newHoverTarget = evt.target;
	}

	var isIdMatching = false;
	if (currentHoverTargetRow && newHoverTarget.id !== currentlyDraggedItem.id) {
		isIdMatching = newHoverTarget.id === currentHoverTargetRow.id;
	} else {
		isIdMatching = newHoverTarget.id === currentlyDraggedItem.id;
	}

	if (isIdMatching) {
		return false;
	}

	if (newHoverTarget && newHoverTarget.id !== currentHoverTargetRow.id) {
		previousHoverTargetRow = currentHoverTargetRow || false;
		currentHoverTargetRow = newHoverTarget;
		hoverTargetChanged = true;
	}
}

/**
 * Check if current target of pointer is a valid drop-target
 * @param {DragEvent} e
 */
function isHoveringOverEnabledDropArea(e) {
	/**
	 * check if user is hovering a main action TR
	 */
	var isHoveringOverRow = false;
	var targetRow = false;
	if (
		e.target.nodeName === "TD" &&
		e.target.parentNode.nodeName === "TR"
	) {
		targetRow = e.target.parentNode;
	} else if (includes(["#text", "IMG"], e.target.nodeName) && e.target.parentNode.nodeName === "TD") {
		targetRow = e.target.parentNode.parentNode;
	}
	if (targetRow) {
		isHoveringOverRow = !/_subs:/.test(targetRow.id);
	}
	/**
	 * check if user is hovering over sub-actions table
	 * also get table element and id already extracted
	 */
	var subActionTable = checkIsHoveringSubActionsTable(e);
	/**
	 * check if user is hovering sub-action drop-target to make sub-action into main action
	 */
	var isHoveringOverSubActionDropArea = checkIsHoveringSubActionsDropArea(e);
	/**
	 * check if user is hovering over drop-target that is enabled and suitable for currently hovered action
	 */
	var isDropAllowed = checkIsDropAllowed(e, subActionTable, isHoveringOverRow);
	/**
	 * if current target does not allow dropping OR currently dragging main action and hovering over sub-action drop area return false
	 */
	if (
		!isDropAllowed ||
		(!isDraggingSubAction && isHoveringOverSubActionDropArea)
	) {
		return false;
	}

	/**
	 * set correct hover targets
	 */
	setHoverTargets(
		e,
		subActionTable,
		isHoveringOverRow,
		isHoveringOverSubActionDropArea
	);

	return isDropAllowed;
}

function submitFunction(childId, parentId) {
	if (!childId) {
		return false;
	}
	cursor_wait();
	var params = [
		["childId", childId]
	];
	if (parentId) {
		params.push(["parentId", parentId]);
	}
	oamSubmitForm("mainForm", "drag", null, params);
	return false;
}

function resetTargets() {

	var hoverTargets = document.querySelectorAll('.drag-enter');
	for (var i = 0; i < hoverTargets.length; i++) {
		removeClass(hoverTargets[i], 'drag-enter');
	}

	currentlyDraggedItem = false;
	currentHoverTargetRow = false;
	previousHoverTargetRow = false;
	hoverTargetChanged = false;
}


/**
 * Handle the dragstart event of a draggable element
 * @param {DragEvent} e
 */
function handleDragStart(e) {
	var breakEarly = false;
	/**
	 * check for browser type for better compatibility
	 * in FF and IE11 the row cannot be dragged via input with type="image"
	 * and we check if the target is actually draggable="true"
	 * if not, just break early
	 */
	var rowElement = false;
	var handleElement = false;
	if (e.target.nodeName === "TR") {
		rowElement = e.target;
	} else if (includes(["TD", "TH"], e.target.nodeName) && e.target.parentNode.nodeName === "TR") {
		rowElement = e.target.parentNode;
	} else if (e.target.nodeName === "IMG" && e.target.parentNode.parentNode.nodeName === "TR") {
		rowElement = e.target.parentNode.parentNode;
	} else {
		breakEarly = true;
	}
	if (!rowElement || !boolify(hasClass(rowElement, "draggable"))) {
		breakEarly = true;
	}
	/**
	 * our regular DOM layout for this functionality is img(the handle)->td(the table cell)->tr(the draggable row)
	 * that's why we check if the row is draggable and we are trying to drag by the actual handle
	 * and we check if the actual drag handle is inside our current target
	 * if not, break early
	 */
	var isHandleElement = /drag-handle|handle-container/.test(e.target.className);
	if (isHandleElement) {
		breakEarly = !boolify(hasClass(rowElement, "draggable"));
	} else {
		breakEarly = true;
	}

	if (breakEarly) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	var dragData = "";
	if (e.target.nodeName === "#text") {
		currentlyDraggedItem = e.target.parentNode.parentNode.parentNode;
	} else if (e.target.nodeName === "IMG") {
		currentlyDraggedItem = e.target.parentNode.parentNode;
	} else if (includes(["TD", "TH"], e.target.nodeName)) {
		currentlyDraggedItem = e.target.parentNode;
	} else if (e.target.nodeName === "TR") {
		currentlyDraggedItem = e.target;
	}

	if (currentlyDraggedItem) {
		dragData = currentlyDraggedItem.id;
		isDraggingSubAction = /_subs:/.test(dragData);
	}

	if (isIE11) {
		e.dataTransfer.setData("Text", dragData);
	} else {
		e.dataTransfer.setData("text/plain", dragData);
	}
} //end function

/**
 * Handler for "dragenter" event
 * @param {DragEvent} e
 */
function handleDragEnter(e) {
	if (isHoveringOverEnabledDropArea(e)) {
		if (hoverTargetChanged) {
			addClass(currentHoverTargetRow, "drag-enter");
			if (previousHoverTargetRow) {
				removeClass(previousHoverTargetRow, "drag-enter");
			}
			hoverTargetChanged = false;
		}
	}
}

//Function handles dragover event eg.. moving your source div over the target div element.
//If drop event occurs, the function retrieves the draggable elements id from the DataTransfer object.
function handleOverDrop(e) {
	e.preventDefault();
	e.stopPropagation();
	//Depending on the browser in use, not using the preventDefault() could cause any number of strange default behaviours to occur.
	if (e.type !== "drop") {
		return; //Means function will exit if no "drop" event is fired.
	}

	resetTargets();
	//Stores dragged elements ID in var draggedId
	var draggedId = "";
	if (isIE11) {
		draggedId = e.dataTransfer.getData("Text");
	} else {
		draggedId = e.dataTransfer.getData("text/plain");
	}

	//Stores reference to element being dragged in var draggedEl
	var draggedEl = document.getElementById(draggedId);
	var targetEl = false;

	if (e.target.nodeName === "#text") {
		targetEl = e.target.parentNode.parentNode;
	} else if (
		e.target.nodeName === "IMG" &&
		e.target.parentNode.nodeName === "TD"
	) {
		targetEl = e.target.parentNode.parentNode;
	} else if (e.target.nodeName === "TD") {
		targetEl = e.target.parentNode;
	} else if (includes(["DIV", "TR"], e.target.nodeName)) {
		targetEl = e.target;
	}

	if (!targetEl) {
		return;
	}

	//if the event "drop" is fired on the dragged elements original drop target e.i..  it's current parentNode,
	//then set it's css class to ="" which will remove dotted lines around the drop target and exit the function.
	if (!draggedEl || draggedEl === this) {
		return;
	}
	if (/_drop/.test(e.target.id) && !/_subs/.test(draggedEl.id)) {
		return;
	}
	//Otherwise if the event "drop" is fired from a different target element, detach the dragged element node from it's
	//current drop target (i.e current perantNode) and append it to the new target element. Also remove dotted css class.
	// draggedEl.parentNode.removeChild(draggedEl);

	var childId = "";
	if (isDraggingSubAction) {
		childId = draggedEl.id.split("_")[1].split(":")[1];
	} else {
		childId = draggedEl.id.split("_")[0].split(":")[1];
	}
	var parentId = targetEl.id.split("_")[0].split(":")[1];

	if (isSourceSubAction(draggedEl)) {
		if (isTargetSubActionDropZone(e.target)) {
			submitFunction(childId);
		} else {
			if (!isDroppingSubOnTheParent(targetEl, draggedEl)) {
				submitFunction(childId, parentId);
			}
		}
	} else {
		submitFunction(childId, parentId);
	}
	isDraggingSubAction = false;
} //end Function

function setElementDraggable(element) {
	var handleContainer = element.querySelector(".handle-container");
	if (handleContainer) {
		handleContainer.setAttribute("draggable", 'true');
		handleContainer.addEventListener("dragstart", handleDragStart);
	}
	if (isIE11 || isFF) {
		var dragHandle = element.querySelector("[class*='drag-handle']");
		if (dragHandle) {
			dragHandle.setAttribute(
				"style",
				"pointer-events: none; cursor: pointer;"
			);
		}
	}
}

function registerDraggableElements(element) {
	var draggable = document.querySelectorAll("[class*='_row']");
	//Register event listeners for the "dragstart" event on the draggable elements:
	for (var i = 0; i < draggable.length; i++) {
		if (hasClass(draggable[i], "draggable")) {
			setElementDraggable(draggable[i]);
		} else {
			draggable[i].addEventListener("dragstart", function (e) {
				e.preventDefault();
				return false;
			});
		}
	}
}

function registerDropTargets() {
	var targets = document.querySelectorAll(".drop-target");

	//Register event listeners for "dragover", "drop", "dragenter" & "dragleave" events on the drop target elements.
	for (var j = 0; j < targets.length; j++) {
		targets[j].setAttribute("data-drop-target", "true");
		targets[j].addEventListener("dragenter", handleDragEnter);
		targets[j].addEventListener("dragover", function (evt) {
			evt.preventDefault();
			evt.stopPropagation();
		});
		if (isIE11) {
			// targets[j].setAttribute("ondragdrop", "console.log(event); handleOverDrop(event)");
			targets[j].addEventListener("dragdrop", handleOverDrop);
		} else {
			// targets[j].setAttribute("ondrop", "console.log(event); handleOverDrop(event)");
			targets[j].addEventListener("drop", handleOverDrop);
		}
		if (targets[j].querySelector('.handle-container')) {
			addClass(targets[j], 'draggable');
		}
	}
}

function initDragAndDrop() {
	//Retrieve two groups of elements, those that are draggable and those that are drop targets:
	registerDropTargets();
	registerDraggableElements();
	var dataTable = document.getElementById("list:tbody_element");
	for (var i = 0; i < dataTable.childNodes.length; i++) {
		var node = dataTable.childNodes[i];
		if (node.nodeName === "TR" && !node.className && node.childNodes[0].childNodes.length === 0) {
			dataTable.removeChild(node);
		}
	}
}

initDragAndDrop();
