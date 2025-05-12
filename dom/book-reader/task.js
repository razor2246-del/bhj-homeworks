let fontSize = Array.from(document.querySelectorAll(".font-size"));
let p = Array.from(document.querySelectorAll("p"))

fontSize.forEach ((e) => {
    e.addEventListener("click", ()=> {
        fontSize.forEach((el)=> {
            el.classList.remove("font-size_active")
        })
        e.classList.add("font-size_active")
        event.preventDefault();
        p.forEach ((el) => {
            if (e.getAttribute("data-size") == "big") {
            el.setAttribute('class', 'book_fs-big'); 
        } else if (e.getAttribute("data-size") == "small") {
            el.setAttribute('class', 'book_fs-small');
        } else {
            el.setAttribute('class', 'book');
        }
        })
    })
})