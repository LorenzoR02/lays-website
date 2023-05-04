function myFunction() {
    var navbar = document.getElementById("top-navbar");
    var menuIcon = document.getElementById("menuIcon");

    if (navbar.className === "") {
        navbar.className += "open-navbar";
        menuIcon.className += " menu-open";
    } else {
        navbar.className = "";
        menuIcon.className = "menu-icon";
    }
}