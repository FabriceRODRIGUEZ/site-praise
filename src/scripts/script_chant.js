if (sessionStorage.getItem("praise_secret") != "CodePraise") {
    location.replace("../connexion.html")
}

document.addEventListener("DOMContentLoaded", () => {
    const enregistrement = document.querySelector("audio")
    enregistrement.volume = 0.5
})