document.addEventListener("DOMContentLoaded", () => start())
let toastTimeout


function start() {
    const codeInput = document.querySelector("input#code_secret")
    const submitButton = document.querySelector("button#validation")

    submitButton.addEventListener("click", () => submit(codeInput))
    codeInput.addEventListener("keyup", (event) => {
        if (event.key == "Enter") submit(codeInput)
    })
}

function submit(codeInput) {
    const secretCode = codeInput.value
    const toast = document.querySelector("div#notification")
    clearTimeout(toastTimeout)

    if (secretCode == "CodePraise") {
        sessionStorage.setItem("praise_secret", "CodePraise")
        location.replace("espace.html")
    }
    
    else if (!secretCode) {
        toast.innerText = "Code secret manquant"
        toast.classList.add("affiche")
        toastTimeout = setTimeout(() => toast.classList.remove("affiche"), 3000)
    }
    
    else {
        codeInput.value = ""
        toast.innerText = "Code secret invalide"
        toast.classList.add("affiche")
        toastTimeout = setTimeout(() => toast.classList.remove("affiche"), 3000)
    }
}