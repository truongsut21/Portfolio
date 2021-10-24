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
