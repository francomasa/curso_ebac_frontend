const form = document.getElementById('form-exercicio');
const containerMessage = document.querySelector('.success-message');
function validaNumeros(nroA, nroB){
    return nroA < nroB ? true : false;
}
/*
addEventListener
 - click: ao clicar em um botão
 - submit: ao enviar un formulario
 - change: ao mudar o conteudo de um input
 - keyup
*/
form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const mensageSucesso = `Certo o Numero A: <b>${numeroA.value}</b> e menor que o numero B: <b>${numeroB.value}</b>`;
    formEValido = validaNumeros(parseFloat(numeroA.value), parseFloat(numeroB.value));
    if(formEValido){  
        containerMessage.innerHTML = mensageSucesso;
        containerMessage.style.display = 'block';
        numeroA.value = '';
        numeroB.value = '';
        document.querySelector('.error-message').style.display = 'none';
    }else{
        const errorMessage = document.querySelector('.error-message');
        errorMessage.style.display = 'block';
        containerMessage.style.display = 'none'
    }
})