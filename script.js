/* =========================================
   PERSONAL INFORMATION
========================================= */

const herName = "Archelle";
const yourName = "Jervy";


/* =========================================
   INSERT NAME EVERYWHERE
========================================= */

document.getElementById("HerName").textContent = herName;

document.getElementById("finalName").textContent =
    herName + " ❤️";

document.getElementById("footerName").textContent =
    herName;


/* =========================================
   INTRO
========================================= */

const startButton =
    document.getElementById("startButton");

const intro =
    document.getElementById("intro");

const mainContent =
    document.getElementById("mainContent");


startButton.addEventListener("click", () => {

    intro.classList.add("hide");

    mainContent.classList.remove("hidden");

    createHeartBurst(20);

});


/* =========================================
   SURPRISE BUTTON
========================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const finalSurprise =
    document.getElementById("finalSurprise");


surpriseButton.addEventListener("click", () => {

    finalSurprise.classList.remove("hidden");

    createHeartBurst(50);

    createConfetti(100);

    setTimeout(() => {

        finalSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

});


/* =========================================
   FLOATING HEARTS
========================================= */

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💞"
];


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


/* Create hearts automatically */

setInterval(() => {

    if (!intro.classList.contains("hide")) {
        return;
    }

    createHeart();

}, 1500);


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 70);

    }

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const confettiSymbols = [
        "🎉",
        "✨",
        "💖",
        "💕",
        "⭐",
        "🎊"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            "-30px";

        piece.style.fontSize =
            Math.random() * 15 + 15 + "px";

        piece.style.zIndex = "1000";

        piece.style.pointerEvents = "none";

        piece.textContent =
            confettiSymbols[
                Math.floor(
                    Math.random() *
                    confettiSymbols.length
                )
            ];


        const duration =
            Math.random() * 3 + 3;


        piece.style.transition =
            `transform ${duration}s linear,
             opacity ${duration}s linear`;


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.style.transform =
                `translateY(110vh)
                 rotate(${Math.random() * 1000}deg)`;

            piece.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            piece.remove();

        }, duration * 1000 + 500);

    }

}