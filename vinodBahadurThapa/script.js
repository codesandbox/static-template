const oldArr = ["vinod", "bahadur", "thapa"];
console.log(...oldArr);
let counter = 0;
const newarr = oldArr.map((e, ind, arr) => {
  counter++;
  console.log(`Counter:: ${counter}`);
  return ind + " : " + e + " :: " + arr;
});
//observe the output carefully
//.map()-method taa first loop korbey
//result taa store korbey newarr veriable ee
//then console korley array taa print hoy just
console.log(newarr);
