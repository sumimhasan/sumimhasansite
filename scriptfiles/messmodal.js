document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".Messmodal-main");
    const openBtn = document.querySelector("#mess-modal");
    const closeBtn = document.querySelector(".Messmodal-close");

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

