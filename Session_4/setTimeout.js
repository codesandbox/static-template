function sample() {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  for (var i = 0; i < 100000000000; i++) {}

  setTimeout(function () {
    console.log(3);
  }, 1000);

  console.log(4);
}

sample();
