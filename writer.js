var app = document.getElementById("write");
let result = prompt(
  "Авторизация. \nДопиши пропущенное слово в вопросе)\n'Шо все так ...... ?'\n"
);
if (result == "погано" || result == "Погано") {
  alert("Верно)");
} else {
  let result2 = prompt("Попытка номер два) Твой любимый цвет?");
  if (result2 == "червоний" || result2 == "красный") {
    alert("Верно)");
  } else {
    alert("Не знаю кто вы, но этот подарок не для вас!");
    document.location.href = "https://www.google.com/";
  }
}
var typewriter = new Typewriter(app, {
  loop: false
});

typewriter
  .typeString("Привет!")
  .pauseFor(2500)
  .deleteAll()
  .typeString("У меня для тебя есть небольшой подарок :)")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Но сперва одень наушники.")
  .callFunction(function () {
    $("#btn_yes").show();
  })
  .deleteAll()
  .start();

$("#btn_yes").on("click", () => {
  $("#btn_yes").hide();
  typewriter
    .deleteAll()
    .typeString("Отлично, а теперь коснись пластинки.")
    .pauseFor(2500)
    .callFunction(function () {
      $("#write").css("opacity", 0);
      setTimeout(() => {
        $("body").animate({ backgroundPositionY: "0%" }, 1000);
        $(".player").animate({ opacity: "1" }, 1000);

        setTimeout(() => {
          let sound = new Howl({
            src: ["jony_rose.mp3"]
          });
          sound.play();
        }, 700);
      }, 3500);

      setTimeout(() => {
        typewriter.callFunction(function () {
          $("#write").css("opacity", 1);
        });
        typeString("А вот и твой подарок <3").pauseFor(2500).start();
        document.location.href = "jony-fan-zone-1-daria.pdf";
      }, 184000);
    })
    .deleteAll()
    .start();
});
