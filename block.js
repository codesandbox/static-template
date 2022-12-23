window.onload = function () {
  const ethereumButton = document.querySelector(".enableEthereumButton");

  ethereumButton.addEventListener("click", () => {
    if (typeof window.ethereum !== "undefined") {
      getAccount();
    } else {
      alert("Please install MetaMask");
    }
  });
};

async function getAccount() {
  const showAccount = document.querySelector(".showAccount");
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
