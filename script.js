// Function to check which page we're on
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.endsWith("index.html") || path === "/") return "index";
    if (path.endsWith("blog.html")) return "blog";
    return null;
}

// Define desktop and mobile background images for index page
const indexDesktopImages = ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg', 'images/bg4.jpg'];
const indexMobileImages = ['images/pbg1.jpg', 'images/pbg2.jpg']; // Mobile-specific images

// Define blog images and corresponding blog post data
const blogEntries = [
    { image: "images/blog1.jpg", title: "The GatherInn", date: "July 03, 2022 · Event Coverage", excerpt: "Looking to heat up your summer? Make sure to come to our events so you don’t miss it!", link: "the-gatherinn.html" },
    { image: "images/blog2.jpg", title: "Sebastian's Z3 M Coupe", date: "May 14, 2022 · Feature", excerpt: "What do you think about Sebastian’s Z3M? Clean and simple, just how we like it!", link: "sebastians-z3m.html" },
    { image: "images/blog4.jpeg", title: "Feature Car Spotlight", date: "February 15, 2023 · Car Feature", excerpt: "Check out this amazing build from one of our StanceInn members.", link: "feature-car.html" },
    { image: "imagesblog5.jpeg", title: "Exclusive Behind the Scenes", date: "January 10, 2023 · Special Feature", excerpt: "Get an exclusive look at how StanceInn events are made possible.", link: "behind-the-scenes.html" },
    { image: "images/blog6.jpeg", title: "The Best Stanced Cars of 2022", date: "December 30, 2022 · Recap", excerpt: "A recap of the best builds we’ve seen throughout the year.", link: "best-stanced-2022.html" },
    { image: "images/blog7.jpeg", title: "Meet the Team", date: "November 20, 2022 · Introduction", excerpt: "Get to know the people behind the StanceInn movement.", link: "meet-the-team.html" },
    { image: "images/blog8.jpeg", title: "Top 5 Stance Mods", date: "October 05, 2022 · Guide", excerpt: "A guide to the best stance modifications for your build.", link: "top-stance-mods.html" }
];

let currentIndex = 0;

// Function to check if the user is on a mobile device
function isMobile() {
    return window.innerWidth <= 768; // Adjust as needed
}

function changeIndexBackground() {
    const body = document.body;
    const images = isMobile() ? indexMobileImages : indexDesktopImages;

    // Add fade-out effect
    body.classList.add('fade-out');
    setTimeout(() => {
        body.style.backgroundImage = `url(${images[currentIndex]})`;
        body.classList.remove('fade-out');
        body.classList.add('fade-in');
    }, 500); // Match this duration to the CSS transition duration

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

// Initialize the appropriate background swapping for the page
const currentPage = getCurrentPage();

if (currentPage === "index") {
    setInterval(changeIndexBackground, 5000);
    window.onload = changeIndexBackground;
    window.onresize = changeIndexBackground;
} else if (currentPage === "blog") {
    setInterval(changeBlogBackgroundAndContent, 5000);
    window.onload = changeBlogBackgroundAndContent;
}
