function numFormatter(num) {
  if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
  }else if(num > 1000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
  }else if(num < 900){
      return num; // if value < 1000, nothing to do
  }
}

function getInputValue(){
  var inputVal = document.getElementById("myInput").value;
  //console.log(inputVal);
  var image = document.getElementById('flag')
  image.style.display = "inline-block";
fetch("https://corona.lmao.ninja/v2/countries/"+inputVal)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("flag").src = data.countryInfo.flag;
  document.getElementById("country").innerHTML = numFormatter(data.country);
  document.getElementById("Active_Cases").innerHTML =numFormatter(data.active);
  document.getElementById("Total_Cases").innerHTML =numFormatter(data.cases);
  document.getElementById("Critical_Cases").innerHTML =numFormatter(data.critical);
  document.getElementById("Total_Death").innerHTML =numFormatter(data.deaths);
  document.getElementById("Recovered_Cases").innerHTML = numFormatter(data.recovered);
  document.getElementById("Total_Test_Done").innerHTML =numFormatter(data.tests);
});
}