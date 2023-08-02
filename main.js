function getTooltipGradientColor() {
  const tooltip = document.querySelector(".tooltip");
  const tooltipRect = tooltip.getBoundingClientRect();
  const gradientX = tooltipRect.left + tooltipRect.width / 2;
  const gradientY = tooltipRect.top + tooltipRect.height;
  const gradient = window
    .getComputedStyle(tooltip)
    .getPropertyValue("background-image");
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.rect(0, 0, 1, 1);
  const gradientObj = ctx.createLinearGradient(0, 0, 0, 1);
  gradientObj.style = gradient;
  ctx.fillStyle = gradientObj;
  ctx.fill();
  const imageData = ctx.getImageData(0, 0, 1, 1);
  const red = imageData.data[0];
  const green = imageData.data[1];
  const blue = imageData.data[2];
  return `rgb(${red}, ${green}, ${blue})`;
}

function updateTooltipPosition(event) {
  const tooltip = event.currentTarget;
  const tooltipRect = tooltip.getBoundingClientRect();
  const positionX =
    ((event.clientX - tooltipRect.left) / tooltipRect.width) * 100;
  const positionY =
    ((event.clientY - tooltipRect.top) / tooltipRect.height) * 100;
  tooltip.style.setProperty("--position-x", positionX);
  tooltip.style.setProperty("--position-y", positionY);

  const gradient = window
    .getComputedStyle(tooltip)
    .getPropertyValue("background-image");
  const tooltipGradientColor = getTooltipGradientColor(gradient);
  console.log(tooltipGradientColor);
}

const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach(
  (tooltip) =>
    //tooltip.addEventListener("mousemove", updateTooltipPosition)
    null
);
