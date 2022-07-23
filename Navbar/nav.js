import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML = nav;
let signup = document.getElementById("signup");

signup.addEventListener("click", myFun);
function myFun() {
  location.href = "/Navbar/signup.html";
}
let login = document.getElementById("login");

login.addEventListener("click", myLogin);
function myLogin() {
  location.href = "/Navbar/login.html";
}

let Product = document.getElementById("product");
Product.addEventListener("click", product);
function product() {
  console.log("Product");
}
