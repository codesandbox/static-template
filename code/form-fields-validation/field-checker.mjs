import { handleErrors } from '../validate-form.mjs';


const nameFieldCheckLength = ((element, errors, error_message, error_line, min_length) => {

  if (element.value.length < min_length) {
    handleErrors(element, 'error-input', error_message, errors, error_line, 'error');
    return false;
  }

  if (element.value.length >= min_length) {
    handleErrors(element, 'error-input', null, errors, error_line, 'remove-error');
    return true;
  }

});




const nameFieldCheckRegExp = ((element, errors, error_message, error_line, regExpression) => {

  if (!regExpression.test(element.value)) {
    handleErrors(element, 'error-input', error_message, errors, error_line, 'error');
    return false;
  } else {
    handleErrors(element, 'error-input', null, errors, error_line, 'remove-error');
    return true;
  }

})



const checkBlankFields = ((element, errors, error_message, error_line) => {

  if (element.value === '' || element.value === null) {
    handleErrors(element, 'error-input', error_message, errors, error_line, 'error');
    return false;
  }

  if (element.value !== '' && element.value !== null) {
    handleErrors(element, 'error-input', null, errors, error_line, 'remove-error');
    return true;
  }

})







export { nameFieldCheckLength, nameFieldCheckRegExp, checkBlankFields };
