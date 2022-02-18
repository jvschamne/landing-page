let navBar = document.querySelector('#navbar')
let container = document.querySelector('#container1')
let loginPopup = document.querySelector('#login-popup')
const close = document.getElementById('close')    

close.addEventListener('click', () => {
    navBar.classList.remove('borrado')
    container.classList.remove('borrado')
    loginPopup.classList.add('hidden')
})

function login(){
    navBar.classList.add('borrado')
    container.classList.add('borrado')
    loginPopup.classList.remove('hidden')
    loginPopup.classList.add('pop-up-animation')
}

let botaoEntrar = document.querySelector('#botao2')

botaoEntrar.addEventListener('click', () => {
    let email = document.getElementById('e-mail').value
    let senha = document.getElementById('senha').value
    if(email == 'abc' && senha == '123'){
        window.location.replace("https://jvschamne.github.io/painel/painel.html");
    }
})
