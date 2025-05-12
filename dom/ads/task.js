let counter = 0;
let card = Array.from(document.querySelectorAll(".card"))



function timer () {
    ++counter
            if(counter == document.querySelector(".rotator").closest(".card").querySelectorAll(".rotator__case").length) {
        counter = 0;
    }
    card.forEach ((el, i) => {
    card[i].querySelector(".rotator").closest(".card").querySelectorAll(".rotator__case").forEach ((e)=> {
        e.classList.remove("rotator__case_active")
})
    card[i].querySelector(".rotator").closest(".card").querySelectorAll(".rotator__case")[counter].classList.add("rotator__case_active")
}

)}


   setInterval(timer, 1000);



