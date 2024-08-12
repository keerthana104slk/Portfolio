function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const sr = ScrollReveal({
    distance: '60px',
    duration :2500,
    delay : 400,
    reset: true
})
sr.reveal('.title',{delay:250,origin:'top'})
sr.reveal('.section__text__p1',{delay:250,origin:'top'})


window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
}