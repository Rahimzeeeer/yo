document.addEventListener("DOMContentLoaded", () => {
    const papers = document.querySelectorAll('.paper');
    let highestZ = 1; // Permet de toujours mettre le post-it actif au-dessus des autres

    papers.forEach((paper, index) => {
        paper.style.position = "absolute"; // Assure qu'ils peuvent être déplacés
        paper.style.zIndex = index + 1; // Empile les papiers naturellement
        paper.style.left = `${10 + index * 20}px`; // Position initiale aléatoire mais visible
        paper.style.top = `${10 + index * 20}px`;

        paper.addEventListener("mousedown", function (e) {
            e.preventDefault();
            let offsetX = e.clientX - paper.getBoundingClientRect().left;
            let offsetY = e.clientY - paper.getBoundingClientRect().top;

            paper.style.zIndex = highestZ++; // Toujours au-dessus des autres quand déplacé

            function moveAt(pageX, pageY) {
                let newX = pageX - offsetX;
                let newY = pageY - offsetY;

                // Empêche que le post-it sorte de l'écran
                newX = Math.max(0, Math.min(window.innerWidth - paper.clientWidth, newX));
                newY = Math.max(0, Math.min(window.innerHeight - paper.clientHeight, newY));

                paper.style.left = `${newX}px`;
                paper.style.top = `${newY}px`;
            }

            function onMouseMove(e) {
                moveAt(e.pageX, e.pageY);
            }

            document.addEventListener("mousemove", onMouseMove);

            function stopMoving() {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", stopMoving);
            }

            document.addEventListener("mouseup", stopMoving);
        });

        paper.ondragstart = () => false; // Empêche le drag natif
    });
});








