function newChart(csv, yDomain, text) {
  const wMargin = { top: 10, right: 40, bottom: 40, left: 70 },
    wWidth = 460 - wMargin.left - wMargin.right,
    wHeight = 400 - wMargin.top - wMargin.bottom;

  const wSvg = d3
    .select("#weather")
    .append("svg")
    .attr("width", wWidth + wMargin.left + wMargin.right)
    .attr("height", wHeight + wMargin.top + wMargin.bottom)
    .append("g")
    .attr("transform", `translate(${wMargin.left},${wMargin.top})`);

  d3.csv(csv).then(function (data) {
    const x = d3
      .scaleBand()
      .range([0, wWidth])
      .domain(data.map((d) => d.date))
      .padding(0.2);

    wSvg
      .append("g")
      .attr("transform", `translate(0, ${wHeight})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    wSvg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", wWidth)
      .attr("y", wHeight + wMargin.top + 30)
      .style("fill", "white")
      .text("Years");

    const y = d3.scaleLinear().domain(yDomain).range([wHeight, 0]);

    wSvg.append("g").call(d3.axisLeft(y));

    wSvg
      .append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -wMargin.left + 11)
      .attr("x", -wMargin.top)
      .style("fill", "white")
      .text("Total Covid cases");

    wSvg
      .append("text")
      .attr("class", "title")
      .attr("x", wWidth / 2)
      .attr("y", 1)
      .style("fill", "white")
      .text(text);

    wSvg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ff0000")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.date))
          .y((d) => y(d.cases))
      );

    wSvg
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.cases))
      .attr("r", 5)
      .attr("fill", "#ff0000");
  });
}
