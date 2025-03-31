// Function to check which page we're on
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.endsWith("index.html") || path === "/") return "index";
    if (path.endsWith("blog.html")) return "blog";
    if (path.endsWith("membersrides.html")) return "membersrides";
    if (path.endsWith("members.html")) return "members";
    return null;
}

// Define desktop and mobile background images for index page
const indexDesktopImages = [
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
//    { image: 'images/car45.webp', darkMode: "yes" },
    { image: 'images/car49.webp', darkMode: "yes" },
    { image: 'images/car71.webp', darkMode: "yes" }
];

// Define blog images and corresponding blog post data
const blogEntries = [
    { image: "images/blog1.webp", darkMode: "no", title: "The GatherInn", date: "July 03, 2022 · Event Coverage", excerpt: "Looking to heat up your summer? Make sure to come to our events so you don’t miss it!" },
    { image: "images/blog2.webp", darkMode: "yes", title: "Sebastian's Z3 M Coupe", date: "May 14, 2022 · Feature", excerpt: "What do you think about Sebastian’s Z3M? Clean and simple, just how we like it!" },
    { image: "images/blog4.webp", darkMode: "no", title: "Feature Car Spotlight", date: "February 15, 2023 · Car Feature", excerpt: "Check out this amazing build from one of our StanceInn members." },
    { image: "images/blog5.webp", darkMode: "yes", title: "Exclusive Behind the Scenes", date: "January 10, 2023 · Special Feature", excerpt: "Get an exclusive look at how StanceInn events are made possible." },
    { image: "images/blog6.webp", darkMode: "no", title: "The Best Stanced Cars of 2022", date: "December 30, 2022 · Recap", excerpt: "A recap of the best builds we’ve seen throughout the year." },
    { image: "images/blog7.webp", darkMode: "yes", title: "Meet the Team", date: "November 20, 2022 · Introduction", excerpt: "Get to know the people behind the StanceInn movement." },
    { image: "images/blog8.webp", darkMode: "no", title: "Top 5 Stance Mods", date: "October 05, 2022 · Guide", excerpt: "A guide to the best stance modifications for your build." }
];

const membersRidesEntries = [
    { image: "images/car4.webp", darkMode: "yes", name: "Henry Kissinger", car: "BMW M4", instagram: "https://www.instagram.com/felipe.f83/" },
    { image: "images/car3.webp", darkMode: "no", name: "Bernardo Freitas", car: "Subaru WRX", instagram: "https://www.instagram.com/brew/" },
    { image: "images/car2.webp", darkMode: "yes", name: "David Jackson", car: "Mercedes W205", instagram: "https://www.instagram.com/bagdw205/" },
    { image: "images/car1.webp", darkMode: "no", name: "Antonio Ferruci", car: "Nissan Gloria", instagram: "https://www.instagram.com/gatiiboy/" }
];

let currentIndex = 0;

// Function to check if the user is on a mobile device
function isMobile() {
    return window.innerWidth <= 768; // Adjust as needed
}

// Function to apply dark mode if applicable
function applyDarkMode(entry) {
    if (entry.darkMode === "yes") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function changeIndexBackground() {
    const body = document.body;
    const images = isMobile() ? indexMobileImages : indexDesktopImages;

    const entry = images[currentIndex];
    body.style.backgroundImage = `url(${entry.image})`;

    // Apply dark mode if applicable
    applyDarkMode(entry);

    // Increment index and loop
    currentIndex = (currentIndex + 1) % images.length;
}

// Function to change the blog background and update post info
function changeBlogBackgroundAndContent() {
    const body = document.body;
    const blogPostContainer = document.getElementById("blog-post-container");

    const entry = blogEntries[currentIndex];
    body.style.backgroundImage = `url(${entry.image})`;

    // Apply dark mode if applicable
    applyDarkMode(entry);

    if (blogPostContainer) {
        blogPostContainer.innerHTML = `
            <article class="blog-post">
                <h2 class="post-title">${entry.title}</h2>
                <p class="post-date">${entry.date}</p>
                <p class="post-excerpt">${entry.excerpt}</p>
                <a href="${entry.link}" class="read-more">Read More</a>
            </article>
        `;
    }

    currentIndex = (currentIndex + 1) % blogEntries.length;
}

// Function to change members rides background and update member info
function changeMembersRidesBackgroundAndContent() {
    const body = document.body;
    const membersRidesContainer = document.getElementById("members-rides-container");

    const entry = membersRidesEntries[currentIndex];
    body.style.backgroundImage = `url(${entry.image})`;

    // Apply dark mode if applicable
    applyDarkMode(entry);

    if (membersRidesContainer) {
        membersRidesContainer.innerHTML = `
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

function validatePassword(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    const hash = md5(password);
    if (hash === "b1a3c5632faeb83e49e7e7b5f507b383") { 
        window.location.href = 'membersonly.html';
    } else {
        alert('Denied BOZO');
    }
}

// Initialize the appropriate background swapping for the page
const currentPage = getCurrentPage();

if (currentPage === "index") {
    setInterval(changeIndexBackground, 2000);
    window.onload = changeIndexBackground;
    window.onresize = changeIndexBackground;
} else if (currentPage === "blog") {
    setInterval(changeBlogBackgroundAndContent, 2000);
    window.onload = changeBlogBackgroundAndContent;
} else if (currentPage === "membersrides") {
    setInterval(changeMembersRidesBackgroundAndContent, 2000);
    window.onload = changeMembersRidesBackgroundAndContent;
} else if (currentPage === "members") {
    window.onload = function() {
        document.getElementById('passwordForm').addEventListener('submit', validatePassword);
    };
}
