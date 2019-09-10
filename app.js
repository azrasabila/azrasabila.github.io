/* animasi sidebar (tampilan layar smartphone) */
const navSlide = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menuBtn.addEventListener('click', () => {
        //geser navbar
        nav.classList.toggle('nav-active');

        //animasi link
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        //animasi menuBtn
        menuBtn.classList.toggle('toggle');
    });
}

/* animasi scroll */

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime; 
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) { /*sumber dari : http://www.gizma.com/easing/ */
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    }
    

    requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

const run = () => {
    navSlide();
    section1.addEventListener('click', function(){
        smoothScroll('.section2', 1500);
    });
    section2.addEventListener('click', function(){
        smoothScroll('.section1', 1500);
    });
}

run();