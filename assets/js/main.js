// =============== SHOW MENU ===========
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

// ========================== IF SHOW MENU ======================
// show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    iconToggle = document.getElementById("nav-toggle");

    // hiden
    iconToggle.classList.add("hiden-icon-toggle");
  });
}

// hiden menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    iconToggle = document.getElementById("nav-toggle");

    // hiden
    iconToggle.classList.remove("hiden-icon-toggle");
    iconToggle.classList.add("show-menu");
  });
}

// =====================INFO ZALO =================
const imgZalo = document.getElementById("zalo_close");
const iconZalo = document.getElementById("iconZalo");
const infoClose = document.getElementById("info_modal");
const footer_zalo = document.getElementById("footer_zalo")
// ------ show zalo -----------
iconZalo.addEventListener("click", () => {
  infoClose.classList.add("modal-active");
});

footer_zalo.addEventListener("click", () => {
  infoClose.classList.add("modal-active");
});
// ---------- hiden zalo -------------
imgZalo.addEventListener("click", () => {
  infoClose.classList.remove("modal-active");
});
// ======================== REMOVE MENU MOBILE ====================
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  console.log(navMenu);

  navMenu.classList.remove("show-menu");
  console.log("enent click");
}

// them cac event vào navLink
// navLink.forEach((n) => n.addEventListener("click", linkAction));

// ========================= SCROLL SECTION ACTIVE LINK ======================
const section = document.querySelectorAll("section[id]");

// =============================== ACCORDION SKILLS =====================
const skillsContent = document.getElementsByClassName("skills_content");

function toggleSkills() {
  // lấy thẻ div hiện tại vừa ckick vào
  // this = skillsHeader

  // classs được chọn
  let x = this.className;

  // class cha được chọn
  let itemClass = this.parentNode.className;

  // close het tat  cac cac content
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }

  // mở content được chọn
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

const skillsHeader = document.querySelectorAll(".skills_header");

skillsHeader.forEach(function (el) {
  el.addEventListener("click", toggleSkills);
});

// =============================== QUALIFICATION TABS =================
const tabs = document.querySelectorAll("[data-target]");
console.log("🚀 ~tabs", tabs);

const tabContents = document.querySelectorAll("[data-content]");
console.log("🚀 ~tabContents", tabContents);

tabs.forEach((tab) => {
  // them event vào tab
  tab.addEventListener("click", () => {
    // lấy target tên 'data-target'
    const target = document.querySelector(tab.dataset.target);

    console.log("🚀 ~tab.dataset.target", tab.dataset.target);

    console.log("🚀~ tabContents", tabContents);
    tabContents.forEach((tabContent) => {
      console.log("🚀~ tabContent", tabContent);
      tabContent.classList.remove("qualification_active");
    });

    target.classList.add("qualification_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

// ============================= SEVICES MODAL (icon zalo sua dung chung) ===========================
const modalViews = document.querySelectorAll(".services_modal");
const modalBtns = document.querySelectorAll(".services_button");
const modalCloses = document.querySelectorAll(".services_modal-close");

// nhận giá trị index từ dưới, thêm class active-modal
// madalClick = index của cái nut đó

let modal = function (modalClick) {
  console.log("modalClick 2");

  modalViews[modalClick].classList.add("modal-active");
  console.log(
    "🚀~ modalViews[modalClick].classList",
    modalViews[modalClick].classList
  );

  // them event remove vào nut close modal
  modalCloses[modalClick].addEventListener("click", () => {
    modalViews[modalClick].classList.remove("modal-active");
  });
};

//  chạy qua các nút viewMore
modalBtns.forEach((modalBtn, i) => {
  console.log("modalBtn: ", modalBtn.classList);

  // thêm event click vào nút viewMore qua index
  modalBtn.addEventListener("click", () => {
    console.log("modalClick 1");
    modal(i);
  });
});

// =================== PORTFOLIO ================
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// ==================== show scroll up ================= 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')

  if(this.scrollY >= 560) {
    scrollTop.classList.add('scroll_show');
  }

  else {
    scrollTop.classList.remove('scroll_show')
  }
}

window.addEventListener('scroll', scrollTop)


// ================ Butoon dark / night ==================
let activeDark = false

buttonTheme = document.getElementById('theme-button')
buttonTheme.addEventListener('click', () =>{
  activeDark = !activeDark

  if(activeDark){
    document.body.classList.add('dark-theme')
    buttonTheme.classList.remove('fa-moon')
    buttonTheme.classList.add('fa-lightbulb')
  }

  else {
    document.body.classList.remove('dark-theme')
    buttonTheme.classList.add('fa-moon')
    buttonTheme.classList.remove('fa-lightbulb')
  }
})

if (activeDark) {
  document.body.classList.add('dark-theme')
}

// hiden menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    iconToggle = document.getElementById("nav-toggle");

    // hiden
    iconToggle.classList.remove("hiden-icon-toggle");
    iconToggle.classList.add("show-menu");
  });
}