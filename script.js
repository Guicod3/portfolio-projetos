function ativaletra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');