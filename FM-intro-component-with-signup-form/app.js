const btn = document.querySelector("button");
const icons = document.querySelectorAll("img");
const errors = document.querySelectorAll(".error-message");
const inputs = document.querySelectorAll("input");
const inputContainers = document.querySelectorAll(".input");

btn.addEventListener("click", () => {
    inputs.forEach((input, index) => {
        if (!input.value){
            errors[index].classList.add("show");
            icons[index].classList.add("show");
            inputContainers[index].classList.add("show-border");
        }
        else {
            input.value = "";
        }
    });
});

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        errors[index].classList.remove("show");
        icons[index].classList.remove("show");
        inputContainers[index].classList.remove("show-border")
    });
});