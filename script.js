/* eslint-disable */

//  Asynchronous Function
const bootstrap = async () => {
  const width = 500;
  const height = 220;
  const margin = 40;

  const svg = d3
    // First, select the div by ID
    .select("div#barChart")
    // Dynamically create an SVG element
    .append("svg")
    // The preserveAspectRatio attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.
    .attr("preserveAspectRatio", "xMinYMin meet")
    // The viewBox attribute defines the position and dimension, in user space, of an SVG viewport.
    // Calculated Value: viewbox="-40 -40 580 300"
    .attr(
      "viewBox",
      "-" +
        margin +
        " -" +
        margin +
        " " +
        (width + margin * 2) +
        " " +
        (height + margin * 2)
    );

  // d3.csv() returns a value that returns a Promise. That means the value is taking more time to compute than normal. So, we have to wait until the value has been resolved to use it anywhere.
  let data = await d3.csv("data.csv");

  // Creating the x axis scale
  const x = d3
    .scaleLinear()
    // Setting scale domain from 0 to 1000
    .domain([0, 1000])
    // Setting scale width from 0 to width (500)
    .range([0, width]);

  // Drawing the x axis scale
  svg
    .append("g")
    .attr("class", "axis")
    // Used to push the line to the bottom, removing it causes x axis to attach to the top
    .attr("transform", "translate(0," + height + ")")
    // axisBottom() is a function that makes labels appear on the bottom, alternative you can also use axisTop()
    .call(d3.axisBottom(x));

  // Histogram computes the binning and returns the coordinates of each bar
  const histogram = d3
    .histogram()
    .value(d => d.price)
    .domain(x.domain())
    // Setting a lower threshold will add more values to the bin
    .thresholds(x.ticks(70));

  // Apply the historgram to the data processed
  const bins = histogram(data);

  // Creating the y axis scale
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height, 0]);

  // Drawing the y axis scale
  svg
    .append("g")
    .attr("class", "axis")
    // axisLeft() is a function that makes labels appear on the left, alternative you can also use axisRight()
    .call(d3.axisLeft(y));

  // Create individual bars for each datapoint created from the histogram
  svg
    .selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", 1)
    // This pushes each bar by a margin to ensure it spreads out to the domain
    .attr("transform", d => "translate(" + x(d.x0) + "," + y(d.length) + ")")
    // Set width and height based on datapoints created and their length
    .attr("width", d => x(d.x1) - x(d.x0) - 1)
    .attr("height", d => height - y(d.length));
};

bootstrap();
