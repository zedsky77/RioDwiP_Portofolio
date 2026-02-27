document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}

window.addEventListener('scroll', reveal);
function reveal() {
    let reveal = document.querySelectorAll('.reveal');

    for(let reveals = 0; reveals < reveal.length; reveals++){
        let windowheight = window.innerHeight;
        let revealTop = reveal[reveals].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowheight - revealPoint) {
            reveal[reveals].classList.add('active');
        }else{
            reveal[reveals].classList.remove('active');
        }
    }
}

const nav = document.querySelector('nav');
window.addEventListener('scroll', ()=> {
    if(window.scrollY >= 50){
        nav.classList.add('active_nav');
    }else{
        nav.classList.remove('active_nav');
    }
})