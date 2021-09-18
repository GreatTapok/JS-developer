// Function to flatten nested object to get firstName and lastName
function flattenObj(obj, result = {}) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], result);      // Iterate function until object becomes flat
    } else {
      result[key] = obj[key];
    }
  }
  return result;      // Return flat object
}

let flatData = [];  //Array for data from flat object
let headers = [];   //Array for object keys - headers of the table

// Function creating table
function tableCreation() {
  for (let i = 0; i < data.length; i++) {
    flatData.push(flattenObj(data[i]));   // Push data to array
    for (let k in flatData[i]) {
      if (k != "id" && k != "phone") {    // Exclude unwanted columns
        if (headers.indexOf(k) === -1) {
          headers.push(k);    // Push keys to headers array
        }
      }
    }
  }

  let table = document.createElement("table");   // Create a table element
  table.setAttribute("id", "readyTable")         // Set an id to a table

  let tr = table.insertRow(-1);   // Create a table row - tr element

  for (let i = 0; i < headers.length; i++) {
    let theader = document.createElement("th");    // Create a table header - th element
    theader.setAttribute("onclick", `sortTable(${i})`); // Sort the table on click
    theader.innerHTML = headers[i];
    tr.appendChild(theader);     // Append column names to the row
  }

  // Add the data to the table
  for (let i = 0; i < flatData.length; i++) {
    trow = table.insertRow(-1);  // Add another row at the end of the table
    for (let j = 0; j < headers.length; j++) {
      let cell = trow.insertCell(-1);
      cell.setAttribute("onclick", `changeData(${i})`); // Create form for changing data
      let par = document.createElement("p");
      par.setAttribute("class", "text");
      par.setAttribute("id", `t-${i}-${j}`);
      par.innerHTML = flatData[i][headers[j]];  // Insert cell at the particular place of the table
      cell.appendChild(par);
    }
  }

  // Add the created table containing json data to the HTML
  let el = document.getElementById("box");
  el.appendChild(table);

  // Loop for making eyeColor column elements represented with the color
  for (let i = 0; i < flatData.length; i++) {
    for (let j = 0; j < headers.length; j++ ) {
      if (headers[j] === "eyeColor") {
        let color = document.getElementById(`t-${i}-${j}`);
        color.style.backgroundColor = `${color.innerHTML}`;
        color.style.color = `${color.innerHTML}`;
      }
    }
  }
}

tableCreation();
