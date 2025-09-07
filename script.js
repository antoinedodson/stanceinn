// Function to check which page we're on
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.endsWith("index.html") || path === "/") return "index";
    if (path.endsWith("featured.html")) return "featured";
    if (path.endsWith("membersrides.html")) return "membersrides";
    if (path.endsWith("members.html")) return "members";
    return null;
}


// Define desktop and mobile background images for index page
const indexDesktopImages = [
    { image: 'images/car72.webp', darkMode: "yes" },
    { image: 'images/car93.webp', darkMode: "yes" },
    { image: 'images/car85.webp', darkMode: "yes" },
    { image: 'images/car108.webp', darkMode: "yes" },
    { image: 'images/car109.webp', darkMode: "yes" },
    { image: 'images/car110.webp', darkMode: "yes" },
    { image: 'images/car111.webp', darkMode: "yes" },
    { image: 'images/car115.webp', darkMode: "yes" },
    { image: 'images/car21.webp', darkMode: "yes" },
    { image: 'images/car17.webp', darkMode: "yes" },
    { image: 'images/car34.webp', darkMode: "yes" },
    { image: 'images/car49.webp', darkMode: "yes" },
    { image: 'images/car13.webp', darkMode: "yes" },
    { image: 'images/car14.webp', darkMode: "yes" },
    { image: 'images/car32.webp', darkMode: "yes" },
    { image: 'images/car70.webp', darkMode: "yes" }

];
const indexMobileImages = [
    { image: 'images/car30.webp', darkMode: "yes" },
    { image: 'images/car36.webp', darkMode: "yes" },
    { image: 'images/car43.webp', darkMode: "no" },
    { image: 'images/car49.webp', darkMode: "yes" },
    { image: 'images/car71.webp', darkMode: "yes" }
];


// Define featured page images and captions
const featuredEntries = [
    {
        image: "images/blog1.webp",
        darkMode: "no",
        title: "The GatherInn",
        excerpt: "Looking to heat up your summer? Make sure to come to our events so you don’t miss it!"
    },
    {
        image: "images/blog2.webp",
        darkMode: "yes",
        title: "Sebastian's Z3 M Coupe",
        excerpt: "What do you think about Sebastian’s Z3M? Clean and simple, just how we like it!"
    },
    {
        image: "images/blog4.webp",
        darkMode: "no",
        title: "Feature Car Spotlight",
        excerpt: "Check out this amazing build from one of our StanceInn members."
    },
    {
        image: "images/blog5.webp",
        darkMode: "yes",
        title: "Behind the Scenes",
        excerpt: "Get an exclusive look at how StanceInn events are made possible."
    },
    {
        image: "images/blog6.webp",
        darkMode: "no",
        title: "Best Stanced Cars of 2022",
        excerpt: "A recap of the best builds we’ve seen throughout the year."
    },
    {
        image: "images/blog7.webp",
        darkMode: "yes",
        title: "Meet the Team",
        excerpt: "Get to know the people behind the StanceInn movement."
    },
    {
        image: "images/blog8.webp",
        darkMode: "no",
        title: "Top 5 Stance Mods",
        excerpt: "A guide to the best stance modifications for your build."
    }
];


// Define members rides entries
const membersRidesEntries = [
    { image: "images/car4.webp",  darkMode: "yes", name: "Henry Kissinger",    car: "BMW M4",       instagram: "https://www.instagram.com/felipe.f83/" },
    { image: "images/car3.webp",  darkMode: "no",  name: "Bernardo Freitas",  car: "Subaru WRX",    instagram: "https://www.instagram.com/brew/" },
    { image: "images/car2.webp",  darkMode: "yes", name: "David Jackson",      car: "Mercedes W205", instagram: "https://www.instagram.com/bagdw205/" },
    { image: "images/car1.webp",  darkMode: "no",  name: "Antonio Ferruci",    car: "Nissan Gloria", instagram: "https://www.instagram.com/gatiiboy/" }
];

let currentIndex = 0;


// Function to check if the user is on a mobile device
function isMobile() {
    return window.innerWidth <= 768;
}


// Function to apply dark mode if applicable
function applyDarkMode(entry) {
    if (entry.darkMode === "yes") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}


// --------- INDEX PAGE ROTATOR ---------
function changeIndexBackground() {
    const body = document.body;
    const images = isMobile() ? indexMobileImages : indexDesktopImages;
    const entry = images[currentIndex];

    body.style.backgroundImage = `url(${entry.image})`;
    applyDarkMode(entry);

    currentIndex = (currentIndex + 1) % images.length;
}


// --------- FEATURED PAGE ROTATOR ---------
function changeFeaturedBackgroundAndContent() {
    const body = document.body;
    const entry = featuredEntries[currentIndex];
  
    body.style.backgroundImage = `url(${entry.image})`;
    applyDarkMode(entry);
  
    currentIndex = (currentIndex + 1) % featuredEntries.length;
  }
  


// --------- MEMBERS RIDES ROTATOR ---------
function changeMembersRidesBackgroundAndContent() {
    const body = document.body;
    const container = document.getElementById("members-rides-container");
    const entry = membersRidesEntries[currentIndex];

    body.style.backgroundImage = `url(${entry.image})`;
    applyDarkMode(entry);

    if (container) {
        container.innerHTML = `
            <div class="member-info">
                <p>${entry.name}<br>${entry.car}</p>
                <a href="${entry.instagram}" target="_blank">
                    <img src="images/iglogo.png" alt="Instagram">
                </a>
            </div>
        `;
    }

    currentIndex = (currentIndex + 1) % membersRidesEntries.length;
}


// --------- PASSWORD VALIDATION ---------
function validatePassword(event) {
    event.preventDefault();
    const pwd = document.getElementById('password').value;
    if (pwd === 'stance') {
        window.location.href = 'membersonly.html';
    } else {
        alert('Denied BOZO');
    }
}


// --------- INITIALIZATION ---------
const currentPage = getCurrentPage();

if (currentPage === "index") {
    setInterval(changeIndexBackground, 10000);
    window.onload = changeIndexBackground;
    window.onresize = changeIndexBackground;

} else if (currentPage === "featured") {
    setInterval(changeFeaturedBackgroundAndContent, 2000);
    window.onload  = changeFeaturedBackgroundAndContent;
    window.onresize = changeFeaturedBackgroundAndContent;

} else if (currentPage === "membersrides") {
    setInterval(changeMembersRidesBackgroundAndContent, 2000);
    window.onload = changeMembersRidesBackgroundAndContent;

} else if (currentPage === "members") {
    window.onload = function() {
        document.getElementById('passwordForm')
                .addEventListener('submit', validatePassword);
    };
}
