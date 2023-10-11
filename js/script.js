let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
// menuIcon.onclick

//scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height ){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active')
            });
    }
});
}

// show text
let btnShowText = document.querySelectorAll('.experience-btn');

btnShowText.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const experience = e.currentTarget.parentElement.parentElement;
        experience.classList.toggle("show-text");
    })
})
