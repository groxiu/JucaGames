const botao = document.querySelectorAll('.list-item-link')

botao.forEach(btn => btn.addEventListener('click', filtrarJogos))


function filtrarJogos(){
    const botaElemento = document.getElementById(this.id)
    const elementoId = botaElemento.id
    if (elementoId === "todos") {

        buscarGames()
        
    } else{
       
        let jogosFiltrados = games.filter(jogos => jogos.category == elementoId)
        exibrJogosNaTela(jogosFiltrados)
    }
    }
    