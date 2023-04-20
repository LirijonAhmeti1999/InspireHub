function openNavLinks() {
  var element = document.getElementById("top-header");
  var mainBody = document.querySelector("body");

  if (element.classList.contains("active")) {
    element.classList.remove("active");
    mainBody.style.overflowX = "unset";
  } else {
    element.classList.add("active");
    mainBody.style.overflowX = "hidden";
  }
}

function onMenuClick() {
  var element = document.getElementById("top-header");

  if (element.classList.contains("active")) {
    element.classList.remove("active");
    mainBody.style.overflowX = "unset";
  }
}
