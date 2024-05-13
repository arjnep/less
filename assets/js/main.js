document.addEventListener("DOMContentLoaded", function() {
  function changeTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("light");
    const isLightTheme = body.classList.contains("light");
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }
  
  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.querySelector("body").classList.add("light");
    }
  }
  
  initializeTheme();
  
  const checkbox = document.getElementById("theme_checkbox");
  checkbox.addEventListener("change", changeTheme);
});
