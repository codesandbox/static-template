//The svg
const sfg = d3.select("#map"),
  mWidth = +sfg.attr("width"),
  mHeight = +sfg.attr("height");

//Map and projection
const projection = d3
  .geoMercator()
  .center([0, 20]) // GPS of location to zoom on
  .scale(99) // This is like the zoom
  .translate([mWidth / 2, mHeight / 2]);

Promise.all([
  d3.json(
    "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
  ),
  d3.csv(
    "https://raw.githubusercontent.com/owid/covid-19-data/ef4d50a9892b60f5f63fc63e14a41ad2a308b291/public/data/jhu/total_cases.csv"
  )
]).then(function (initialize) {
  let dataGeo = initialize[0];
  let data = initialize[1];

  // Create a color scale
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.homecontinent))
    .range(d3.schemePaired);

  // Add a scale for bubble size
  const valueExtent = d3.extent(data, (d) => +d.n);
  const size = d3
    .scaleSqrt()
    .domain(valueExtent) // What's in the data
    .range([1, 50]); // Size in pixel

  // Draw the map
  sfg
    .append("g")
    .selectAll("path")
    .data(dataGeo.features)
    .join("path")
    .attr("fill", "#b8b8b8")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "none")
    .style("opacity", 0.3);

  // Add circles:
  sfg
    .selectAll("myCircles")
    .data(data.sort((a, b) => +b.n - +a.n).filter((d, i) => i < 1000))
    .join("circle")
    .attr("cx", (d) => projection([+d.homelon, +d.homelat])[0])
    .attr("cy", (d) => projection([+d.homelon, +d.homelat])[1])
    .attr("r", (d) => size(+d.n))
    .style("fill", (d) => color(d.homecontinent))
    .attr("stroke", (d) => {
      if (d.n > 2000) {
        return "black";
      } else {
        return "none";
      }
    })
    .attr("stroke-width", 1)
    .attr("fill-opacity", 0.4);

  // Add title and explanation
  sfg
    .append("text")
    .attr("text-anchor", "end")
    .style("fill", "black")
    .attr("x", mWidth - 10)
    .attr("y", mHeight - 30)
    .attr("width", 90)
    // .html("WHERE SURFERS LIVE")
    .style("font-size", 14);

  // --------------- //
  // ADD LEGEND //
  // --------------- //

  // Add legend: circles
  const valuesToShow = [100, 4000, 15000];
  const xCircle = 40;
  const xLabel = 90;
  sfg
    .selectAll("legend")
    .data(valuesToShow)
    .join("circle")
    .attr("cx", xCircle)
    .attr("cy", (d) => mHeight - size(d))
    .attr("r", (d) => size(d))
    .style("fill", "none")
    .attr("stroke", "black");

  // Add legend: segments
  sfg
    .selectAll("legend")
    .data(valuesToShow)
    .join("line")
    .attr("x1", (d) => xCircle + size(d))
    .attr("x2", xLabel)
    .attr("y1", (d) => mHeight - size(d))
    .attr("y2", (d) => mHeight - size(d))
    .attr("stroke", "black")
    .style("stroke-dasharray", "2,2");

  // Add legend: labels
  sfg
    .selectAll("legend")
    .data(valuesToShow)
    .join("text")
    .attr("x", xLabel)
    .attr("y", (d) => mHeight - size(d))
    .text((d) => d)
    .style("font-size", 10)
    .attr("alignment-baseline", "middle");
});
