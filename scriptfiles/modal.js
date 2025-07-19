document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal-main");
    const openBtn = document.querySelector("#contact-modal");
    const closeBtn = document.querySelector(".modal-close");

    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
        console.log("Modal opened");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Optional: close modal if clicked outside content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});

