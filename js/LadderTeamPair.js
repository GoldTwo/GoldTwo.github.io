//Nothing much here at the moment but will eventully be the heart of the team pairing

//Table Add rows

//Assigns Variable to a Table Row div
var tablerow = document.createElement("div");
//Assigns Variable to a Table Cell div
var tablecell_1 = document.createElement("div");
var tablecell_2 = document.createElement("div");
//Assigns Variable for easier dom 
var table = document.getElementById("maintable");

tablerow.appendChild(tablecell_1);
tablerow.appendChild(tablecell_2);
table.appendChild(tablerow)

