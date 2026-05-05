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

document.addEventListener("DOMContentLoaded", function () {

const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("passwordField");

togglePassword.onclick = function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordField.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }
};

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const signupFields = document.getElementById("signupFields");
const phoneField = document.getElementById("phoneField");
const submitBtn = document.getElementById("submitBtn");
let isSignup = false;


loginTab.onclick = function () {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    signupFields.classList.add("hidden");
    phoneField.classList.add("hidden");

    submitBtn.textContent = "LOGIN";
    isSignup = false;
};

signupTab.onclick = function () {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    signupFields.classList.remove("hidden");
    phoneField.classList.remove("hidden");

    submitBtn.textContent = "REGISTER";
    isSignup = true;
};

const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = passwordField.value;

    if (!email || !password) {
        alert("Fill all data");
        return;
    }

    if (isSignup) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phone = document.getElementById("phone").value;
        const title = document.getElementById("title").value;

        if (!firstName || !lastName || !phone) {
            alert("Fill all data");
            return;
        }

        localStorage.setItem(email, password);
        localStorage.setItem("currentUser", email);
        localStorage.setItem(email + "_name", firstName + " " + lastName);
        localStorage.setItem(email + "_phone", phone);
        localStorage.setItem(email + "_title", title);

        alert("Account created");
        
        signupTab.classList.remove("active");
        loginTab.classList.add("active");
        signupFields.classList.add("hidden");
        phoneField.classList.add("hidden");
        submitBtn.textContent = "LOGIN";
            isSignup = false;
        

    } else {
        const saved = localStorage.getItem(email);

        if (!saved) {
            alert("Account not found");
        } else if (saved !== password) {
            alert("Wrong password");
        } else {
            localStorage.setItem("currentUser", email);
            alert("Login successful");
            window.location.href="index.html"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        }
    }
});

function showUser() {
    const user = localStorage.getItem("currentUser");
}

window.openAccount = function () {
    const user = localStorage.getItem("currentUser");
    if (!user) {
        alert("You are not logged in");
        return;
    }

    document.getElementById("accountBox").classList.remove("hidden");

    document.getElementById("accEmail").textContent = "Email: " + user;

    const name = localStorage.getItem(user + "_name") || "---";
    const phone = localStorage.getItem(user + "_phone") || "---";
    const title = localStorage.getItem(user + "_title") || "---";

    document.getElementById("accName").textContent = "Name: " + name;
    document.getElementById("accPhone").textContent = "Phone: " + phone;
    document.getElementById("accTitle").textContent = "Title: " + title;
};

window.closeAccount = function () {
    document.getElementById("accountBox").classList.add("hidden");
};
});