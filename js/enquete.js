const enqueteForm = document.getElementsByName("enqueteForm");

const button = enqueteForm[0].getElementsByTagName("button");

button[0].onclick = function () {
  // 参考 : https://into-the-program.com/forms/
  let sendMessage = "";

  const formElements = document.forms.enqueteForm;

  const inputVal = "Text: " + formElements.name.value;
  const radioVal = "\r\nRadio: " + formElements.gender.value;
  const selectVal = "\r\nSelect: " + formElements.grade.value;

  let checkList = [];
  formElements.interestSeminar.forEach(function (item) {
    if (item.checked === true) {
      console.log(item.value);
      checkList.push(item.value);
    }
  });
  const checkboxVal = "\r\nCheckbox: " + checkList.join(", ");

  const textareaVal = "\r\nTextarea: \r\n" + formElements.others.value;

  sendMessage =
    sendMessage + inputVal + radioVal + selectVal + checkboxVal + textareaVal;
  alert(sendMessage);

  return false;
};
