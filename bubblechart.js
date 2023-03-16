const bcMargin = { top: 30, right: 20, bottom: 100, left: 50 },
  bcWidth = 600 - bcMargin.left - bcMargin.right,
  bcHeight = 300 - bcMargin.top - bcMargin.bottom;

const bcSvg = d3
  .select("#bubblechart")
  .append("svg")
  .attr("width", bcWidth + bcMargin.left + bcMargin.right)
  .attr("height", bcHeight + bcMargin.top + bcMargin.bottom)
  .append("g")
  .attr("transform", `translate(${bcMargin.left},${bcMargin.top})`);

d3.csv("bubblechart.csv").then(function (data) {
  const x = d3.scaleLinear().domain([700, 90000]).range([0, bcWidth]);
  bcSvg
    .append("g")
    .attr("transform", `translate(0, ${bcHeight})`)
    .call(d3.axisBottom(x));

  bcSvg
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", bcWidth)
    .attr("y", bcHeight + bcMargin.top + 30)
    .style("fill", "white")
    .text("GDP");

  bcSvg
    .append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -bcMargin.left + 10)
    .attr("x", -bcMargin.top)
    .style("fill", "white")
    .text("Hospital patients per million");

  bcSvg
    .append("text")
    .attr("class", "title")
    .attr("x", bcWidth / 5)
    .attr("y", 1)
    .style("fill", "white")
    .text(
      "Relationship between GDP, Hospital patients per million and population during COVID19"
    );

  const y = d3.scaleLinear().domain([0, 1600]).range([bcHeight, 0]);
  bcSvg.append("g").call(d3.axisLeft(y));

  const z = d3.scaleLinear().domain([2000, 2000000000]).range([5, 50]);

  const myColor = d3
    .scaleOrdinal()
    .domain([
      "Asia",
      "Europe",
      "North America",
      "South America",
      "Africa",
      "Oceania"
    ])
    .range(d3.schemeSet2);

  var bcToolTip = d3
    .select("#bubblechart")
    .append("div")
    .style("opacity", 1)
    .attr("class", "tooltip")
    .attr("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "3px")
    .style("padding", "3px");

  var mouseover = function (event, d) {
    bcToolTip.style("opacity", 1);
  };
  var mousemove = function (event, d) {
    bcToolTip
      .html(
        d.location +
          "<br>" +
          "Population:" +
          d.population +
          "<br>" +
          "GDP:" +
          d.gdp_per_capita
      )
      .style("left", event.x / 2 + "px")
      .style("top", event.y / 2 - 30 + "px");
  };
  var mouseleave = function (d) {
    bcToolTip.style("opacity", 0);
  };

  bcSvg
    .append("g")
    .selectAll("dot")
    .data(data)
    .join("circle")
    .attr("cx", (d) => x(d.gdp_per_capita))
    .attr("cy", (d) => y(d.hosp_patients_per_million))
    .attr("r", (d) => z(d.population))
    .style("fill", (d) => myColor(d.continent))
    .style("opacity", "0.7")
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);
});
