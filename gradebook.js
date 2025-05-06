// Fetch grade data from the server
function fetchGradeData() {
    fetch('http://localhost:3000/grades')  // This should match the route in your server
        .then(response => response.json())
        .then(data => {
            populateGradebook(data);  // Pass the data to populate the gradebook
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Populate the gradebook table with data
function populateGradebook(data) {
    const gradebookBody = document.getElementById('gradebookBody');
    gradebookBody.innerHTML = '';  // Clear the table before inserting new rows

    data.forEach(row => {
        const tr = document.createElement('tr');
        
        // Insert the student name and grades into the row
        tr.innerHTML = `
            <td>${row.student_name}</td>
            <td>${row.assignment1}</td>
            <td>${row.assignment2}</td>
            <td>${row.assignment3}</td>
        `;
        
        gradebookBody.appendChild(tr);  // Add the row to the table
    });
}

// Call the function to fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchGradeData);
