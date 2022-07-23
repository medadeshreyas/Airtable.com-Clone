import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;
import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer;

const clip = document.querySelectorAll('video');

for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter', function (e) {
        clip[i].play()
    })
    for (let i = 0; i < clip.length; i++) {
        clip[i].addEventListener('mouseout', function (e) {
            clip[i].pause()
        })
    }
}