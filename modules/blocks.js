modules.blocks = {
  //start
  0: {
    type: "event",
    color: "#12E07D",
    format: ["Start"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>when <span style="color: #09713F; font-style: italic">started</span></div></div>
    </div>`,
    //block: ["notch"],
    run: function () {}
  },
  //walk X steps
  1: {
    type: "simple",
    color: "#0079EB",
    format: ["walk", "number", "steps"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>walk <span class="input" type="number" contenteditable>5</span> steps</div></div>
    </div>`,
    run: function () {}
  },
  //turn right X degrees
  2: {
    type: "simple",
    color: "#0079EB",
    format: ["turn right", "number", "degrees"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>turn right <span class="input" type="number" contenteditable>15</span> degrees</div></div>
    </div>`,
    run: function () {}
  },
  //turn left X degrees
  3: {
    type: "simple",
    color: "#0079EB",
    format: ["turn left", "number", "degrees"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>turn left <span class="input" type="number" contenteditable>15</span> degrees</div></div>
    </div>`,
    run: function () {}
  },
  //jump
  4: {
    type: "simple",
    color: "#0079EB",
    format: ["jump"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back>jump</div>
    </div>`,
    run: function () {}
  },
  //sit
  5: {
    type: "simple",
    color: "#0079EB",
    format: ["sit"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back>sit</div>
    </div>`,
    run: function () {}
  },
  //squat
  6: {
    type: "simple",
    color: "#0079EB",
    format: ["squat"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back>squat</div>
    </div>`,
    run: function () {}
  },
  //stand
  7: {
    type: "simple",
    color: "#0079EB",
    format: ["stand"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back>stand</div>
    </div>`,
    run: function () {}
  },
  //lay down
  9: {
    type: "simple",
    color: "#0079EB",
    format: ["lay down"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back>lay down</div>
    </div>`,
    run: function () {}
  },
  //set specific leg
  2983823: {
    type: "simple",
    color: "#0079EB",
    format: ["set", "dropdown", "to", "number"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>set <select class="input" type="dropdown">
      <option value="null" selected>Legs</option>
      <option value="leg1">Front Right Leg</option>
      <option value="leg2">Front Left Leg</option>
      <option value="leg3">Back Right Leg</option>
      <option value="leg4">Back Left Leg</option>
      </select> to <span class="input" type="boolean" contenteditable>15</span> degrees</div></div>
    </div>`,
    run: function () {}
  },
  //if
  10: {
    type: "parent",
    color: "#FFCD1A",
    format: ["if", "boolean", "then"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>if <span class="input" type="boolean" contenteditable>true</span> then</div></div>
      <div class="blockIfContainer">
        <div class="notch" back></div>
        <div class="blockClose" back></div>
      </div>
    </div>`,
    run: function () {}
  },
  //if-else

  11: {
    type: "if-else",
    color: "#FFCD1A",
    format: ["if", "boolean", "then", "else"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>if <span class="input" type="boolean" contenteditable>true</span> then</div></div>
      <div class="blockIfContainer">
        <div class="notch" back></div>
      </div>
      <div class="blockContent" style="margin-top: 16px" back><div>else</div></div>
      <div class="blockIfContainer">
        <div class="notch" back></div>
        <div class="blockClose" back></div>
      </div>
    </div>`,
    run: function () {}
  },

  //repeat X times
  12: {
    type: "parent",
    color: "#FFCD1A",
    format: ["repeat", "number", "times"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>repeat <span class="input" type="integer" contenteditable>5</span> times</div></div>
      <div class="blockIfContainer">
        <div class="notch" back></div>
        <div class="blockClose" back></div>
      </div>
    </div>`,
    run: function () {}
  },
  //repeat until
  13: {
    type: "parent",
    color: "#FFCD1A",
    format: ["repeat until", "boolean"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>repeat until <span class="input" type="boolean" contenteditable>true</div></div>
      <div class="blockIfContainer">
        <div class="notch" back></div>
        <div class="blockClose" back></div>
      </div>
    </div>`,
    run: function () {}
  },
  //wait
  14: {
    type: "simple",
    color: "#FFCD1A",
    format: ["wait", "number", "seconds"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>wait <span class="input" type="number" contenteditable>5</span> seconds</div></div>
    </div>`,
    run: function () {}
  },
  //wait until
  15: {
    type: "simple",
    color: "#FFCD1A",
    format: ["wait until", "boolean"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>wait until <span class="input" type="boolean" contenteditable>true</div></div>
    </div>`,
    run: function () {}
  },
  //break
  16: {
    type: "simple",
    color: "#FFCD1A",
    format: ["break"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>break</div></div>
    </div>`,
    run: function () {}
  },
  // +
  17: {
    type: "number",
    color: "#66CFFF",
    format: ["number", "+", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> + <span class="input" type="number" contenteditable>5</span></div>`
  },
  // -
  18: {
    type: "number",
    color: "#66CFFF",
    format: ["number", "-", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> - <span class="input" type="number" contenteditable>5</span></div>`
  },
  // *
  19: {
    type: "number",
    color: "#66CFFF",
    format: ["number", "*", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> * <span class="input" type="number" contenteditable>5</span></div>`
  },
  // /
  20: {
    type: "number",
    color: "#66CFFF",
    format: ["number", "/", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> / <span class="input" type="number" contenteditable>5</span></div>`
  },
  // %
  21: {
    type: "number",
    color: "#66CFFF",
    format: ["number", "%", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> % <span class="input" type="number" contenteditable>5</span></div>`
  },
  // pick random X to Y
  22: {
    type: "number",
    color: "#66CFFF",
    format: ["pick random", "number", "to", "number"],
    html: `<div contenteditable="false">pick number <span class="input" type="string" contenteditable>1</span> to <span class="input" type="string" contenteditable>10</span></div>`
  },
  // round X
  23: {
    type: "number",
    color: "#66CFFF",
    format: ["round", "number"],
    html: `<div contenteditable="false">round <span class="input" type="number" contenteditable>5</span></div>`
  },
  // X < Y
  24: {
    type: "boolean",
    color: "#FF571F",
    format: ["number", "<", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> < <span class="input" type="number" contenteditable>5</span></div>`
  },
  // X > Y
  25: {
    type: "boolean",
    color: "#FF571F",
    format: ["number", ">", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> > <span class="input" type="number" contenteditable>5</span></div>`
  },
  // X == Y
  26: {
    type: "boolean",
    color: "#FF571F",
    format: ["number", "=", "number"],
    html: `<div contenteditable="false"><span class="input" type="number" contenteditable>5</span> = <span class="input" type="number" contenteditable>5</span></div>`
  },
  // X and Y
  27: {
    type: "boolean",
    color: "#FF571F",
    format: ["boolean", "and", "boolean"],
    html: `<div contenteditable="false"><span class="input" type="boolean" contenteditable>true</span> and <span class="input" type="boolean" contenteditable>true</span></div>`
  },
  // X or Y
  28: {
    type: "boolean",
    color: "#FF571F",
    format: ["boolean", "or", "boolean"],
    html: `<div contenteditable="false"><span class="input" type="boolean" contenteditable>true</span> or <span class="input" type="boolean" contenteditable>true</span></div>`
  },
  // not X
  29: {
    type: "boolean",
    color: "#FF571F",
    format: ["not", "boolean"],
    html: `<div contenteditable="false">not <span class="input" type="boolean" contenteditable>true</span></div>`
  },
  // set var to X
  30: {
    type: "simple",
    color: "#8E47FF",
    format: ["set", "var", "to", "number"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>set <span class="input" type="variable">myVar</span> to <span class="input" type="variable">15</span></div></div>
    </div>`,
    run: function () {}
  },
  // change var by X
  31: {
    type: "simple",
    color: "#8E47FF",
    format: ["change", "var", "by", "number"],
    html: `<div class="notchHolder">
      <div class="notchCutout" back></div>
      <div class="notchExtention" back></div>
      <div class="notch" back></div>
    </div>
    <div class="blockHolder">
      <div class="blockContent" back><div>change <span class="input" type="variable">myVar</span> by <span class="input" type="variable">15</span></div></div>
    </div>`,
    run: function () {}
  }
};
