function handleResponsiveNavBar() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

const myAccount = document.getElementById("nav-bar-account");

myAccount.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    localStorage.getItem("password") != null &&
    localStorage.getItem("passcode") != null
  ) {
    localStorage.getItem("password") === localStorage.getItem("passcode")
      ? (window.location =
          "https://web-programming-sem1-2021.github.io/Group26_Asm2_Javascript/homepage/myAccount/my-account.html")
      : {};
  } else {
    window.location =
      "https://web-programming-sem1-2021.github.io/Group26_Asm2_Javascript/homepage/myAccount/login.html";
  }
});
