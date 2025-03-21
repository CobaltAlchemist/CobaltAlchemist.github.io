const savedTheme = localStorage.getItem("theme") || "system";
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let initialTheme = savedTheme;
if (initialTheme === null || initialTheme === "system") {
    initialTheme = systemPrefersDark ? "dark" : "light";
}
// Set data-theme to dark
document.documentElement.setAttribute("data-theme", initialTheme);
const rotation = {
    "dark": "light",
    "light": "system",
    "system": "dark"
}
const icon = {
    "dark": "🌙",
    "light": "☀️",
    "system": "🌐"
}
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const current = localStorage.getItem("theme");
            const next = rotation[current];
            const newTheme = next === "system" ? (systemPrefersDark ? "dark" : "light") : next;
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", next);
            themeToggle.textContent = icon[next];
        });
        themeToggle.textContent = icon[savedTheme];
    }
});