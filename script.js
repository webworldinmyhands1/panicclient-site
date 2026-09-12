// =========================
// FAQ
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isOpen = item.classList.contains("open");

        faqItems.forEach((other) => {
            other.classList.remove("open");
        });

        if (!isOpen) {
            item.classList.add("open");
        }

    });

});


// =========================
// CLIENT 3D EFFECT
// =========================

const clientWindow =
    document.querySelector(".client-window");

if (clientWindow && window.innerWidth > 700) {

    clientWindow.addEventListener("mousemove", (event) => {

        const rect =
            clientWindow.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width;

        const y =
            (event.clientY - rect.top) / rect.height;

        const rotateY =
            (x - 0.5) * 8;

        const rotateX =
            (y - 0.5) * -5;

        clientWindow.style.transform =
            `perspective(1200px)
             rotateY(${rotateY}deg)
             rotateX(${rotateX}deg)
             translateY(-7px)`;

    });

    clientWindow.addEventListener("mouseleave", () => {

        clientWindow.style.transform =
            `perspective(1200px)
             rotateY(-7deg)
             rotateX(2deg)`;

    });

}


// =========================
// NAVBAR ON SCROLL
// =========================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(3, 7, 13, 0.92)";

    } else {

        navbar.style.background =
            "rgba(3, 7, 13, 0.72)";

    }

});
