const acordeonBotao = document.querySelectorAll('.acordeon .botao');

acordeonBotao.forEach((botao)=>{
    botao.addEventListener('click', (e) => {
        const acordeon = botao.parentElement
        const isOpen = acordeon.classList.contains('open')
        if(isOpen){
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})