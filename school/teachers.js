'use strict';

const teachers = [
  {
    firstName: "Akobir",
    lastName: "Sayfiyev",
    subject: "Informatika",
    phone: "90 123 40 41",
  },
  {
    firstName: "Lorem",
    lastName: "Ipsumov",
    subject: "Matematika",
    phone: "90 123 40 41",
  },
  {
    firstName: "Ter",
    lastName: "Stegen",
    subject: "Ona tili",
    phone: "90 123 40 41",
  },
  {
    firstName: "Lorem",
    lastName: "Ipsumov",
    subject: "Matematika",
    phone: "90 123 40 41",
  },
];

const teachersTable = document.getElementById("teachersTable");
const tbodyTeachersTable = teachersTable.querySelector("tbody");

const loaded = () => {
  tbodyTeachersTable.innerHTML = "";

  teachers.forEach((t, i) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <th>${i + 1}</th>
      <td>${t.firstName}</td>
      <td>${t.lastName}</td>
      <td>${t.subject}</td>
      <td>${t.phone}</td>
      <td>
          <button class="btn btn-danger" onclick="deleteTeacher(${i})"><i class="fas fa-trash"></i></button>
      </td>
    `;

    tbodyTeachersTable.appendChild(row);
  });
};

const filter = (event) => {
  const filterText = event.target.value.toLowerCase();

  const filteredTeachers = teachers.filter((teacher) => {
    const fullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
    return fullName.includes(filterText);
  });

  tbodyTeachersTable.innerHTML = "";

  filteredTeachers.forEach((t, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th>${index + 1}</th>
      <td>${t.firstName}</td>
      <td>${t.lastName}</td>
      <td>${t.subject}</td>
      <td>${t.phone}</td>
      <td>
          <button class="btn btn-danger" onclick="deleteTeacher(${teachers.indexOf(t)})"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tbodyTeachersTable.appendChild(row);
  });
};

const deleteTeacher = (index) => {
  if (index >= 0 && index < teachers.length) {
    teachers.splice(index, 1);
    loaded();
  }
};

loaded();
