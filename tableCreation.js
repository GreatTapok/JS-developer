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

// Function creating table
function tableCreation() {
  let flatData = [];  //Array for data from flat object
  let headers = [];   //Array for object keys - headers of the table
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
    theader.innerHTML = headers[i];
    tr.appendChild(theader);     // Append column names to the row
  }

  // Add the data to the table
  for (let i = 0; i < flatData.length; i++) {
    trow = table.insertRow(-1);  // Add another row at the end of the table
    for (let j = 0; j < headers.length; j++) {
      let cell = trow.insertCell(-1);
      let par = document.createElement("p");
      par.setAttribute("class", "text");
      par.innerHTML = flatData[i][headers[j]];  // Insert cell at the particular place of the table
      cell.appendChild(par);
    }
  }

  // Add the created table containing json data to the HTML
  let el = document.getElementById("box");
  el.appendChild(table);
}

tableCreation();
