function generatePassword() {
  const length = document.getElementById("password-length").value;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/";

  let characters = "";
  let password = "";

  if (includeUppercase) {
    characters += uppercaseLetters;
  }

  if (includeLowercase) {
    characters += lowercaseLetters;
  }

  if (includeNumbers) {
    characters += numbers;
  }

  if (includeSymbols) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  const generatedPasswordInput = document.getElementById("generated-password");
  const copyButton = document.getElementById("copy-button");

  generatedPasswordInput.value = password;
  copyButton.disabled = false;
}

function copyPassword() {
  const generatedPasswordInput = document.getElementById("generated-password");

  generatedPasswordInput.select();
  generatedPasswordInput.setSelectionRange(0, 99999);
  document.execCommand("copy");

  const copyButton = document.getElementById("copy-button");
  copyButton.innerText = "Senha Copiada!";
  copyButton.disabled = true;
  setTimeout(() => {
    copyButton.innerText = "Copiar Senha";
    copyButton.disabled = false;
  }, 3000);
}
