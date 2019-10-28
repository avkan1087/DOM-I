const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//add a  content
document.querySelector('nav a').textContent = siteContent['nav']['nav-item-1'];
document.querySelector('nav a:nth-of-type(2)').textContent = siteContent['nav']['nav-item-2'];
document.querySelector('nav a:nth-of-type(3)').textContent = siteContent['nav']['nav-item-3'];
document.querySelector('nav a:nth-of-type(4)').textContent = siteContent['nav']['nav-item-4'];
document.querySelector('nav a:nth-of-type(5)').textContent = siteContent['nav']['nav-item-5'];
document.querySelector('nav a:nth-of-type(6)').textContent = siteContent['nav']['nav-item-6'];
// add h1 content + brakes
document.querySelector('h1').innerHTML = siteContent['cta']['h1'].replace(" Is", "<br> Is<br>");

//add button content
document.querySelector('button').textContent = siteContent['cta']['button'];
//add  cta-img src=  image
document.querySelector('#cta-img').src = siteContent['cta']['img-src'];
//top-content div first h4 add content
document.querySelector('.top-content h4').textContent = siteContent['main-content']['features-h4'];
//top-content div first p add content
document.querySelector('.top-content p').textContent = siteContent['main-content']['features-content'];
//top-content div second h4 add content
document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4'];
//top-content div second p add content
document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content'];
//middle-img src= image
document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];
//bottom-content first h4 add content
document.querySelector('.bottom-content h4').textContent = siteContent['main-content']['services-h4'];
//bottom-content first p add content
document.querySelector('.bottom-content p').textContent = siteContent['main-content']['services-content'];
//bottom-content second h4 add content
document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4'];
//bottom-content second p add content
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content'];
//bottom-content third h4 add content
document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4'];
//bottom-content third p add content
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content'];
//contact h4 Content
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
//contact first p
document.querySelector('.contact p').textContent = siteContent['contact']['address'];
//contact second p
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
//contact third p
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];
//footer p
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

//add 2 nav items front and end
const navElement = document.querySelector('nav');

const home = document.createElement('a');
home.textContent = "Home";
const blog = document.createElement('a');
blog.textContent = "Blog";

navElement.append(blog);
navElement.prepend(home);

//nav text green
document.querySelectorAll('nav a').forEach(att => {att.style.color = 'green'});
