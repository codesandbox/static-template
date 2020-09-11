const form = document.getElementById('form');

const stickersOptions = document.getElementById('stickersOptions');

const stickersQtd = document.getElementById('stickersQtd');
const buttonAdd = document.getElementById('buttonAdd');
const buttonSub = document.getElementById('buttonSub');

const stickersQtdValidation = () => {
  if (stickersQtd.value) {
    buttonSub.disabled = false;
  } else {
    buttonSub.disabled = true;
  }
};

buttonAdd.onclick = (e) => {
  e.preventDefault();
  if (stickersQtd.value === '') {
    stickersQtd.value = '0';
    buttonSub.disabled = true;
  }
  stickersQtd.value = parseInt(stickersQtd.value) + 1;
  buttonSub.disabled = false;
  stickersQtd.classList.remove('error');
};

buttonSub.onclick = (e) => {
  e.preventDefault();

  if (stickersQtd.value <= 1) {
    buttonSub.disabled = true;
  }

  stickersQtd.value = parseInt(stickersQtd.value) - 1;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const sticker = document.querySelectorAll('input[type="checkbox"]:checked');
  const observacoes = document.getElementById('observacoes').value;
  const successMsg = document.getElementById('successMsg');

  const stickers = [];

  sticker.forEach((checkbox) => {
    if (checkbox.value === 'react' || checkbox.value === 'vue' || checkbox.value === 'angular') {
      stickers.push(checkbox.value);
    }
  });

  if (Object.keys(stickers).length === 0) {
    stickersOptions.classList.add('error');

    return false;
  }

  stickersOptions.classList.remove('error');

  if (stickersQtd.value <= 0 || stickersQtd.value === null) {
    stickersQtd.classList.add('error');
    stickersQtd.value = 0;
    return false;
  }

  const data = JSON.stringify({
    stickers,
    stickersQtd: stickersQtd.value,
    observacoes,
  });

  // fetch post request
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then(() => {
      successMsg.classList.add('success');
      setTimeout(() => {
        form.reset();
        successMsg.classList.remove('success');
      }, 3000);
    });
});
