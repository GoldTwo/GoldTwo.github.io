//###Table Add rows###

//Assigns Variables for Easy Dom
var tablerow = document.createElement("div");
var tablecell_1 = document.createElement("div");
var tablecell_2 = document.createElement("div");
var Cell_1Data = document.createTextNode("Cell 1 created with dom");
var Cell_2Data = document.createTextNode("Cell 2 created with dom");
var table = document.getElementById("maintable");

//Dom appendChild's to move the elements
tablecell_1.appendChild(Cell_1Data);
tablecell_2.appendChild(Cell_2Data);
tablerow.appendChild(tablecell_1);
tablerow.appendChild(tablecell_2);
table.appendChild(tablerow);

//Give it classes so it will become part of the table
tablerow.className = "rTableRow";
tablecell_1.className = "rTableCell";
tablecell_2.className = "rTableCell";