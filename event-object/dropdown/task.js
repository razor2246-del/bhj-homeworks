let dropDownValue = Array.from(document.querySelectorAll(".dropdown__value"));
let link = Array.from(document.querySelectorAll(".dropdown__item"))


dropDownValue.forEach((element)=> {
    element.addEventListener("click", () => {
        element.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active")
        event.preventDefault();
    })})
    
    link.forEach ((element) => {
        element.addEventListener("click", () => {
            element.closest(".dropdown").querySelector(".dropdown__value").textContent = element.querySelector(".dropdown__link").textContent;
            console.log(element.querySelector(".dropdown__link").textContent)
            element.closest(".dropdown").querySelector(".dropdown__list").classList.remove("dropdown__list_active")
            event.preventDefault()
        })
    })