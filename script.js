const header = document.querySelector(' .site-header');
const toggleBtn = document.querySelector(' .nav-toggle');

toggleBtn.addEventListener('click', ()=> {
    header.classList.toggle('active');

    //Optional: animate bars into an "X"
    toggleBtn.classList.toggle('open');
});