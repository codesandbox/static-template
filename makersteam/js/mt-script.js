(navigator.sayswho = (function () {
  var b,
    c = navigator.userAgent,
    a =
      c.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
      [];
  return /trident/i.test(a[1])
    ? "IE " + ((b = /\brv[ :]+(\d+)/g.exec(c) || [])[1] || "")
    : "Chrome" === a[1] && null != (b = c.match(/\b(OPR|Edge)\/(\d+)/))
    ? b.slice(1).join(" ").replace("OPR", "Opera")
    : ((a = a[2]
        ? [a[1], a[2]]
        : [navigator.appName, navigator.appVersion, "-?"]),
      null != (b = c.match(/version\/(\d+)/i)) && a.splice(1, 1, b[1]),
      a.join(" "));
})()),
  $("#browserName").val(navigator.sayswho);
