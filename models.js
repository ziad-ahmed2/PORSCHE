const button = document.getElementById("light-button");

if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light-mode");
}

button.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
});




document.addEventListener("DOMContentLoaded", function() {

    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");
    window.openNav = function() {
        sidenav.style.width = "250px";
        overlay.classList.add("active");
    };

    window.closeNav = function() {
        sidenav.style.width = "0";
        overlay.classList.remove("active");
    };

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });
    });
    window.toggleNav = function() {
        sidenav.classList.toggle("active");
        overlay.classList.toggle("active");
    };

});