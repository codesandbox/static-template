const ccMargin = { top: 121, right: 0, bottom: 49, left: 0 },
  ccWidth = 560 - ccMargin.left - ccMargin.right,
  ccHeight = 295 - ccMargin.top - ccMargin.bottom,
  innerRadius = 60,
  outerRadius = Math.min(ccWidth, ccHeight) / 2;

// append the svg object to the body of the page
const ccSvg = d3
  .select("#circlegraph")
  .append("svg")
  .attr("width", ccWidth + ccMargin.left + ccMargin.right)
  .attr("height", ccHeight + ccMargin.top + ccMargin.bottom)
  .append("g")
  .attr(
    "transform",
    `translate(${ccWidth / 2 + ccMargin.left}, ${ccHeight / 2 + ccMargin.top})`
  );

// Parse the Data
d3.csv("circlechart.csv").then(function (data) {
  const x = d3
    .scaleBand()
    .range([0, 2 * Math.PI])
    .domain(data.map((d) => d.location))
    .align(0);

  const y = d3
    .scaleRadial()
    .range([innerRadius, outerRadius])
    .domain([0, 1000000]);

  ccSvg
    .append("g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("fill", "#ff0000")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius((d) => y(d["max_value"]))
        .startAngle((d) => x(d.location))
        .endAngle((d) => x(d.location) + x.bandwidth())
        .padAngle(0.01)
        .padRadius(innerRadius)
    );
  ccSvg
    .append("g")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("text-anchor", function (d) {
      return (x(d.location) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
        Math.PI
        ? "end"
        : "start";
    })
    .attr("transform", function (d) {
      return (
        "rotate(" +
        (((x(d.location) + x.bandwidth() / 2) * 180) / Math.PI - 90) +
        ")" +
        "translate(" +
        (y(d["max_value"]) + 10) +
        ",0)"
      );
    })
    .append("text")
    .text(function (d) {
      return d.location;
    })
    .attr("transform", function (d) {
      return (x(d.location) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) <
        Math.PI
        ? "rotate(180)"
        : "rotate(0)";
    })

    .style("font-size", "11px")
    .style("fill", "#ffffff")
    .attr("alignment-baseline", "middle");
  // const dateList = Array.from(data.keys());
  // const presentDate = dateList[0];
  // const presentData = processEachDateData(data.get(presentDate)[0]);
  // const widthScale = d3
  //   .scaleLinear()
  //   .domain([0, d3.max(Object.values(presentData), (d) => parseInt(d.values))])
  //   .range([0, rcWidth]);
  // rcSvg
  //   .append("g")
  //   .selectAll("rect")
  //   .data(presentData)
  //   .enter()
  //   .append("rect")
  //   .attr("x", 10)
  //   .attr("y", (d, i) => i * 20)
  //   .attr("width", (d) => widthScale(parseInt(d.values)))
  //   .attr("height", 20);
  // function processEachDateData(data) {
  //   return Object.keys(data)
  //     .map((key) => ({ key, value: data[key] }))
  //     .sort((a, b) => b.value - a.value);
  // }
  // const names = data.filter((d) => d.name === "Zimbabwe");
  // const names = new Set(data.map((d) => d.name));
  // const datevalues = Array.from(
  //   d3.rollup(
  //     data,
  //     ([d]) => d.values,
  //     (d) => +d.date,
  //     (d) => d.name
  //   )
  // )
  //   .map(([date, data]) => [new Date(date), data])
  //   .sort(([a], [b]) => d3.ascending(a, b));
  //  var n = 12;
  //   function rank(value) {
  //     const data = Array.from(names, name => ({name, values: value(name)}));
  //     data.sort((a,b)=> d3.descending(a.value,b.value));
  //      for (let i=0; i<data.length; i++) data[i].rank = Math.min(n,i);
  //      return data;
  //   }
  //   var k=10;
  //   keyframes = {
  //     keys = []
  //  }
  // console.log(names);
});
