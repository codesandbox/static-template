function chart(xDomain, yDomain) {
  const spMargin = { top: 10, right: 30, bottom: 30, left: 60 },
    spWidth = 460 - spMargin.left - spMargin.right,
    spHeight = 450 - spMargin.top - spMargin.bottom;

  const spSvg = d3
    .select("#scatterplot")
    .append("svg")
    .attr("width", spWidth + spMargin.left + spMargin.right)
    .attr("height", spHeight + spMargin.bottom + spMargin.top)
    .append("g")
    .attr("transform", `translate(${spMargin.left},${spMargin.top})`);

  d3.csv("scatterchart.csv").then(function (data) {
    //x axis
    const x = d3.scaleLinear().domain(xDomain).range([0, spWidth]);
    spSvg
      .append("g")
      .attr("transform", `translate(0, ${spHeight})`)
      .call(d3.axisBottom(x));

    // y axis
    const y = d3.scaleLinear().domain(yDomain).range([spHeight, 0]);
    spSvg.append("g").call(d3.axisLeft(y));

    const spToolTip = d3
      .select("#scatterplot")
      .append("div")
      .style("opacity", 0)
      .style("background-color", "black")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("padding", "10px");

    const mouseover = function (event, d) {
      spToolTip.style("opacity", 1);
    };
    const mousemove = function (event, d) {
      spToolTip
        .html(
          "Country:" +
            d.location +
            "<br>" +
            "GDP:" +
            d.gdp_per_capita +
            "<br>" +
            "Total cases:" +
            d.max_value
        )
        .style("left", event.x / 2 + "px")
        .style("top", event.y / 2 + "px");
    };

    const mouseleave = function (event, d) {
      spToolTip.transition().duration(200).style("opacity", 0);
    };

    // var zoom = d3.zoom
    //   .scaleExtent([0.5, 20])
    //   .extent([
    //     [0, 0],
    //     [spWidth, spHeight]
    //   ])
    //   .on("zoom", updateChart);

    //zoom
    // spSvg
    //   .append("rect")
    //   .attr("width", spWidth)
    //   .attr("height", spHeight)
    //   .style("fill", "none")
    //   .style("pointer-events", "all")
    //   .attr("transform", `translate(${spMargin.left},${spMargin.top})`)
    //   .call(zoom);

    //dots
    spSvg
      .append("g")
      .selectAll("dot")
      .data(data)
      //data.filter(function (d, i) {
      // return i < 100;}
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.max_value);
      })
      .attr("cy", function (d) {
        return y(d.gdp_per_capita);
      })
      .attr("r", 7)
      .style("fill", "#ff0000")
      .style("opacity", 0.3)
      .style("stroke", "white")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // function updateChart() {
    //   var newX = d3.event.transform.rescaleX(x);
    //   var newY = d3.event.transform.rescaleY(y);

    //   x.call(d3.axisBottom(newX));
    //   y.call(d3.axisLeft(newY));

    //   spSvg
    //     .selectAll("circle")
    //     .attr("cx", function (d) {
    //       return newX(d.max_value);
    //     })
    //     .attr("cy", function (d) {
    //       return newY(d.gdp_per_capita);
    //     });
    // }
  });
}
