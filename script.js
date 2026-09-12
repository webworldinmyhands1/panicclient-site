/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =================================
   CURSOR GLOW
================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


window.addEventListener(
    "pointermove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =================================
   CLIENT 3D TILT
================================= */

const clientUI =
    document.querySelector(".client-ui");


if (clientUI) {

    clientUI.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                clientUI.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 10;

            const rotateX =
                ((y / rect.height) - 0.5) * -7;

            clientUI.style.transform =
                `perspective(1400px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)
                 translateY(-7px)`;

        }
    );


    clientUI.addEventListener(
        "mouseleave",
        () => {

            clientUI.style.transform =
                `perspective(1400px)
                 rotateY(-8deg)
                 rotateX(3deg)`;

        }
    );

}



/* =================================
   FAQ
================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach((item) => {

    const button =
        item.querySelector(".faq-question");


    button.addEventListener(
        "click",
        () => {

            const alreadyOpen =
                item.classList.contains("open");


            faqItems.forEach((other) => {

                other.classList.remove("open");

            });


            if (!alreadyOpen) {

                item.classList.add("open");

            }

        }
    );

});



/* =================================
   NAVBAR
================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(2,5,10,.9)";

        } else {

            navbar.style.background =
                "rgba(2,5,10,.65)";

        }

    }
);



/* =================================
   SMOOTH BUTTON FEEDBACK
================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transition =
                "transform .25s ease, box-shadow .25s ease";

        }
    );

});
