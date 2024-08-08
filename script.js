const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 100){
            navbar.classList.add('navbarClr');
        }else{
            navbar.classList.remove('navbarClr');
        }
    });

});