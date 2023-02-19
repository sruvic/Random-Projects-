//our header
let header = document.createElement("header");

let heading = document.createElement("h1");
let headingText = document.createTextNode("Student Stuff");
heading.appendChild(headingText);

header.appendChild(heading);

document.body.appendChild(header);

heading.style.textAlign = 'center'
heading.style.fontFamily = 'Helvetica'

//background
document.body.style.background = "pink";
document.body.style.backgroundSize = "cover"

// create a new table element
const table = document.createElement('table');

table.setAttribute('border', '1');

// create rows and cells for the table
for (let i = 0; i < 5; i++) {
    // create a new row element
    const row = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
        // create a new cell element
        const cell = document.createElement('td');

        cell.style.width = '120px';
        cell.style.height = '80px';

        // add some text to the cell
        const cellText = document.createTextNode(`Student Description`);
        cell.appendChild(cellText);

        // add the cell to the row
        row.appendChild(cell);
    }

    // add the row to the table
    table.appendChild(row);
}

table.style.backgroundColor = 'grey';
table.style.borderCollapse = 'collapse';
table.style.margin = 'auto'
table.style.fontFamily = 'Arial'
table.style.borderWidth = "1px"

// add the table to the document
document.body.appendChild(table);

