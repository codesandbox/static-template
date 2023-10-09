import { isEmail, isDigitsOnly } from './utils.mjs';
import {
  nameFieldCheckLength, nameFieldCheckRegExp, checkBlankFields
} from './form-fields-validation/field-checker.mjs';





const validateNewUserForm = () => {

  const userForm = document.forms.userForm
  const {name, username, email, city, zipcode, phone } = userForm;

  const errors = {};

  let flag = true;

  if (!nameFieldCheckLength(name, errors, 'Name should be more than 5 characters', 'nameError', 5) && flag)
    flag = false;

  if (!nameFieldCheckLength(username, errors, 'Username should be more than 5 characters', 'usernameError', 5) && flag)
    flag = false;

  if (!nameFieldCheckRegExp(email, errors, 'Email should include @', 'emailError', new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,50}$/gm)) && flag)
    flag = false;

  if (!checkBlankFields(city, errors, 'You must add a city', 'cityError') && flag)
    flag = false;

  if (!nameFieldCheckRegExp(zipcode, errors, 'Zipcode must only be digits or a hyphen', 'zipcodeError', new RegExp(/(^[0-9]+[-]*[0-9]+$)/)) && flag)
    flag = false;

  if (!checkBlankFields(phone, errors, 'You must add a phone number', 'phoneError') && flag)
    flag = false;



  Object.entries(errors).forEach(([key, value]) => {
    document.getElementById(key).textContent = value;
  });

  return flag;

}





function handleErrors(element, css_class, error_description, errors, error_line, action) {


  if (action === 'error') {
    element.classList.add(css_class);
    errors[error_line] = error_description;
  } else if (action === 'remove-error') {
    element.classList.remove(css_class);
    errors[error_line] = '';
  }

}



export { validateNewUserForm, handleErrors };


