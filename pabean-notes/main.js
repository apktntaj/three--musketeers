const toggleMenu = document.getElementById("toggle-menu");
const sidebarMenu = document.getElementById("sidebar-menu");

toggleMenu.addEventListener("click", () => {
  sidebarMenu.classList.toggle("show");
  const menuIcon = document.getElementById("menu-icon");

  let condition = menuIcon.classList.contains("fa-bars");

  if (condition) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});
