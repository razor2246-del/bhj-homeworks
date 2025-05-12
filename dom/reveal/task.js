let block = Array.from(document.querySelectorAll(".reveal"))


block.forEach((e, index) => {
    document.addEventListener("scroll", ()=> {
        let rect = e.getBoundingClientRect();
        if (rect["bottom"] < 900 && rect["bottom"] > 200 ) {
            e.classList.add("reveal_active")
        } else {
            e.classList.remove("reveal_active")
        }
    })
})