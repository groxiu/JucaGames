const menu = document.querySelector('.list-menu')
const aparecerMenu = document.querySelector('.rotulo')

aparecerMenu.addEventListener('click',()=>{
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
})

