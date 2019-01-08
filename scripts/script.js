function abrirform(e) {
    e.parentNode.classList.add('active')

}

function cerrarform(e) {

    if (e.value.length <= 0) {
        e.parentNode.classList.remove('active')


    } else if (e.value.length >= 0) {
        e.parentNode.classList.add('active')


    }


}