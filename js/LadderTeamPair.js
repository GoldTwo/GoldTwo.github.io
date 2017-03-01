//Nothing much here at the moment but will eventully be the heart of the team pairing

//Table Add rows

//Assigns Variable to a Table Row div
var tablerow = document.createElement("div");
//Assigns Variable to a Table Cell div
var tablecell_1 = document.createElement("div");
var tablecell_2 = document.createElement("div");
//Assigns Variable for easier dom 
var table = document.getElementById("maintable");

//Dom appendChild's to add the elements 
tablerow.appendChild(tablecell_1).className("rTableCell");
tablerow.appendChild(tablecell_2).className("rTableCell");
table.appendChild(tablerow).className("rTableRow");

