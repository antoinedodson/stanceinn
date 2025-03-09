// Function to check which page we're on
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.endsWith("index.html") || path === "/") return "index";
    if (path.endsWith("blog.html")) return "blog";
    if (path.endsWith("membersrides.html")) return "membersrides";
    return null;
}

// Define desktop and mobile background images for index page
const indexDesktopImages = ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg', 'images/bg4.jpg'];
const indexMobileImages = ['images/pbg1.jpg', 'images/pbg2.jpg']; // Mobile-specific images

// Define blog images and corresponding blog post data
const blogEntries = [
    { image: "images/blog1.jpg", title: "The GatherInn", date: "July 03, 2022 · Event Coverage", excerpt: "Looking to heat up your summer? Make sure to come to our events so you don’t miss it!" },
    { image: "images/blog2.jpg", title: "Sebastian's Z3 M Coupe", date: "May 14, 2022 · Feature", excerpt: "What do you think about Sebastian’s Z3M? Clean and simple, just how we like it!" },
    { image: "images/blog4.jpeg", title: "Feature Car Spotlight", date: "February 15, 2023 · Car Feature", excerpt: "Check out this amazing build from one of our StanceInn members." },
    { image: "images/blog5.jpeg", title: "Exclusive Behind the Scenes", date: "January 10, 2023 · Special Feature", excerpt: "Get an exclusive look at how StanceInn events are made possible." },
    { image: "images/blog6.jpeg", title: "The Best Stanced Cars of 2022", date: "December 30, 2022 · Recap", excerpt: "A recap of the best builds we’ve seen throughout the year." },
    { image: "images/blog7.jpeg", title: "Meet the Team", date: "November 20, 2022 · Introduction", excerpt: "Get to know the people behind the StanceInn movement." },
    { image: "images/blog8.jpeg", title: "Top 5 Stance Mods", date: "October 05, 2022 · Guide", excerpt: "A guide to the best stance modifications for your build." }
];

const membersRidesEntries = [
    { image: "images/car1.jpg", name: "Antonio Ferruci", car: "Nissan Gloria", instagram: "https://www.instagram.com/gatiiboy/" },
    { image: "images/car2.jpg", name: "Antonio Ferruci", car: "Mercedes W205", instagram: "https://www.instagram.com/bagdw205/" },
    { image: "images/car3.jpg", name: "Bernardo Freitas", car: "Mazda RX7", instagram: "https://www.instagram.com/brew/" },
    { image: "images/car4.jpg", name: "Henry Kissinger", car: "BMW M4", instagram: "https://www.instagram.com/felipe.f83/" }
];

let currentIndex = 0;

// Function to check if the user is on a mobile device
function isMobile() {
    return window.innerWidth <= 768; // Adjust as needed
}

function changeIndexBackground() {
    const body = document.body;
    const images = isMobile() ? indexMobileImages : indexDesktopImages;

    body.style.backgroundImage = `url(${images[currentIndex]})`;

    // Increment index and loop
    currentIndex = (currentIndex + 1) % images.length;
}

// Function to change the blog background and update post info
function changeBlogBackgroundAndContent() {
    const body = document.body;
    const blogPostContainer = document.getElementById("blog-post-container");

    const entry = blogEntries[currentIndex];

    body.style.backgroundImage = `url(${entry.image})`;

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

// Initialize the appropriate background swapping for the page
const currentPage = getCurrentPage();

if (currentPage === "index") {
    setInterval(changeIndexBackground, 5000);
    window.onload = changeIndexBackground;
    window.onresize = changeIndexBackground;
} else if (currentPage === "blog") {
    setInterval(changeBlogBackgroundAndContent, 5000);
    window.onload = changeBlogBackgroundAndContent;
} else if (currentPage === "membersrides") {
    setInterval(changeMembersRidesBackgroundAndContent, 5000);
    window.onload = changeMembersRidesBackgroundAndContent;
}
