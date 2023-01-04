const form = document.querySelector('form')
const inputWeight  = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(" .modal .titlle span")
const modalBtnClose = document.querySelector(".modal button.close")
 
/*  fazendo o button funcionar pegando as informações */
form.onsubmit = function (event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber (weight) || notANumber (height)
    if(showAlertError){
        AlertError.open()
        return
    }

    AlertError.close()

    const result = IMC (weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerHTML = message
    modalWrapper.classList.add('open')

    
}

function notANumber(value){
    return isNaN(value) || value == ""
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
}

function IMC (weight, height){
    return (weight / ((height/100)**2)).toFixed(2)
}

const AlertError = {
    element: document.querySelector(".alert-error"),
    open(){
        AlertError.element.classList.add('open')
    },
    close(){
        AlertError.element.classList.remove('open')
    }
}