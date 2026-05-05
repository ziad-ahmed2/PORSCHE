function toggleTheme() {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem("theme", isLight);
}
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "true") {
    document.body.classList.add("light-theme");
}



function openNav() {
    document.getElementById("mySidenav").style.width = "260px";

    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.visibility = "visible";
}

let selected = [];

function showCars() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("cars-page").style.display = "block";
}

function closeModal() {
    document.getElementById("cars-page").style.display = "none";
    document.getElementById("start-page").style.display = "block";
}

function toggleCar(element, name) {

    if (selected.includes(name)) {
        selected = selected.filter(car => car !== name);
        element.classList.remove("selected");
    } else {
        if (selected.length >= 2) {
            alert("Select only 2 cars");
            return;
        }
        selected.push(name);
        element.classList.add("selected");
    }

    updateSlots();
}

function updateSlots() {
    document.getElementById("slot1").innerText = selected[0] || "Choose model";
    document.getElementById("slot2").innerText = selected[1] || "Choose model";

    const btn = document.getElementById("compare-btn");

    if (selected.length === 2) {
        btn.disabled = false;
        btn.classList.add("active");
    } else {
        btn.disabled = true;
        btn.classList.remove("active");
    }
}

function goCompare() {
    document.getElementById("cars-page").style.display = "none";
    document.getElementById("compare-page").style.display = "block";

    renderCompare();
}

function renderCompare() {

    const data = {

        "911": {
            name: "Porsche 911",
            img: "911.webp",
            speed: "308 km/h",
            power: "394 hp",
            accel: "4.2 s",
            engine: "3.0L Twin Turbo",
            price: "$120,000"
        },

        "macan": {
            name: "Porsche Macan",
            img: "macan.webp",
            speed: "245 km/h",
            power: "335 hp",
            accel: "6.2 s",
            engine: "2.0L Turbo",
            price: "$60,000"
        },

        "Taycan": {
            name: "Porsche Taycan",
            img: "taycan.webp",
            speed: "260 km/h",
            power: "402 hp",
            accel: "5.4 s",
            engine: "Electric",
            price: "$100,000"
        },

        "panamera": {
            name: "Porsche Panamera",
            img: "panamera.webp",
            speed: "270 km/h",
            power: "325 hp",
            accel: "5.3 s",
            engine: "2.9L V6",
            price: "$90,000"
        }
    };

    const grid = document.getElementById("comparison-grid");

    const car1 = data[selected[0]];
    const car2 = data[selected[1]];

    grid.innerHTML = `
        <table class="compare-table">

            <tr>
                <th></th>
                <th>
                    <img src="${car1.img}" class="compare-img">
                    <h3>${car1.name}</h3>
                </th>
                <th>
                    <img src="${car2.img}" class="compare-img">
                    <h3>${car2.name}</h3>
                </th>
            </tr>

            <tr>
                <td>Top Speed</td>
                <td>${car1.speed}</td>
                <td>${car2.speed}</td>
            </tr>

            <tr>
                <td>Power</td>
                <td>${car1.power}</td>
                <td>${car2.power}</td>
            </tr>

            <tr>
                <td>Acceleration</td>
                <td>${car1.accel}</td>
                <td>${car2.accel}</td>
            </tr>

            <tr>
                <td>Engine</td>
                <td>${car1.engine}</td>
                <td>${car2.engine}</td>
            </tr>

            <tr>
                <td>Price</td>
                <td>${car1.price}</td>
                <td>${car2.price}</td>
            </tr>

        </table>
    `;
}

function goBack() {
   
    document.getElementById("compare-page").style.display = "none";

    document.getElementById("start-page").style.display = "block";

    selected = [];

    document.querySelectorAll(".car-card").forEach(card => {
        card.classList.remove("selected");
    });

    document.getElementById("slot1").innerText = "Choose model";
    document.getElementById("slot2").innerText = "Choose model";

    const btn = document.getElementById("compare-btn");
    btn.disabled = true;
    btn.classList.remove("active");
}