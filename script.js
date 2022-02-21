console.log("g4knr");

/*
*****
nav
*****
*/

/* function to close the nav when the overlay or links are clicked */
function closeNav() {
	// determine if the break point is as required
	const isMobile = window.matchMedia("(max-width: 479px)");
	if (!isMobile) {
		return;
	}

	// get a reference to the overlay and links
	const navCloseElements = document.querySelectorAll(
			".nav__close, .nav__links a"
		),
		navButton = document.querySelector(".nav__menu-btn");

	// toggle aria options when navButton is clicked
	navButton.onclick = () => {
		console.log("clicked");
		const isOpen =
			navButton.getAttribute("aria-expanded") === "true" ? false : true;
		console.log(navButton.getAttribute("aria-expanded"));
		console.log(isOpen);
		navButton.setAttribute("aria-expanded", isOpen);
	};

	// click the button when the overlay is clicked
	navCloseElements.forEach((navCloseElement) => {
		navCloseElement.onclick = () => {
			navButton.click();
		};
	});
}

/* ********** */

/*
*****
contact form
*****
*/

/* function to open the form modal */
function openFormModal() {
	// get a reference to all action buttons
	const contactTriggers = document.querySelectorAll("[data-g-action]");

	// for each trigger button, add a click listener
	contactTriggers.forEach((trigger) => {
		trigger.onclick = () => {
			// get the action then click the relevant trigger
			const contactAction = trigger.getAttribute("data-g-action"),
				actionTrigger = document.querySelector(`.${contactAction}`);
			actionTrigger.click();

			// toggle the overflow-hidden class from the body element
			document.querySelector("body").classList.toggle("overflow-hidden");
		};
	});
}

/* function to handle the form submission */
function contactForm() {
	// get a reference to the forms
	const formFocusesSelector = ".form__input",
		formSubmitSelector = ".form-submit",
		formButtonSelector = ".button.is--submit",
		errorSelector = "has-error";

	const formFocuses = document.querySelectorAll(formFocusesSelector),
		formButtons = document.querySelectorAll(formButtonSelector);

	// function to handle input, textarea and checkbox errors
	function standardErrors(input, isValid) {
		if (isValid) {
			input.classList.remove(errorSelector);
		} else {
			input.classList.add(errorSelector);
		}

		// return the element to focus on
		return input;
	}

	// function to handle select errors
	const selectErrors = (select, isValid) => {
		const selectDropdown = select.closest(".form__dropdown"),
			selectToggle = selectDropdown.querySelector(
				".form__input.is--dropdown-toggle"
			);

		if (isValid) {
			selectToggle.classList.remove(errorSelector);
		} else {
			selectToggle.classList.add(errorSelector);
		}

		// return the element to focus on
		return selectToggle;
	};

	// function to validate inputs and call error functions
	const validateInputs = (input) => {
		// check the validity of the input and create a temp variable for the focus element
		const isValid = input.checkValidity();
		let focusElement;

		// if the input is a select, call the select function
		// otherwise call the standard function
		if (input.localName === "select") {
			focusElement = selectErrors(input, isValid);
		} else {
			focusElement = standardErrors(input, isValid);
		}

		// return an object containing the validity and the element to focus on
		return {
			isValid,
			focusElement
		};
	};

	// validate when the user leaves inputs
	formFocuses.forEach((element) => {
		element.addEventListener("focusout", (event) => {
			let input = element;
			if (element.classList.contains("is--dropdown-toggle")) {
				input = element.nextElementSibling.querySelector("select");
			}
			validateInputs(input);
		});
	});

	// when the submit button is clicked
	// loop through the inputs to determine next steps
	formButtons.forEach((formButton) => {
		formButton.onclick = () => {
			console.log(formButton);

			// create a variable to define if validation has passed
			// and whether an element is in focus
			let hasPassed = true,
				isFocused = false;

			// find the current form
			const currentForm = formButton.closest("form"),
				formInputs = currentForm.querySelectorAll("input, textarea, select");

			console.log(currentForm);
			console.log(formInputs);

			formInputs.forEach((input) => {
				const inputValidation = validateInputs(input);

				if (!inputValidation.isValid && !isFocused) {
					inputValidation.focusElement.focus();
					hasPassed = false;
					isFocused = true;
				} else if (!inputValidation.isValid) {
					hasPassed = false;
				}
			});

			// submit the form is all checks pass
			if (hasPassed) {
				formButton.nextElementSibling.click();
			}
		};
	});

	const selectText = document.querySelectorAll(
		"[fs-selectcustom-element='label']"
	);

	const hiddenSelects = document.querySelectorAll(".hidden-select");
	hiddenSelects.forEach((select, index) => {
		select.addEventListener("change", (event) => {
			selectText[index].classList.add("text-color-dark");
		});
	});
}

/* ********** */

/*
*****
site prep functions
*****
*/

function sitePrep() {
	closeNav();
	openFormModal();
	contactForm();
}

if (document.readyState !== "loading") {
	// document is already ready
	sitePrep();
} else {
	document.addEventListener("DOMContentLoaded", () => {
		// wait for document to be ready
		sitePrep();
	});
}

/* ********** */
