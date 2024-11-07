// json2html.js
export default function json2html(data) {
    // Create the table element with a data-user attribute
    let html = `<table data-user="gangareddyanthireddy@gmail.com">`;

    // Add the header row
    html += `
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
    `;

    // Loop through each object in the data array and create a row
    data.forEach(person => {
        html += `
            <tr>
                <td>${person.Name}</td>
                <td>${person.Age}</td>
                <td>${person.Gender || ''}</td>
            </tr>
        `;
    });

    // Close tbody and table tags
    html += `</tbody></table>`;

    return html;
}
