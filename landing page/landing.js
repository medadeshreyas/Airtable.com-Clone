import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar;
import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer;


document.getElementById('menu').addEventListener("click", function () {
  window.location.href = "./table.html";
})

document.querySelector(".airtable").addEventListener("click", function () {
  alert("This is the Demo version of the website.! You'll be Redirected to a new one...!!!!")
  setInterval(function () {
    location.href = "https://airtable.com/app6Dwf1Kzi1YGkeA/tblBi0QIpa5HQBYaw/viwphSO1zyaeTvvdp?blocks=hide"
  }, 1000)
});

