// set the dimensions and margins of the graph
const stackedChartMargin = { top: 10, right: 30, bottom: 100, left: 50 },
  scWidth = 460 - stackedChartMargin.left - stackedChartMargin.right,
  scHeight = 500 - stackedChartMargin.top - stackedChartMargin.bottom;

// append the svg object to the body of the page
const scSvg = d3
  .select("#stackedchart")
  .append("svg")
  .attr("width", scWidth + stackedChartMargin.left + stackedChartMargin.right)
  .attr("height", scHeight + stackedChartMargin.top + stackedChartMargin.bottom)
  .append("g")
  .attr(
    "transform",
    `translate(${stackedChartMargin.left},${stackedChartMargin.top})`
  );

// Parse the Data
d3.csv("stackedbp.csv").then(function (data) {
  //console.log(data);
  // List of subgroups = header of the csv files = soil condition here
  const subgroups = data.columns.slice(1);
  //  console.log(subgroups);

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = data.map((d) => d.group);
  //  console.log(groups);

  // Add X axis
  const x = d3.scaleBand().domain(groups).range([0, scWidth]).padding([0.2]);
  scSvg
    .append("g")
    .attr("transform", `translate(0, ${scHeight})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  const y = d3.scaleLinear().domain([0, 450]).range([scHeight, 0]);
  scSvg.append("g").call(d3.axisLeft(y));

  // color palette = one color per subgroup
  const color = d3
    .scaleOrdinal()
    .domain(subgroups)
    .range(["#CC5500", "#E97451", "#702963", "#D22B2B", "#DE3163"]);

  //stack the data? --> stack per subgroup
  const stackedData = d3.stack().keys(subgroups)(data); //;

  //tool tip
  var tooltip = d3
    .select("#stackedchart")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px");

  var mouseover = function (event, d) {
    const subgroupName = d3.select(this.parentNode).datum().key;
    const subgroupValue = d.data[subgroupName];
    //console.log(subgroupValue);
    //console.log(subgroupName);
    tooltip
      .html("subgroup:" + subgroupName + "<br>" + "Value:" + subgroupValue)
      .style("opacity", 1);
  };

  const mousemove = function (event, d) {
    tooltip
      .style("transform", "translateY(-55%)")
      .style("left", event.x / 2 + "px")
      .style("top", event.y / 2 - 30 + "px");
  };
  const mouseleave = function (event, d) {
    tooltip.style("opacity", 0);
  };

  // Show the bars
  scSvg
    .append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", (d) => color(d.key))
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data((d) => d)
    .join("rect")
    .attr("x", (d) => x(d.data.group))
    .attr("y", (d) => y(d[1]))
    .attr("height", (d) => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .attr("stroke", "white")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);
});
