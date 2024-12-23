//---------------navbar btn click-----------------
var nav_btn = document.querySelector(".nav-btn");
var nav_bar = document.querySelector(".navbar");
var close_btn=document.querySelector(".nav-close")
nav_btn.addEventListener("click", function () {
    nav_bar.style.transform = "translateX(0)";
});
close_btn.addEventListener("click", function(){
    nav_bar.style.transform="translateX(-100%)";
})

//---------------home btn click-----------------
var homeLink = document.querySelector('.nav-link[href="#home"]');
homeLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,          
        behavior: 'smooth' 
    });
});

//---------------features btn click-----------------
var aboutLink = document.querySelector('.nav-link[href="#about"]');
aboutLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    var featuresSection = document.querySelector('.features');
    var aboutSection = document.querySelector('.about');
    featuresSection.scrollIntoView({
        behavior: 'smooth', 
    });
    setTimeout(() => {
        aboutSection.scrollIntoView({
            behavior: 'smooth', 
        });
    }, 800);
});

//---------------product btn click-----------------
var productsLink = document.querySelector('.nav-link[href="#products"]');
productsLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    var productsSection = document.querySelector('.products');
    productsSection.scrollIntoView({
        behavior: 'smooth', 
    });
});

//---------------services btn click-----------------
var servicesLink = document.querySelector('.nav-link[href="#services"]');
servicesLink.addEventListener('click', function (e) {
    e.preventDefault();
    var servicesSection = document.querySelector('.services');
    servicesSection.scrollIntoView({
        behavior: 'smooth', 
    });
});

//---------------contact btn click-----------------
var contactLink = document.querySelector('.nav-link[href="#contact"]');
contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    var contactSection = document.querySelector('.contact');
    contactSection.scrollIntoView({
        behavior: 'smooth', 
    });
});
