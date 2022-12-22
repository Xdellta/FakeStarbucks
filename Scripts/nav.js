// Search product
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
    console.log(searchInput.value);
})


// Burger menu worker
const burgerIcon = document.getElementById('burgerIcon');
const menu = document.getElementById('nav_menu');

burgerIcon.addEventListener('click',function() {
    burgerIcon.classList.toggle('menuActive');
    menu.classList.toggle('menuActive');

    // Remove menu if width > 1150px
    window.addEventListener('resize',function() {
        if (window.innerWidth > 1150) {
            burgerIcon.classList.remove('menuActive');
            menu.classList.remove('menuActive');
        }
    })
})