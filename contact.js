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


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[placeholder='Full Name']").value;
        const email = form.querySelector("input[type='email']").value;
        const phone = form.querySelector("input[type='tel']").value;
        const subject = form.querySelector("input[placeholder='Subject']").value;
        const message = form.querySelector("textarea").value;

        if (!name || !email || !phone || !message) {      
            alert("Please fill all required fields");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter a valid email");
            return;
        }
        alert("Message sent successfully ");
        form.reset();
    });
});
