export const initializeMenu = () => {
  const openButton = document.getElementById("open-menu");
  const closeButton = document.getElementById("close-menu");

  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll("[data-anchor]");

  const onCloseMenu = () => {
    menu.classList.remove("menu_open");
    overlay.classList.remove("overlay");
  };

  openButton.addEventListener("click", () => {
    menu.classList.add("menu_open");
    overlay.classList.add("overlay");
  });

  closeButton.addEventListener("click", onCloseMenu);
  overlay.addEventListener("click", onCloseMenu);
  links.forEach((link) => {
    link.addEventListener("click", onCloseMenu);
  });
};
