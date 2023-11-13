const sidebar = document.getElementById("sidebar");

const darkMode = document.getElementById("darkMode");

const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
  else sidebar.classList.add("hide");
}

const keyUp = (e) => {
  if (e.key === "Escape") sidebar.classList.add("hide");
}


  // Dark mode
if (darkMode) {
  darkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
}
