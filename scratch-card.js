/* Inspired from https://codepen.io/Totati/pen/pPXrJV */
const distanceBetween = (point1, point2) => {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
  );
};

const angleBetween = (point1, point2) => {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
};

const getMouse = (e, canvas) => {
  let offsetX = 0;
  let offsetY = 0;

  while (!!canvas) {
    offsetX += canvas.offsetLeft;
    offsetY += canvas.offsetTop;
    canvas = canvas.offsetParent;
  }

  const mx = (e.pageX || e.touched[0].clientX) - offsetX;
  const my = (e.pageY || e.touches[0].clientY) - offsetY;

  return { x: mx, y: my };
};

const getScratchedPercentage = (canvas) => {
  const ctx = canvas.getContext("2d");
  const pData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const scratchedArea = Array.from(pData).reduce((acc, p, idx) => {
    // Alpha channel check
    if (idx % 4 === 3 && p === 0) acc += 1;
    return acc;
  }, 0);

  return (scratchedArea / (pData.length / 4)) * 100;
};

window.initScratchCard = (selector) => {
  const container = document.querySelector(selector);
  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  const ctx = canvas.getContext("2d");

  let lastPoint = { x: 0, y: 0 };
  const image = container.querySelector(":scope > .seal");
  const hRatio = canvas.width / image.width;
  const vRatio = canvas.height / image.height;
  ctx.drawImage(image, 0, 0, image.width * hRatio, image.height * vRatio);
  container.querySelector("form").style.visibility = "visible";

  const bg = container.querySelectorAll(".background");
  bg.forEach((el) => {
    el.style.width = canvas.width;
    el.style.height = canvas.height;
  });

  const brush = container.querySelector(":scope > .brush");
  const handleMouseDown = (e) => {
    lastPoint = getMouse(e, canvas);
    canvas.addEventListener("mousemove", handleMouseMove, false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();

    const currentPoint = getMouse(e, canvas);
    const distance = distanceBetween(lastPoint, currentPoint);
    const angle = angleBetween(lastPoint, currentPoint);
    let x, y;

    for (let i = 0; i < distance; i++) {
      x = lastPoint.x + Math.sin(angle) * i - 25;
      y = lastPoint.y + Math.cos(angle) * i - 25;

      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(brush, x, y);
    }

    lastPoint = currentPoint;
    const percentage = getScratchedPercentage(canvas);
    if (percentage > 65) {
      canvas.parentNode.removeChild(canvas);
    }
  };
  const handleMouseUp = () => {
    canvas.removeEventListener("mousemove", handleMouseMove);
    return false;
  };

  canvas.addEventListener("mousedown", handleMouseDown, false);
  canvas.addEventListener("touchstart", handleMouseDown, false);
  canvas.addEventListener("mouseup", handleMouseUp, false);
  canvas.addEventListener("mouseout", handleMouseUp, false);
  canvas.addEventListener("touchend", handleMouseUp, false);

  container.appendChild(canvas);
};
