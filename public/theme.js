// Apply the saved preference before the first paint. Light is the default.
(() => {
  let theme = "light";
  try {
    if (localStorage.getItem("portfolio-theme") === "dark") theme = "dark";
  } catch {
    // The site remains usable when browser storage is unavailable.
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#101827" : "#fcfcfd");
})();
