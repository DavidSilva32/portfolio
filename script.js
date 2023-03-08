function mudarTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'flex') {
        burguer.style.width = "50px"
        burguer.style.borderRadius = "50%"
        burguer.style.backgroundColor = 'var(--menu)'
        burguer.style.color = 'white'
        itens.style.display = 'none'
    } else {
        burguer.style.width = "250px"
        burguer.style.borderRadius = "10px"
        burguer.style.backgroundColor = "aquamarine"
        burguer.style.color = 'black'
        itens.style.display = 'flex'
    }
}