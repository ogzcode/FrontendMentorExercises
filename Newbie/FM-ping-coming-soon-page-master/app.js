const inputNode = document.querySelector(".form__input");
const mainNode = document.querySelector(".form__error");

function clearForm(){
    inputNode.value = "";
    if (inputNode.classList.contains("form__input--show")){
        inputNode.classList.remove("form__input--show");
        mainNode.classList.remove("form__error--show");
    }
}

function addShow(){
    inputNode.classList.add("form__input--show");
    mainNode.classList.add("form__error--show");
}