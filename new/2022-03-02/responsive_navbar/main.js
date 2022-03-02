const ham = document.querySelector('.ham');
const menu =document.querySelector('.menu');
const icons =document.querySelector('.icons');

ham.addEventListener('click', () => {
	menu.classList.toggle('active');
	icons.classList.toggle('active');
});