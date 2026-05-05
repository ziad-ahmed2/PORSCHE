
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});