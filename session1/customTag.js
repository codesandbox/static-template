function customTag(tagName, fn) {
  document.createElement(tagName);
  const tagNamesArray = document.getElementsByTagName(tagName);
  for (let tag of tagNamesArray) {
    fn(tag);
  }
}

function tagFun(ele) {
  if (ele.attributes.name) {
    var name = ele.attributes.name.value;
    var customText = `Hello ${name}, your name was passed in this customTag`;
    ele.innerHTML = customText;
  }
}

customTag("nameTag", tagFun);

document.getElementById("test").style.color = "red";
