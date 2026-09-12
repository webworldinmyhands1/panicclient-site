/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;

    cursorGlow.style.top = `${event.clientY}px`;

});


/* =========================
   CLIENT WINDOW TILT
========================= */

const clientWindow =
    document.querySelector(".client-window");


if (clientWindow) {

    clientWindow.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                clientWindow.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -6;

            clientWindow.style.transform =
                `perspective(1200px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)
                 translateY(-5px)`;

        }
    );


    clientWindow.addEventListener(
        "mouseleave",
        () => {

            clientWindow.style.transform =
                `perspective(1200px)
                 rotateY(-7deg)
                 rotateX(3deg)`;

        }
    );

}


/* =========================
   NAVBAR SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(3, 5, 10, 0.88)";

    } else {

        navbar.style.background =
            "rgba(3, 5, 10, 0.65)";

    }

});
