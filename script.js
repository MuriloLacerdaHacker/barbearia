const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

menuToggle.addEventListener("click", () => {
menu.classList.toggle("active")
})

const imagens = document.querySelectorAll(".carrossel img")

imagens.forEach(img => {
img.addEventListener("click", () => {
img.classList.toggle("zoom")
})
})