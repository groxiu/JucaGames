let games = []
let apiGames = 'games.json'
const sectionGames = document.querySelector('#games')

buscarGames()

async function buscarGames(){
    const res = await fetch(apiGames)
    games = await res.json()
    exibrJogosNaTela(games)
    
}

function exibrJogosNaTela(listaDeJogos){
    sectionGames.innerHTML=''
    listaDeJogos.forEach(games => {
        sectionGames.innerHTML += `
        
        <div class="game_item">
            <img src="${games.cover_image}" class="slide-img">
                <h2 class="jogo-nome">${games.name}</h2>
                
        </div>

        `
        
    });

}