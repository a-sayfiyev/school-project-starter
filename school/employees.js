'use strict';

const students = [
    {
        firstName: "Akobir",
        lastName: "Sayfiyev",
        class: "Direktor",
        phone: "90 123 40 41",
    },
    {
        firstName: "Lorem",
        lastName: "Ipsumov",
        class: "Dir o'rin bosari",
        phone: "90 123 40 41",
    },
    {
        firstName: "Cristiano",
        lastName: "Halland",
        class: "Qorovul",
        phone: "90 123 40 41",
    },
    {
        firstName: "Leo",
        lastName: "Messi",
        class: "Buxgalter",
        phone: "90 123 40 41",
    },
];

const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

const loaded = () => {
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${index + 1}</th>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.class}</td>
            <td>${student.phone}</td>
            <td>
                <button class="btn" onclick="deleteStudent(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
};

const filter = (event) => {
    const filterText = event.target.value.toLowerCase();

    const filteredStudents = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        return fullName.includes(filterText);
    });

    tbody.innerHTML = "";

    filteredStudents.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${index + 1}</th>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.class}</td>
            <td>${student.phone}</td>
            <td>
                <button class="btn" onclick="deleteStudent(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
};

const deleteStudent = (index) => {
    if (index >= 0 && index < students.length) {
        students.splice(index, 1);
        loaded();
    }
};

loaded();
