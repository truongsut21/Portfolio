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
const tabs = document.querySelectorAll('[data-target]')
console.log("🚀 ~tabs", tabs)

const tabContents = document.querySelectorAll('[data-content]')
console.log("🚀 ~tabContents", tabContents)




tabs.forEach(tab => {

  
  // them event vào tab
  tab.addEventListener('click', () => {
    // lấy target tên 'data-target' 
    const target = document.querySelector(tab.dataset.target)
  

    console.log("🚀 ~tab.dataset.target", tab.dataset.target)

    console.log("🚀~ tabContents", tabContents)
    tabContents.forEach(tabContent => {
      console.log("🚀~ tabContent", tabContent)
      tabContent.classList.remove('qualification_active')
    })
    

    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})


// 1:12 -
