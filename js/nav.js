const btn = document.querySelector('nav button');
const menu = document.querySelector('.menu');
const btnclose = document.querySelector('.nav button');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

btnclose.addEventListener('click', () => {
    menu.classList.toggle('active');
});