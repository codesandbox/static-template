const containerAnimate = document.getElementById("container");

var timeline = new TimelineMax({
    repeat: 1,
    yoyo: false
  }),
  feTurb = document.querySelector("#feturbulence");

timeline.add(
  new TweenMax.to(feTurb, 1000, {
    onUpdate: function () {
      var bfX = this.progress() * 4, //base frequency x
        bfY = this.progress() * 2, //base frequency y
        bfStr = bfX.toString() + " " + bfY.toString(); //base frequency string
      feTurb.setAttribute("baseFrequency", bfStr);
    }
  }),
  0
);
