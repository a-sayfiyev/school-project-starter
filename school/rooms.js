'use strict';

const subjects = [
    {
        subjectName: "Tarix",
        subjectHour: "6-'A'",
        teacher: "Davronova M",
        room: "14",
    },
    {
        subjectName: "Matem",
        subjectHour: "8-'B'",
        teacher: "Urunov J",
        room: "2",
    },
    {
        subjectName: "Rus tili",
        subjectHour: "11-'A'",
        teacher: "Egamberdiyeva S",
        room: "18",
    },
    {
        subjectName: "Ona tili",
        subjectHour: "4-'B'",
        teacher: "Qodirova Z",
        room: "5",
    },
];

const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

const loaded = () => {
    tbody.innerHTML = "";

    subjects.forEach((subject, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${index + 1}</th>
            <td>${subject.subjectName}</td>
            <td>${subject.subjectHour}</td>
            <td>${subject.teacher}</td>
            <td>${subject.room}</td>
            <td>
                <button class="btn" onclick="deleteSubject(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
};

const filter = (event) => {
    const filterText = event.target.value.toLowerCase();

    const filteredSubjects = subjects.filter((subject) => {
        const fullName = `${subject.subjectName} ${subject.subjectHour}`.toLowerCase();
        return fullName.includes(filterText);
    });

    tbody.innerHTML = "";

    filteredSubjects.forEach((subject, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${index + 1}</th>
            <td>${subject.subjectName}</td>
            <td>${subject.subjectHour}</td>
            <td>${subject.teacher}</td>
            <td>${subject.room}</td>
            <td>
                <button class="btn" onclick="deleteSubject(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
};

const deleteSubject = (index) => {
    if (index >= 0 && index < subjects.length) {
        subjects.splice(index, 1);
        loaded();
    }
};

loaded();
