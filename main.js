

var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function ()
{
    setTimeout(function ()
    {
        preloader.style.opacity = 0;
        preloader.style.transition = "opacity 0.9s ease";
        setTimeout(function ()
        {
            preloader.style.display = "none";

        }, 400);
    }, 500);
};

// ===============Use Animation in JS========================

var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var services = document.getElementsByClassName("service-card");
var content = document.getElementsByClassName("hero-content");
// Access the first hero-content element's children
var contentElements = content[0].children;
// Print all child elements
for (let element of contentElements) {
    console.log(element.tagName, element); // Shows tag name and element
}

// test yr code 
console.log(services);
console.log(offers);
console.log(scrollY.default);
console.log(contentElements);
console.log();







window.onscroll = function ()
{
    // Handle header
    if (scrollY > 440)
    {
        header.classList.add("fixed-bar");
       
        offers[0].style.animation = "fadeInUp 1.5s forwards";
        offers[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
        offers[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
    } else
    {
        header.classList.remove("fixed-bar");
    }
    if (scrollY >800)
    {
        services[0].style.animation = "fadeInUp 1.5s forwards";
        services[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
        services[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
        services[3].style.animation = "fadeInUp 1.5s 1.0s forwards";
    }

    if (scrollY > 1)
    {
        contentElements[0].style.animation = "fadeInUp 1.5s forwards";
        contentElements[1].style.animation = "comeLeft 1.5s  forwards";
        contentElements[2].style.animation = "comeLeft 1.5s 0.4s forwards";
        contentElements[3].style.animation = "comeLeft 1.5s 0.8s forwards"; 
    }



};

//TODO - Quotes Slider

document.addEventListener('DOMContentLoaded', function ()
{
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    let slideInterval;
    const autoSlideDelay = 10000; // 

    startAutoSlide();

    function startAutoSlide()
    {
        slideInterval = setInterval(() =>
        {
            goToNextSlide();
        }, autoSlideDelay);
    }

    function resetAutoSlide()
    {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    function showSlide(index)
    {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (index < 0)
        {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length)
        {
            currentSlide = 0;
        } else
        {
            currentSlide = index;
        }

        // Activate current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Go to next slide
    function goToNextSlide()
    {
        showSlide(currentSlide + 1);
    }

    // Go to previous slide
    function goToPrevSlide()
    {
        showSlide(currentSlide - 1);
    }

    // Event listeners for navigation
    prevBtn.addEventListener('click', () =>
    {
        goToPrevSlide();
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () =>
    {
        goToNextSlide();
        resetAutoSlide();
    });

    // Add click events to dots
    dots.forEach(dot =>
    {
        dot.addEventListener('click', () =>
        {
            const slideIndex = parseInt(dot.getAttribute('data-index'));
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });

    // Pause auto slide when hovering over the slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () =>
    {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () =>
    {
        startAutoSlide();
    });
});