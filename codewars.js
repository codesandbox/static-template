//list filtering

function filter_list(l) {
  // Return a new array with the strings filtered out
  let list = [];
  for (let char of l) {
    if (typeof char === "number") {
      list.push(char);
    }
  }
  return list;
}
filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123]);

//vowel counting

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  var vowels = ["a", "e", "i", "o", "u"];
  var strArray = str.split("");
  for (let char of strArray) {
    if (vowels.indexOf(char) !== -1) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
getCount("adapoirewiernlkdhf");
