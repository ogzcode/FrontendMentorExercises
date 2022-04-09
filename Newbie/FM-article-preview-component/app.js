const btn = document.querySelector("#icon");
const shareContent = document.querySelector(".share");

btn.addEventListener("click", () => {
    if (shareContent.style.display == "flex"){
        shareContent.style.display = "none";
    }
    else {
        shareContent.style.display = "flex";
    }
});
