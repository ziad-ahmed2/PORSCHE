const btn = document.getElementById("toggleBtn");

if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light-mode");
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
});


function openNav() {
    document.getElementById("mySidenav").style.width = "260px";

    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.visibility = "visible";
}

window.addEventListener("scroll", () => {
    let header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#323232";
    } else {
        header.style.background = "rgba(50,50,50,0.7)";
    }
});
const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {
    let start = 0;
    let end = parseInt(counter.innerText);

    let interval = setInterval(() => {
        start++;
        counter.innerText = start + "+";

        if(start >= end){
            clearInterval(interval);
        }
    }, 20);
});