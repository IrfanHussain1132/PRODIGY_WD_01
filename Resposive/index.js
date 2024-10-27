
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.querySelector('a[href="#section1"]').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#section2"]').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('container2').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#section3"]').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('container3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('sun').addEventListener('click', function(event) {
    const sunIcon = event.target;
    document.body.classList.toggle('light-mode');
    
    if (sunIcon.classList.contains('fa-sun')) {
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
    } else {
        sunIcon.classList.remove('fa-moon');
        sunIcon.classList.add('fa-sun');
    }
});




