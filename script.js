document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btnCriptografar').addEventListener('click', criptografar);
    document.getElementById('btnDescriptografar').addEventListener('click', descriptografar);
    document.getElementById('btnCopiar').addEventListener('click', copiar);
});

function criptografar() {
    let texto = document.querySelector('.texto__principal').value;
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.querySelector('.texto__resultado').value = textoCriptografado;
}

function descriptografar() {
    let texto = document.querySelector('.texto__principal').value;
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector('.texto__resultado').value = textoDescriptografado;
}

function copiar() {
    let texto = document.querySelector('.texto__resultado');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}
