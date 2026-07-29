const students = [
    { id: 1, name: 'Aarav Sharma', branch: 'CSE', rollNo: '101' },
    { id: 2, name: 'Diya Patel', branch: 'ECE', rollNo: '202' },
    { id: 3, name: 'Rohan Verma', branch: 'CSE', rollNo: '303' },
    { id: 4, name: 'Meera Singh', branch: 'ME', rollNo: '404' }
];

const studentForm = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const branchInput = document.getElementById('branch');
const rollNoInput = document.getElementById('rollNo');
const searchInput = document.getElementById('searchInput');
const branchFilter = document.getElementById('branchFilter');
const studentList = document.getElementById('studentList');
const totalStudents = document.getElementById('totalStudents');

function populateBranchOptions() {
    const branches = [...new Set(students.map(student => student.branch))];
    const options = branches.map(branch => `<option value="${branch}">${branch}</option>`).join('');
    branchFilter.innerHTML = `<option value="All">All Branches</option>${options}`;
}

function getFilteredStudents() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedBranch = branchFilter.value;

    return students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm);
        const matchesBranch = selectedBranch === 'All' || student.branch === selectedBranch;
        return matchesSearch && matchesBranch;
    });
}

function renderStudents() {
    const filteredStudents = getFilteredStudents();
    totalStudents.textContent = students.length;

    if (filteredStudents.length === 0) {
        studentList.innerHTML = '<tr class="empty-row"><td colspan="4">No record found</td></tr>';
        return;
    }

    studentList.innerHTML = filteredStudents
        .map(
            student => `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.branch}</td>
                    <td>${student.rollNo}</td>
                    <td><button class="delete-btn" data-id="${student.id}">Delete</button></td>
                </tr>
            `
        )
        .join('');
}

studentForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const branch = branchInput.value.trim();
    const rollNo = rollNoInput.value.trim();

    if (!name || !branch || !rollNo) {
        return;
    }

    students.push({ id: Date.now(), name, branch, rollNo });
    populateBranchOptions();
    studentForm.reset();
    renderStudents();
});

searchInput.addEventListener('input', renderStudents);
branchFilter.addEventListener('change', renderStudents);

studentList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
        const studentId = Number(event.target.dataset.id);
        const index = students.findIndex(student => student.id === studentId);

        if (index !== -1) {
            students.splice(index, 1);
            populateBranchOptions();
            renderStudents();
        }
    }
});

populateBranchOptions();
renderStudents();
