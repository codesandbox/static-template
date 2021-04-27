import * as d3 from "d3";
//import data from "flight-abrv@2.json";
//const data = require("flight-abrv@2.json");
//console.log(data);

let Width = 800;
let Height = Width;
//data = FileAttachment("flight-abrv@2.json").json();
//const format = d3.format(",d");
const color = d3.scaleSequential([8, 0], d3.interpolateMagma);
//let cirData = data
const pack = (data) =>
  d3
    .pack()
    .size([Height - 2, Width - 2])
    .padding(3)(
    d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value)
  );

function dataVis(container, data) {
  const root = pack(data);
  let focus = root;
  let view;
  //return(root)
  //375x812

  const svg = d3
    .select(container)
    .append("svg")
    //.attr("viewBox", [0, 0, Width, Height])
    .attr("viewBox", `-${Width / 2.5} -${Height / 2} ${Width} ${Height}`)
    .on("click", (event) => zoom(event, root));
  window.ondevicemotion = function (event) {
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(root.descendants().slice())
      .join("circle")
      .attr("fill", (d) => color(d.height))
      .attr("pointer-events", (d) => (!d.children ? "none" : null))
      .attr("transform", (d) => `translate(${d.x + 1},${d.y + 1})`)
      .on("mouseover", function () {
        d3.select(this).attr("stroke", "#C22705");
      })
      .on("mouseout", function () {
        d3.select(this).attr("stroke", null);
      })
      .on(
        "click",
        (event, d) => focus !== d && (zoom(event, d), event.stopPropagation())
      );

    const label = svg
      .append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants().slice())
      .join("text")
      .style("fill-opacity", (d) => (d.parent === root ? 1 : 0))
      .style("display", (d) => (d.parent === root ? "inline" : "none"))
      .text((d) => (d.data.name === "" ? d.value : d.data.name));

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
      const k = Width / v[2];

      view = v;
      label.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
      );
      node.attr(
        "transform",
        (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
      );
      node.attr("r", (d) => d.r * k);
    }

    function zoom(event, d) {
      //const focus0 = focus;

      focus = d;

      const transition = svg
        .transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", (d) => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return (t) => zoomTo(i(t));
        });

      label
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .transition(transition)
        .style("fill-opacity", (d) => (d.parent === focus ? 1 : 0))
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })
        .on("end", function (d) {
          if (d.parent !== focus) this.style.display = "none";
        });
    }

    return svg.node();
  };
}
