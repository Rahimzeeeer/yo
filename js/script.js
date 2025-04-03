document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    if (noButton) {
        noButton.addEventListener("mouseover", function() {
            this.style.position = "absolute";
            this.style.left = Math.random() * 80 + "vw";
            this.style.top = Math.random() * 80 + "vh";
        });
    }

    const yesButton = document.getElementById("yes");
    if (yesButton) {
        yesButton.addEventListener("click", function() {
            window.location.href = "mystere.html"; // redirection vers mystere.html
        });
    }

    const submitCode = document.getElementById("submitCode");
    if (submitCode) {
        submitCode.addEventListener("click", function() {
            let code = document.getElementById("code").value;
            let chestImage = document.getElementById("chestImage");
            let chestSound = document.getElementById("chestSound");

            if (code === "7") {
                // Vérification que l'image du coffre existe
                if (chestImage) {
                    chestImage.src = "../images/coffre-ouvert.png"; // Assurez-vous que le chemin de l'image est correct
                    console.log("Coffre ouvert !");
                } else {
                    console.error("Image du coffre introuvable !");
                }

                // Vérification que le son existe avant de le jouer
                if (chestSound) {
                    chestSound.play();
                    console.log("Son joué !");
                } else {
                    console.error("Son introuvable !");
                }

                // Redirection après 2 secondes
                setTimeout(() => {
                    console.log("Redirection vers la page de surprise...");
                    window.location.href = "surprise.html"; // Redirection vers surprise.html
                }, 2000);
            } else {
                // Affichage d'un message d'erreur si le code est incorrect
                document.getElementById("message").innerText = "Mauvais code, réessaie !";
            }
        });
    }
});










