let menuBtn = Array.from(document.querySelectorAll(".menu__link"));

menuBtn.forEach ((element) => { {
    element.addEventListener("click", ()=> {
        event.preventDefault();
    })}
})