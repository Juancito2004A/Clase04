function ejecutarCodigoNoSeguro(codigo) {
    return eval(codigo);
}

function mostrarContenidoNoSeguro(usuario) {
    document.write(usuario);
}

function insertarContenidoNoSeguro(elemento, contenido) {
    elemento.innerHTML = contenido;
}