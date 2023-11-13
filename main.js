'use strict';


const cards = document.getElementById("cards");

const darkMode = document.getElementById("darkMode");


const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
  else sidebar.classList.add("hide");
}

const keyUp = (e) => {
  if (e.key === "Escape") sidebar.classList.add("hide");
}

  // Bo'limlarni shakllantirish
  const sections = [
    {title: "O'qituvchilar", link: "./teachers.html"},
    {title: "O'quvchilar", link: "./students.html"},
    {title: "Xodimlar", link: "./employees.html"},
    {title: "Fanlar", link: "./subjects.html"},
    {title: "Xonalar", link: "./rooms.html"},
    {title: "Dars jadvallari", link: "#"},
    {title: "Sinflar", link: "#"},
    ];

    const setCards = () => {
      cards.innerHTML = "";

      sections.map((section) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4 mb-3";

      const link = document.createElement("a");
      link.href = section.link;
      link.innerHTML = section.title;
      link.className = "shadow bg-white rounded p-5 d-block";

      col.appendChild(link);

      cards.appendChild(col);
    });
    }



  // Dark mode
if (darkMode) {
  darkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
}



const loaded = () => setCards();