document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menubar = document.querySelector(".menubar");
  
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("menu-icon-active");
      menubar.classList.toggle("active");
    });
  });
  