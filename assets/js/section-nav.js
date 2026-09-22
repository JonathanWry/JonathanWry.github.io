document.querySelectorAll("#navbar a[href*='#']").forEach((link) => {
  link.addEventListener("click", () => {
    const toggle = document.querySelector(".navbar-toggler-main");
    if (toggle?.getAttribute("aria-expanded") === "true") {
      toggle.click();
    }
  });
});
