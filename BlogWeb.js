let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bi-backspace-fill');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('bi-backspace-fill');
    searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
    searchIcon.classList.toggle('bi-backspace-fill');
    searchForm.classList.toggle('active');
    menu.classList.remove('bi-backspace-fill');
    navbar.classList.remove('active');
}


window.onscroll = () =>{
    menu.classList.remove('bi-backspace-fill');
    navbar.classList.remove('active');
    searchIcon.classList.remove('bi-backspace-fill');
    searchForm.classList.remove('active');
}
