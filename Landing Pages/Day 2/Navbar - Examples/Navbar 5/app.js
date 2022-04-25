const mainMenu = document.getElementById('mainMenu');
const openMenu = document.getElementById('openMenu');


openMenu.addEventListener('click',function(){
    mainMenu.classList.toggle('mainMenu');
})