const btn = document.querySelector('nav button');
const menu = document.querySelector('.menu');
const btnclose = document.querySelector('.btnclose');
const out = document.querySelector('.menu>button');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

btnclose.addEventListener('click', () => {
    menu.classList.toggle('active');
});

out.addEventListener('click', () => {
    menu.classList.toggle('active');
});