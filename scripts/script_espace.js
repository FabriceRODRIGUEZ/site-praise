if (sessionStorage.getItem("praise_secret") != "CodePraise") {
    location.replace("connexion.html")
}

document.addEventListener("DOMContentLoaded", () => start())


function start() {
    const audios = document.querySelectorAll("audio.enregistrement")
    audios.forEach((audio) => audio.volume = 0.5)
}