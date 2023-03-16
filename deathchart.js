// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select("#bargraph")

  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)

  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Parse the Data
d3.csv("death.csv", function (d) {
  return { year: Number(d.year), value: Number(d.value) };
})
  //   var dataset = [];
  // d3.csv("death.csv", function(d) { for (var i = 0; i <d.length; i++)
  //trying to convert into string, first create empty array the loop through and make it a string
  //{dataset.push(JSON.stringify(d[i]));}})
  //forget that, do this instead, changing to number before moving forward
  // {dataset.push({year: +d.year, value: +d.value});})
  //d3.csv("death.csv", function(d) {console.log("value=" + d.value);})
  .then(function (data) {
    console.log(data);
    // X axis
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.year))
      .padding(0.2);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 30000000]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(y));

    // Bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.year);
      })
      .attr("width", x.bandwidth())
      .attr("fill", "#ff0000")
      .attr("height", function (d) {
        return height - y(0);
      })
      .attr("y", function (d) {
        return y(0);
      });
    // console.log("are we getting here?")
    //.attr("height", function(d) {return height - y(d.value);})

    //  .transition()
    //  .ease(d3.easeLinear)
    // .duration(500)
    // .delay(function (d, i) {
    //  return i * 50;
    //});

    // console.log("where are we at this point?")

    svg
      .selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", function (d) {
        return y(d.value);
      })
      .attr("height", function (d) {
        return height - y(d.value);
      })
      .delay(function (d, i) {
        return i * 100;
      });
  })
  .catch(function (error) {
    console.error(error);
  });
