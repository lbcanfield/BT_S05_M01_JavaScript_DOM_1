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

// console.log('project wired!')





//Navigation Section
const navLinksText = Object.values(siteContent.nav);
document.querySelectorAll('nav a').forEach((text, index) => {
     text.textContent = navLinksText[index]
     text.setAttribute('href', `#${navLinksText[index].toLowerCase()}`)
     // text. = `#${navLinksText[index].toLowerCase}`
     text.classList.add('italic');
     // text.classList.add(`${navLinksText[index]}`)
})
document.querySelector('header img').src = siteContent.images['logo-img'];

//CTA Section
document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;
document.querySelector('.cta img').src = siteContent.images['cta-img'];

//Top Section
const topContent = document.querySelectorAll('.top-content div');
topContent[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent[0].children[0].id = 'features';
topContent[0].children[1].textContent = siteContent['main-content']['features-content'];

topContent[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent[1].children[0].id = 'about';
topContent[1].children[1].textContent = siteContent['main-content']['about-content'];

//Middle Image
document.querySelector('.middle-img').src = siteContent.images['accent-img'];

const bottomContent = document.querySelectorAll('.bottom-content div')
bottomContent[0].classList.add('services');
bottomContent[0].children[0].textContent = siteContent['main-content']['services-h4']
bottomContent[0].children[0].id = 'services';
bottomContent[0].children[1].textContent = siteContent['main-content']['services-content']

bottomContent[1].children[0].textContent = siteContent['main-content']['product-h4']
bottomContent[1].children[0].id = 'product';
bottomContent[1].children[1].textContent = siteContent['main-content']['product-content']
bottomContent[0].classList.add('vision');

bottomContent[2].children[0].textContent = siteContent['main-content']['vision-h4']
bottomContent[2].children[0].id = 'vision';
bottomContent[2].children[1].textContent = siteContent['main-content']['vision-content']

//Contact Section
const contactSection = document.querySelector('.contact');
contactSection.children[0].textContent = siteContent['contact']['contact-h4'];
contactSection.children[0].id = 'contact';
contactSection.children[1].textContent = siteContent['contact']['address'];
contactSection.children[2].textContent = siteContent['contact']['email'];
contactSection.children[3].textContent = siteContent['contact']['phone'];

//Footer
document.querySelector('footer a').textContent = siteContent['footer']['copyright'];
document.querySelector('footer a').classList.add('bold');

