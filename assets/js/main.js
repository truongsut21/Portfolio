// =============== SHOW MENU ===========
const navMenu = document.getElementById('nav-menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')
    console.log(navMenu.classList)

// ========================== IF SHOW MENU ======================
// show menu
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   } )
}

// hiden menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ======================== REMOVE MENU MOBILE ==================== 
const na
