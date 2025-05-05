let cookie = document.getElementById("cookie");
let counter = 0;


cookie.addEventListener("click", ()=> {
    counter++;
    document.getElementById("clicker__counter").textContent = counter;
    if (counter%2 != 0) {
        cookie.width = 250;
    }
    else {
        cookie.width = 200;
    }
})