var maxDist;
var mouse = { x: 0, y: 0 };
var cursor = {
  x: window.innerWidth,
  y: window.innerHeight
};

Math.dist = function(a, b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  return Math.sqrt(Math.pow(dx, 2), Math.pow(dy, 2));
};

window.addEventListener("mousemove", function(e) {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

window.addEventListener(
  "touchmove",
  function(e) {
    var t = e.touches[0];
    cursor.x = t.clientX;
    cursor.y = t.clientY;
  },
  {
    passive: false
  }
);

var Char = function(container, char) {
  var span = document.createElement("span");
  span.setAttribute("data-char", char);
  span.innerText = char;
  container.appendChild(span);
  this.getDist = function() {
    this.pos = span.getBoundingClientRect();
    return Math.dist(mouse, {
      x: this.pos.x + this.pos.width / 1.75,
      y: this.pos.y
    });
  };
  this.getAttr = function(dist, min, max) {
    var wght = max - Math.abs((max * dist) / maxDist);
    return Math.max(min, wght + min);
  };
  this.update = function(args) {
    var dist = this.getDist();
    this.wdth = args.wdth ? ~~this.getAttr(dist, 5, 200) : 100;
    this.wght = args.wght ? ~~this.getAttr(dist, 100, 800) : 400;
    this.alpha = args.alpha ? this.getAttr(dist, 0, 1).toFixed(2) : 1;
    this.ital = args.ital ? this.getAttr(dist, 0, 1).toFixed(2) : 0;
    this.draw();
  };
  this.draw = function() {
    var style = "";
    style += "opacity: " + this.alpha + ";";
    style +=
      "font-variation-settings: 'wght' " +
      this.wght +
      ", 'wdth' " +
      this.wdth +
      ", 'ital' " +
      this.ital +
      ";";
    span.style = style;
  };
  return this;
};

var VFont = function() {
  this.scale = false;
  this.flex = true;
  this.alpha = false;
  this.stroke = false;
  this.width = true;
  this.weight = true;
  this.italic = true;
  var title,
    str,
    chars = [];

  this.init = function() {
    title = document.getElementById("title");
    str = title.innerText;
    title.innerHTML = "";
    for (var i = 0; i < str.length; i++) {
      var _char = new Char(title, str[i]);
      chars.push(_char);
    }
    this.set();
    window.addEventListener("resize", this.setSize.bind(this));
  };

  this.set = function() {
    title.className = "";
    title.className += this.flex ? " flex" : "";
    title.className += this.stroke ? " stroke" : "";
    this.setSize();
  };

  this.setSize = function() {
    var fontSize = window.innerWidth / (str.length / 2);
    title.style = "font-size: " + fontSize + "px;";
    if (this.scale) {
      var scaleY = (
        window.innerHeight / title.getBoundingClientRect().height
      ).toFixed(2);
      var lineHeight = scaleY * 0.8;
      title.style =
        "font-size: " +
        fontSize +
        "px; transform: scale(1," +
        scaleY +
        "); line-height: " +
        lineHeight +
        "em;";
    }
  };

  this.animate = function() {
    mouse.x += (cursor.x - mouse.x) / 30;
    mouse.y += (cursor.y - mouse.y) / 30;
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  };

  this.render = function() {
    maxDist = title.getBoundingClientRect().width / 2;
    for (var i = 0; i < chars.length; i++) {
      chars[i].update({
        wght: this.weight,
        wdth: this.width,
        ital: this.italic,
        alpha: this.alpha
      });
    }
  };
  this.init();
  this.animate();
  return this;
};

var txt = new VFont();
var gui = new dat.GUI();
gui.add(txt, "flex").onChange(txt.set.bind(txt));
gui.add(txt, "scale").onChange(txt.set.bind(txt));
gui.add(txt, "alpha").onChange(txt.set.bind(txt));
gui.add(txt, "stroke").onChange(txt.set.bind(txt));
// gui.add(txt, 'width').onChange(txt.set.bind(txt));
gui.add(txt, "weight").onChange(txt.set.bind(txt));
gui.add(txt, "italic").onChange(txt.set.bind(txt));
