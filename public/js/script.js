//Humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//header scroll
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
    }else{
        header.classList.remove('nav-fixed');
    }
}

// JavaScript untuk menampilkan dan menyembunyikan dropdown saat hover
    const parentDropdown = document.querySelector('.li-down');
    const itemDropdown = document.querySelector('#dropdown');
    const faRight = document.getElementById('i-right');
    const faDown = document.getElementById('i-down');

    

    parentDropdown.addEventListener('mouseover', function() {
        itemDropdown.classList.remove('hidden');
        // for caret-right
        faRight.classList.remove('inline');
        faRight.classList.add('hidden');
        // for caret-down
        faDown.classList.remove('hidden');
        faDown.classList.add('inline');
    });
    
    parentDropdown.addEventListener('mouseleave', function() {
        itemDropdown.classList.add('hidden');
          // for caret-right
        faRight.classList.remove('hidden');
        faRight.classList.add('inline');
        // for caret-down
        faDown.classList.remove('inline');
        faDown.classList.add('hidden');
    });
    