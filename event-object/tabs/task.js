let tab = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));

tab.forEach ((e, index) => {
    e.addEventListener("click", () => {
        e.classList.toggle("tab_active")
    })
})