/* =========================================
   PAGE CONTROL
========================================= */

function showPage(pageNumber) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(
            "page" + pageNumber
        );


    selectedPage.classList.add("active");

}


/* =========================================
   START SURPRISE
========================================= */
function startSurprise() {

    showPage(2);

    let progress = 0;

    const progressBar = document.getElementById("progress");
    const nextButton = document.getElementById("cleanNext");

    // Progress bar available असेल तरच use करा
    if (progressBar) {
        progressBar.style.width = "0%";
    }

    // Next button सुरुवातीला hide करा
    if (nextButton) {
        nextButton.classList.add("hidden");
    }

    const loading = setInterval(function () {

        progress += 2;

        if (progressBar) {
            progressBar.style.width = progress + "%";
        }

        if (progress >= 100) {

            clearInterval(loading);

            if (nextButton) {
                nextButton.classList.remove("hidden");
            }

            // 1 second नंतर पुढच्या page वर
            setTimeout(function () {
                showPage(3);
            }, 1000);
        }

    }, 100);
}


/* =========================================
   FLOATING PARTICLES
========================================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    const symbols = [
        "♥",
        "✦",
        "•",
        "✧"
    ];


    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (5 + Math.random() * 8) + "s";


        particle.style.animationDelay =
            Math.random() * 8 + "s";


        particle.style.fontSize =
            (8 + Math.random() * 15) + "px";


        container.appendChild(
            particle
        );

    }

}


createParticles();