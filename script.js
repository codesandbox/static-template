const config = {
  fps: 10,
  qrbox: 250
};
const html5QrCode = new Html5Qrcode("qr-reader", config);
const view = document.querySelector(".startView");
const close = document.querySelector("#close");
const content = document.querySelector("#qr-content");
const result = document.querySelector("#qr-result");
const error = document.querySelector("#error");
const qrSms = document.querySelector("#qr-sms");
const qrTel = document.querySelector("#qr-tel");
const qrUrl = document.querySelector("#qr-url");
const qrTxt = document.querySelector("#qr-txt");
const icos = document.querySelectorAll(".ico");

close.addEventListener("click", (event) => {
  content.className += ` close`;
  startSacan();
  icos.forEach(function (ico) {
    ico.style.display = "none";
  });
});

const WriteContent = (qrCodeMessage) => {
  stopSacan();
  const msg = qrCodeMessage.toLowerCase();
  if (msg.startsWith("smsto")) {
    result.innerHTML = `<div><a href="${qrCodeMessage}">${msg.replace(
      "smsto:",
      ""
    )}</a></div>`;
    qrSms.style.display = "inline-block";
  } else if (msg.startsWith("tel")) {
    result.innerHTML = `<div><a href="${qrCodeMessage}">${msg.replace(
      "tel:",
      ""
    )}</a></div>`;
    qrTel.style.display = "inline-block";
  } else if (msg.startsWith("http")) {
    result.innerHTML = `<div><a href="${qrCodeMessage}">${msg.replace(
      /^(http|https):\/\//,
      ""
    )}</a></div>`;
    qrUrl.style.display = "inline-block";
  } else {
    result.innerHTML = `<div>${qrCodeMessage}</div>`;
    qrTxt.style.display = "inline-block";
  }
};
const startSacan = () => {
  html5QrCode
    .start(
      { facingMode: "environment" }, // retreived in the previous step.
      config,
      (qrCodeMessage) => {
        view.style.display = "none";
        content.className = content.className.replace("close", "");
        WriteContent(qrCodeMessage);
        console.log(`QR Code detected: ${qrCodeMessage}`);
      },
      (errorMessage) => {}
    )
    .catch((err) => {
      error.style.display = "flex";
      console.log(`Unable to start scanning, error: ${err}`);
    });
};
const stopSacan = () => {
  html5QrCode.stop();
};
window.addEventListener("load", startSacan, true);
