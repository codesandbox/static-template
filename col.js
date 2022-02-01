/* AAAAH WHAT AM I DOING WHY AM I USING IDs JUST TO AVOID JQUERY HELP HELP IM GOING INSANE FROM QUARANTINE HELP HELP */

function circCircCol(x1, y1, diam1, x2, y2, diam2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var dist2 = dx * dx + dy * dy;
  var sum = (diam1 + diam2) / 2;
  return dist2 <= sum * sum;
};