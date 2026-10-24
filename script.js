const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    darkModeToggle.setAttribute("aria-pressed", String(isDarkMode));
});