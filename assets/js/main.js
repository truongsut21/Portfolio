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
// console.log("🚀 ~ file: main.js ~ line 49 ~ skillsContent", skillsContent)

const skillsHeader = document.querySelectorAll(".skills_header");
// console.log("🚀 ~ file: main.js ~ line 50 ~ skillsHeader", skillsHeader)

function toggleSkills() {
  let itemClass = this.parentNode.className;
  console.log(
    "🚀 ~ file: main.js ~ line 56 ~ toggleSkills ~ itemClass",
    itemClass
  );

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }

  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }

  
}

skillsHeader.forEach(function (el) {
  console.log("🚀 ~ file: main.js ~ line 67 ~ skillsHeader.forEach ~ el", el);
  el.addEventListener("click", toggleSkills);
});
