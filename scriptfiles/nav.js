 const hamberger = document.querySelector(".hamberger");
const navlinks = document.querySelector(".navlinks");
const others = document.querySelector(".others");

hamberger.addEventListener("click", () => {
    const isMenuOpen = hamberger.firstChild.classList.contains("fa-bars");
    
    hamberger.firstChild.classList.toggle("fa-bars", !isMenuOpen);
    hamberger.firstChild.classList.toggle("fa-times", isMenuOpen);

    navlinks.style.height = isMenuOpen ? "250px" : "0";
    others.style.height = isMenuOpen ? "max-content" : "0";
});
