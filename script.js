const inputText = document.getElementById("inputText");
const encodeButton = document.getElementById("encodeButton");
const decodeButton = document.getElementById("decodeButton");
const outputText = document.getElementById("outputText");
const copyButton = document.getElementById("copyButton");

encodeButton.addEventListener("click", () => {
  const encodedText = btoa(inputText.value);
  outputText.value = encodedText;
  toggleCopyButton(true);
});

decodeButton.addEventListener("click", () => {
  const decodedText = atob(inputText.value);
  outputText.value = decodedText;
  toggleCopyButton(true);
});

outputText.addEventListener("input", () => {
  toggleCopyButton(false);
});

copyButton.addEventListener("click", () => {
  outputText.select();
  document.execCommand("copy");
});

function toggleCopyButton(enabled) {
  copyButton.disabled = !enabled;
}
