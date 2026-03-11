const imagens = document.querySelectorAll(".carrossel img")

imagens.forEach(img => {

img.addEventListener("click", () => {

img.classList.toggle("zoom")

})

})