const nextmod = document.getElementById('sign_up');
const comein = document.getElementById('modal_in');
const comeout = document.getElementById('modal_out');
const prevmod = document.getElementById('sign_in');
const closebutton = document.querySelector('.close-butn');
const backbutton = document.querySelector('#back_went');

nextmod.addEventListener('click', () => {
    comeout.style.display = 'block';
    comein.style.display = 'none';

});

closebutton.addEventListener('click', () => {
    modal.style.display = 'none';
    comein.style.display = 'block';
    comeout.style.display = 'none';
});

backbutton.addEventListener('click', () => {
    comein.style.display = 'block';
    comeout.style.display = 'none';
});