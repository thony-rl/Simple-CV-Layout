const menu = document.querySelector('.menu');
const navigationmenu = document.querySelector('.navigation-menu');

menu.addEventListener('click', ()=>{
    navigationmenu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(navigationmenu.classList.contains('spread') && e.target != navigationmenu && e.target != menu){
        navigationmenu.classList.toggle('spread')
    }
})

