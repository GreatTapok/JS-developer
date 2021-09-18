function sortTable(n) {
  let table, rows, switching, i, firstRow, nextRow, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("readyTable");
  switching = true;
  dir = "asc"; // Initial sorting direction set to ascending
  
  // Loop which keeps switching the rows
  while (switching) {
    switching = false; // No switching is done
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;

      // Get element from one row and then one from the next   
      firstRow = rows[i].getElementsByTagName("p")[n];
      nextRow = rows[i + 1].getElementsByTagName("p")[n];

      // Check if the two rows should switch place depnding on direction
      if (dir == "asc") {
        if (firstRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (firstRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }

    // If switching is needed, switch the rows
    if (shouldSwitch) { 
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++; // Each time switch made increase this count
    } else {

      // If no switching has been done, change direction and run the loop again 
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}