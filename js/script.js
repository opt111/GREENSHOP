const Button = document.querySelector('.side-button')
const Div = document.querySelector('.wraper-sale')



const burger = document.querySelector('.burger-menu')
const list = document.querySelector('.nav-list')
const Close = document.getElementById('burger-close-menu')



if (window.innerWidth < 768) {
Button.addEventListener('click', function () {
  Div.classList.toggle('show');
});

burger.addEventListener('click', function () {
  list.classList.toggle('open')
  Close.classList.add('block')
});


Close.addEventListener('click', function () {
  list.classList.remove("open")
  Close.classList.remove('block')
});
}
