const siteContent = { // DO NOT CHANGE THIS OBJECT
     "nav": {
          "nav-item-1": "Services",
          "nav-item-2": "Product",
          "nav-item-3": "Vision",
          "nav-item-4": "Features",
          "nav-item-5": "About",
          "nav-item-6": "Contact",
     },
     "cta": {
          "h1": "DOM Is Awesome",
          "button": "Get Started",
     },
     "main-content": {
          "features-h4": "Features",
          "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
          "about-h4": "About",
          "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
          "services-h4": "Services",
          "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
          "product-h4": "Product",
          "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
          "vision-h4": "Vision",
          "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
     },
     "contact": {
          "contact-h4": "Contact",
          "address": "123 Way 456 Street Somewhere, USA",
          "phone": "1 (888) 888-8888",
          "email": "sales@greatidea.io",
     },
     "footer": {
          "copyright": "Copyright Great Idea! 2021",
     },
     "images": {
          "logo-img": "http://localhost:9000/img/logo.png",
          "cta-img": "http://localhost:9000/img/cta.png",
          "accent-img": "http://localhost:9000/img/accent.png",
     },
};

console.log('project wired!')


const navLinks = document.querySelectorAll('nav a');
const headerImg = document.querySelector('header img');
const ctaText = document.querySelector('.cta h1');
const ctaButton = document.querySelector('.cta button');
const ctaImg = document.querySelector('.cta img');
const topContentTitles = document.querySelectorAll('.top-content h4');
const topContentText = document.querySelectorAll('.top-content p');
const midImg = document.querySelector('.middle-img');
const bottomContentTitles = document.querySelectorAll('.bottom-content h4');
const bottomContentText = document.querySelectorAll('.bottom-content p');
const contactTitle = document.querySelector('.contact h4');
const contactText = document.querySelectorAll('.contact p');
const footerCR = document.querySelector('footer a');

const navLinksText = Object.values(siteContent.nav);


console.log(navLinksText);



// console.log('navLinks', navLinks);
// console.log('headerImg', headerImg);
// console.log('ctaText', ctaText);
// console.log('ctaButton', ctaButton);
// console.log('ctaImg', ctaImg);
// console.log('top Titles', topContentTitles);
// console.log('top Text', topContentText);
// console.log('middle img', midImg);
// console.log('bottom Titles', bottomContentTitles);
// console.log('bottom Text', bottomContentText);
// console.log('contact title', contactTitle);
// console.log('contact text', contactText);
// console.log('footer copyright', footerCR);
