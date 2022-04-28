const container = document.getElementById("container");
const lastButton = document.getElementById("last");

lastButton.addEventListener("click", () => {
    container.removeChild(document.getElementsByClassName("interactive-component")[0]);
    container.innerHTML = 
    `
    <div class="result">
        <img src="img/illustration-thank-you.svg">
        <span class="rate">You selected 4 out of 5</span>
        <h2>Thank you!</h2>
        <p class="content">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
        </p>
    </div>
    `
});