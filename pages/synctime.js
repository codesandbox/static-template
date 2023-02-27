wireframes.synctime = `
  <div class="syncTimeTest" style="color: #000">HEYAAA</div>
`;

pages.synctime = async function () {
  pageHolder.querySelector(".syncTimeTest").textContent = "HEY";
  setInterval(() => {
    pageHolder.querySelector(".syncTimeTest").textContent = getEpoch();
  }, 1);
};
