export const onClickLinks = () => {
  const links = document.querySelectorAll("[data-anchor]");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("data-anchor");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.warn(`Target element with ID "${targetId}" not found.`);
      }
    });
  });
};
