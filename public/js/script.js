//Humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//click window agar ketika di klik dimanapun humburger tidak akan tertutup dan tetap terbuka
window.addEventListener('cick', function() {
    //jika yang diklick selain humbergenya 
    if(e.taget != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// JavaScript untuk menampilkan dan menyembunyikan dropdown saat hover
    const parentDropdown = document.querySelector('.li-down');
    const itemDropdown = document.querySelector('#dropdown');
    const faRight = document.getElementById('i-right');
    const faDown = document.getElementById('i-down');
    const faRight2 = document.getElementById('i-right2');
    const faDown2 = document.getElementById('i-down2');

    

    parentDropdown.addEventListener('mouseover', function() {
        itemDropdown.classList.remove('hidden');
        // for caret-right
        faRight.classList.remove('inline');
        faRight.classList.add('hidden');
        // for caret-down
        faDown.classList.remove('hidden');
        faDown.classList.add('inline');


        //WHITE
        faRight2.classList.remove('dark:inline');
        faRight2.classList.add('dark:hidden');
        // for caret-down
        faDown2.classList.remove('dark:hidden');
        faDown2.classList.add('dark:inline');
    });
    
    parentDropdown.addEventListener('mouseleave', function() {
        itemDropdown.classList.add('hidden');
          // for caret-right
        faRight.classList.remove('hidden');
        faRight.classList.add('inline');
        // for caret-down
        faDown.classList.remove('inline');
        faDown.classList.add('hidden');

        //WHITE
        faRight2.classList.remove('dark:hidden');
        faRight2.classList.add('dark:inline');
        // for caret-down
        faDown2.classList.remove('dark:inline');
        faDown2.classList.add('dark:hidden');
    });
    
//header scroll
// window.onscroll = function(){
//     const header = document.querySelector('header');
//     const up = document.querySelector('#up');
//     const fixedNav = header.offsetTop;

//     if(window.pageYOffset > fixedNav){
//         header.classList.add('nav-fixed');
//         up.classList.remove('hidden');
//         itemDropdown.classList.add('nav-dropdownScroll');

//     }else{
//         header.classList.remove('nav-fixed');
//         up.classList.add('hidden');
//         itemDropdown.classList.remove('nav-dropdownScroll');
//         itemDropdown.classList.add('nav-dropdown');
//     }
// }
window.onscroll = function(){
    const header = document.querySelector('header');
    const up = document.querySelector('#up');
    const bot = document.querySelector('#bot');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
        up.classList.remove('hidden');
        bot.addEventListener('scroll', function(){
            bot.classList.add('animate-fadeIn');
        })
        bot.classList.add('hidden');
        itemDropdown.classList.add('nav-dropdownScroll');
    } else {
        header.classList.remove('nav-fixed');
        up.classList.add('hidden');
        bot.classList.remove('hidden');
        // bot.classList.add('animate-fadeOut');
        itemDropdown.classList.remove('nav-dropdownScroll');
        itemDropdown.classList.add('nav-dropdown');
    }
}



//DarkMode
function toggleDarkMode(){
    if(localStorage.getItem("theme") === "dark"){
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }else{
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    }
}


document
    .querySelector("#darkMode")
    .addEventListener("click", toggleDarkMode);
    if(localStorage.getItem("theme") === "dark"){
        document.documentElement.classList.add("dark");
    }

//END DARK MODE FUNCTION


//CONTACT FORM
const scriptURL = 'https://script.google.com/macros/s/AKfycbyuIldpEFEXX2F5Gg3VSIT7YTvPfyjcp31_chrES5KxreVYMaIPQx_oi_VQb-K2mF_k/exec'
const form = document.forms['contact-me'];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const message = document.querySelector('.message');
const messageError = document.querySelector('.messagError');


form.addEventListener('submit', e => {
    e.preventDefault()
    // if button submit click
    //show btn-loading hide btn-submit
    btnLoading.classList.toggle('hidden');
    btnSubmit.classList.toggle('hidden');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
        //show 
        btnLoading.classList.toggle('hidden');
        btnSubmit.classList.toggle('hidden');

        //show alert success
        message.classList.toggle('hidden')
        //clear form
        form.reset();
        console.log('Success!', response)
        })
        .catch(error => {
        //show alert success
        messageError.classList.toggle('hidden')
        console.error('Error!', error.message)
    })
})