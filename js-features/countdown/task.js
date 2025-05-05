let count = 59;
document.getElementById("timer").textContent = count;

function timer () {
    count--
    document.getElementById("timer").textContent = count;
    if (count == -1) {
        alert("Вы победили в конкурсе")
        count = 59;
    }
}

setInterval(timer, 1000);