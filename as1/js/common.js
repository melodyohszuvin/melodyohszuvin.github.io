const toggleButton = document.getElementById("bar-toggle");
const menu = document.getElementById("menu-bar");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    // 换图标
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // ×
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰
    }
});