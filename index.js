// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML = navbar;

import footer from "./components/footer.js";
document.getElementById('footer').innerHTML = footer;

import lastline from "./components/lastline.js";
document.getElementById('lastLine').innerHTML = lastline;


document.getElementById('signup').addEventListener("click", function () {
    window.location.href ="./dropdown/signup.html"
})

document.getElementById('login').addEventListener("click", function () {
    window.location.href = "./dropdown/login.html"
})