//###Table Add rows###

var teams = ["Ben/Tom", "Andy/Tim", "Grey/Brady"];

//Assigns Variables for adding the names to html with dom
var tablerow = document.createElement("div");
var tablecell_1 = document.createElement("div");
var tablecell_2 = document.createElement("div");
var Cell_1Data = document.createTextNode("A Cell");
var Cell_2Data = document.createTextNode("B Cell");
var table = document.getElementById("maintable");

for (t = 0; t < teams.length; t++){
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
}

