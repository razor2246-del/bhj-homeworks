let modal = document.getElementById("modal_main")
let modalSuccess = document.getElementById("modal_success")
let closeBtn = Array.from(document.querySelectorAll(".modal__close_times"))
let successBtn = document.querySelector(".btn")

window.onload = function() {
    modal.classList.add("modal_active");
};

closeBtn.forEach ((element) => {
    element.addEventListener("click", ()=> {
        modal.classList.remove("modal_active");
        modalSuccess.classList.remove("modal_active");
    })

})

successBtn.addEventListener("click", ()=> {
    modal.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
} )