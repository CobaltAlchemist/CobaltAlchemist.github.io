if (["dark", "light", "system"].indexOf(localStorage.getItem("theme")) === -1) {
    localStorage.setItem("theme", "system");
}
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let initialTheme = savedTheme;
if (initialTheme === null || initialTheme === "system") {
    initialTheme = systemPrefersDark ? "dark" : "light";
}
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
            const current = localStorage.getItem("theme") || "system";
            const next = rotation[current];
            const newTheme = next === "system" ? (systemPrefersDark ? "dark" : "light") : next;
            document.documentElement.setAttribute("data-theme", newTheme);
            console.log(`Theme set to ${newTheme} from ${current}, next is ${next}`);
            localStorage.setItem("theme", next);
            themeToggle.textContent = icon[next];
        });
        themeToggle.textContent = icon[savedTheme];
    }
});