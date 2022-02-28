const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');


hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread")
    console.log(menu)
    console.log(hamburguer)
})


window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        console.log(e.target)
     menu.classList.toggle("spread")
    }
})