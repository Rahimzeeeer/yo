document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("surprise.html")) { // Vérifie si on est sur la page surprise.html
        const papers = document.querySelectorAll('.paper');
        let highestZ = 1;

        papers.forEach((paper, index) => {
            paper.style.position = "absolute";
            paper.style.zIndex = index + 1;
            paper.style.left = `${10 + index * 20}px`;
            paper.style.top = `${10 + index * 20}px`;

            paper.addEventListener("mousedown", function (e) {
                e.preventDefault();
                let offsetX = e.clientX - paper.getBoundingClientRect().left;
                let offsetY = e.clientY - paper.getBoundingClientRect().top;

                paper.style.zIndex = highestZ++;

                function moveAt(pageX, pageY) {
                    let newX = pageX - offsetX;
                    let newY = pageY - offsetY;

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

            paper.ondragstart = () => false;
        });
    }
});








