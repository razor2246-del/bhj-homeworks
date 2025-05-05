let hasMole = Array.from(document.querySelectorAll(".hole"));
let counter = 0;
let miss = 0;
document.getElementById("dead").textContent = counter;
document.getElementById("lost").textContent = miss;

hasMole.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.classList.contains("hole_has-mole")) {
        counter++;
        console.log("22")
        if (counter == 10) {
            alert("Победа!")
            counter = 0;
            miss = 0;
        }
        document.getElementById("lost").textContent = miss;
        document.getElementById("dead").textContent = counter;
    }
        else {
            miss++;
            if (miss == 5) {
                alert("Вы проиграли!")
                counter = 0;
                miss = 0;
            }
            document.getElementById("lost").textContent = miss;
            document.getElementById("dead").textContent = counter;
        }
    })
})