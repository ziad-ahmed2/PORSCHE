
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

const cars = {
    "911": {
        name: "Porsche 911",
        description: "Powerful elegance, timeless performance, pure prestige.",
        image: "p911.png",

        specs: {
            horsepower: "385 hp",
            maxPower: "640",
            acceleration: "4.2 sec",
            topSpeed: "293 Km/h",
            range: "~500 Km",
            efficiency: "~9L/100 Km",
            seating: "2+2",
            trunk: "132 L"
        },

        carvideo: "p911.mp4",

        features: [
            ["Twin-Turbo Power", "High-performance flat-six twin-turbo engine delivering thrilling acceleration and unmatched driving excitement."],
            ["Instant Acceleration", "Accelerates from 0–100 km/h in just 3.4 seconds for pure adrenaline on every drive."],
            ["Premium Interior", "Luxury leather finishes and digital cockpit displays ,and advanced comfort technology throughout."],
            ["Smart Suspension", "Adaptive suspension system ensures maximum comfort and razor-sharp handling at every speed."],
            ["Intelligent Safety", "Lane assist, adaptive cruise control, parking sensors, and advanced driver protection systems."],
            ["Sport Exhaust Sound", "Experience the signature Porsche exhaust note engineered to deliver pure emotion and thrilling performance."]
        ]
    },
    
    "taycan": {
        name: "Porsche Taycan",
        description: "Electric power, breathtaking speed, and futuristic luxury in perfect harmony.",
        image: "taycan.png",

        specs: {
            horsepower: "402 hp",
            maxPower: "761 hp",
            acceleration: "5.4 sec",
            topSpeed: "230 Km/h",
            range: "~430 Km",
            efficiency: "~20 kWh/100 Km",
            seating: "4",
            trunk: "366 L"
        },


        carvideo: "taycan.mp4",


    features: [
        ["Electric Performance", "Instant electric torque with seamless acceleration that delivers silent yet powerful performance beyond expectations."],
        ["Fast Charging", "Ultra-fast charging technology designed to minimize downtime and keep you moving with maximum efficiency."],
        ["Luxury Cabin", "A futuristic interior with digital displays, premium materials, and a clean design focused on comfort and innovation."],
        ["Advanced Handling", "Low center of gravity and precision engineering provide outstanding stability and sharp cornering control."],
        ["Driver Assistance", "Smart driving systems that assist with lane control, adaptive cruise, and safety monitoring for relaxed driving."],
        ["Silent Power", "Delivers extreme acceleration with near-silent operation, redefining performance in a fully electric experience."]
    ]
    },

    "macan": {
        name: "Porsche Macan",
        description: "Sporty SUV performance, everyday luxury, and bold Porsche spirit in every drive.",
        image: "Macan.png",

        specs: {
            horsepower: "265 hp",
            maxPower: "434 ",
            acceleration: "6.2 sec",
            topSpeed: "232 Km/h",
            range: "~600 Km",
            efficiency: "~10 L/100 Km",
            seating: "5",
            trunk: "488 L"
        },
        
        carvideo: "macan.mp4",
        
        features: [
            ["SUV Power", "A compact SUV with Porsche DNA, delivering strong acceleration and confident performance in every drive."],

            ["Comfort Drive", "Engineered for smooth everyday driving while maintaining sporty responsiveness and precise control."],

            ["Spacious Cabin", "Premium interior space designed for comfort, practicality, and luxury for both driver and passengers."],

            ["Smart Suspension", "Adaptive suspension that balances comfort and performance by adjusting instantly to road conditions."],

            ["Safety Tech", "Modern safety systems that actively assist the driver and enhance protection in all driving situations."],

            ["Bold Design", "A muscular and sporty SUV design that reflects strength, elegance, and unmistakable Porsche identity."]
        ]
    },

    "panamera": {
        name: "Porsche Panamera",
        description: "Luxury sedan elegance, thrilling performance, and executive comfort without compromise.",
        image: "panamera.png",

        specs: {
            horsepower: "325 hp",
            maxPower: "620 ",
            acceleration: "5.6 sec",
            topSpeed: "270 Km/h",
            range: "~650 Km",
            efficiency: "~9.5 L/100 Km",
            seating: "4-5",
            trunk: "495 L"
        },


        carvideo: "panamera.mp4",


        features: [
            ["Luxury Performance", "A perfect blend of executive comfort and sports car dynamics, delivering smooth yet powerful driving in every situation."],

            ["Fast Response", "Instant throttle response with refined power delivery, giving effortless acceleration and confident highway performance."],

            ["Premium Interior", "A high-end cabin designed like a luxury business lounge, combining advanced technology with exceptional comfort and materials."],

            ["Adaptive Chassis", "Intelligent chassis system that continuously adjusts damping and stability for maximum comfort and precise handling."],

            ["Driver Assist", "Advanced driver assistance systems that enhance safety, awareness, and convenience for a relaxed driving experience."],

            ["Elegant Exhaust", "A refined Porsche exhaust note that balances sophistication and sportiness with a deep, controlled sound."]
        ]  
    }
};

const params = new URLSearchParams(window.location.search);
const carType = params.get("car");
const car = cars[carType];

if (car) {
    document.getElementById("carh1").textContent = car.name;
    document.getElementById("carp").textContent = car.description;
    document.getElementById("carimage").src = car.image;

    document.getElementById("horsepower").textContent = car.specs.horsepower;
    document.getElementById("maxpower").textContent = car.specs.maxPower;
    document.getElementById("acceleration").textContent = car.specs.acceleration;
    document.getElementById("topspeed").textContent = car.specs.topSpeed;
    document.getElementById("range").textContent = car.specs.range;
    document.getElementById("efficiency").textContent = car.specs.efficiency;
    document.getElementById("seating").textContent = car.specs.seating;
    document.getElementById("trunk").textContent = car.specs.trunk;


    document.getElementById("carvideo").src = car.carvideo;
    document.getElementById("carvideo").load();
    
    
    for (let i = 0; i < car.features.length; i++) {
    document.getElementById(`feature${i + 1}-title`).textContent =
        car.features[i][0];

    document.getElementById(`feature${i + 1}-text`).textContent =
        car.features[i][1];
}

}