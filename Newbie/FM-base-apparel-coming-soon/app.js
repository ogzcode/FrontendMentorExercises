const btn = document.querySelector("button");
const icon = document.querySelector(".error-icon");
const message = document.querySelector(".error-message");
const form = document.querySelector(".form");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
    form.classList.add("border-red");
    message.classList.add("show");
    icon.classList.add("show");
    input.value = "";
});

input.addEventListener("input", () => {
    form.classList.remove("border-red");
    message.classList.remove("show");
    icon.classList.remove("show");
});
