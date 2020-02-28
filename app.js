const burger = document.getElementById("burger");
const links = document.getElementById("links");
const navLinks = document.querySelectorAll("#links li")

function toggleNav() {
    links.classList.toggle("isHidden");
}
