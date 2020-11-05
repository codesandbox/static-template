const btn = document.getElementById("btn");
btn.onclick = () => {
  let num = document.getElementById("num").value;
  if (isNaN(num)) {
    alert("Enter the Valid Number");
    return;
  } else {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    var i = parseInt(Math.floor(Math.log(num) / Math.log(1024)));
    var j = Math.round(num / Math.pow(1024, i), 2) + " " + sizes[i];
    console.log(j);
    document.getElementById("out").innerHTML=j;
  }
};
