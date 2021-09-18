let created = 0; // Nothing has been created yet

function changeData(x) {
  let box = document.getElementById("changeBox"); 
  let crBox = document.createElement("div"); // Create form for making changes to the data in the table
  crBox.setAttribute("id", "crBox");

  if (created) {    // If form was already created remove the old one
    document.getElementById("crBox").remove()
  }

  box.appendChild(crBox);
  
  // Fill the form with column names and input fields
  for (let i = 0; i < headers.length; i++) {
    let colName = document.createElement("label");   
    colName.innerHTML = headers[i];
    crBox.appendChild(colName);
    let inp = document.createElement("input");
    inp.setAttribute("id", `inp-${x}-${i}`);
    crBox.appendChild(inp);    
    let br = document.createElement("br");
    crBox.appendChild(br);

  }

  // Create a button for sending changes 
  let change = document.createElement("button");
  change.innerHTML = "Change";
  change.setAttribute("onclick", `makeChange(${x})`);
  crBox.appendChild(change);

  created = 1; // Set that form is created
}

// Function for the button which gets values and send them to the table
function makeChange(x){
  for (let i = 0; i < headers.length; i++) {
    let inp = document.getElementById(`inp-${x}-${i}`);
    if (inp.value != "") {  // If input field is empty, there are no changes made
      let text = document.getElementById(`t-${x}-${i}`);
      text.innerHTML = inp.value;
    }
  }
}