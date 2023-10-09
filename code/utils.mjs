function isEmail(email) {

  const emailRegExp = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,50}$/gm);
  return emailRegExp.test(email);

}

function isDigitsOnly(text) {

  const digitsRegExp = new RegExp(/(^[0-9]+[-]*[0-9]+$)/);
  return digitsRegExp.test(text);

}


export { isEmail, isDigitsOnly };