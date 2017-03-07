//###Table Add rows###

var team_1 = ["Ben/Tom", "Andy/Tim", "Grey/Brady"];
var team_2 = ["Jerry/Jay", "Paul/Kyle", "Linus/Luke"];
var rowcount = team_1.length;

/*
var array = [1, 2, 3, 56, 98];
var x = 0;
for(i = 0; i = array.length; i++){
	if (array[i] < x){
		x = i;
	}
}
console.log(x);
*/

//Assigns Variables for adding the names to html with dom

for (t = 0; t < rowcount; t++){
	var tablerow = document.createElement("div");
	var tablecell_1 = document.createElement("div");
	var tablecell_2 = document.createElement("div");
	var table = document.getElementById("maintable");
	var Cell_1Data = document.createTextNode(team_1[t]);
	var Cell_2Data = document.createTextNode(team_2[t]);

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