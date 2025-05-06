let tab = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));

tab.forEach ((e, index) => {
    e.addEventListener("click", () => {
        e.closest(".tabs").querySelectorAll(".tab").forEach((tab) => {
            tab.classList.remove("tab_active")
        })
        e.classList.add("tab_active")
        e.closest(".tabs").querySelectorAll(".tab__content").forEach((el) => {
            el.classList.remove("tab__content_active")
        })
        tabContent[index].classList.add("tab__content_active")
    })
})