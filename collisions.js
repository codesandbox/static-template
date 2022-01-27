function rotatePoint(x, y, theta, sine) {
  let cosine = theta;

  if (sine == undefined) {
    cosine = cos(theta);
    sine = sin(theta);
  }

  return {
    x: cosine * x + sine * y,
    y: -sine * x + cosine * y
  }
}
 
function isInCircle(x, y, cx, cy, diam) {
  let dx = x - cx;
  let dy = y - cy;
  return dx * dx + dy * dy <= diam * diam / 4;
}

function rectangleMode(mode) {
  if (mode !== undefined) {
    rectangleMode.mode = mode;
  }
  return rectangleMode.mode;
}
 
function rectCircCol(rx, ry, w, h, theta, cx, cy, diam) {
  if (theta) {
    var r = rotatePoint(cx - rx, cy - ry, theta);
    cx = r.x + rx;
    cy = r.y + ry;
  }

  if (rectangleMode.mode == CORNERS) {
    w -= rx;
    h -= ry;
  } else if (rectangleMode.mode == CENTER) {
    rx -= w / 2;
    ry -= h / 2;
  }

  let closestX = constrain(cx, rx, rx + w);
  let closestY = constrain(cy, ry, ry + h);
  return isInCircle(closestX, closestY, cx, cy, diam);
}

function circCircCol(x1, y1, diam1, x2, y2, diam2) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  let dist2 = dx * dx + dy * dy;
  let sum = (diam1 + diam2) / 2;
  
  return dist2 <= sum * sum;
}