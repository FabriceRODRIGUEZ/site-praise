if (sessionStorage.getItem("praise_secret") != "CodePraise") {
    location.replace("connexion.html")
}

document.addEventListener("DOMContentLoaded", () => {
    let actualSongsNumber = document.querySelectorAll("div#chants_actuels button.chant").length
    document.querySelector("div#chants_actuels > h2 > span").innerText = actualSongsNumber
    
    let oldSongsNumber = document.querySelectorAll("div#anciens_chants button.chant").length
    document.querySelector("div#anciens_chants > h2 > span").innerText = oldSongsNumber
})