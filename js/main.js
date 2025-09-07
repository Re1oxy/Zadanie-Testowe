const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");
const overlay = document.querySelector(".nav-overlay");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navBar.classList.toggle("open");
    overlay.classList.toggle("open");

    if (navBar.classList.contains("open")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
    overlay.classList.remove("open");
    menuToggle.classList.remove("active");
    document.body.style.overflow = "";
})


document.querySelectorAll(".nav-item-o-nas, .nav-item-inwestycje")
    .forEach(item => {
        item.addEventListener("click", () => {
            const submenu = item.querySelector(".submenu, .submenu2");
            submenu.classList.toggle("open");
        });
    });

document.querySelectorAll('.rodo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});