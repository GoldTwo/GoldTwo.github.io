//###Table Add rows###

//var team_1 = ["Ben/Tom", "Andy/Tim", "Grey/Brady"];
//var team_2 = ["Jerry/Jay", "Paul/Kyle", "Linus/Luke"];
//var rowcount = team_1.length;

var teams = [
	{team_1: "Ben/Tom",
	team_2: "Jerry/Jay"},
	
	{team_1: "Andy/Tim",
	team_2: "Paul/Kyle"},
	
	{team_1: "Grey/Brady",
	team_2: "Linus/Luke"},
	
	{team_1: "Edzel/Taran",
	team_2: "Destin/Kurzgesagt"}
]

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

for (t = 0; t < teams.length; t++){
	var tablerow = document.createElement("div");
	var tablecell_1 = document.createElement("div");
	var tablecell_2 = document.createElement("div");
	var table = document.getElementById("maintable");
	var Cell_1Data = document.createTextNode(teams[t].team_1);
	var Cell_2Data = document.createTextNode(teams[t].team_2);

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