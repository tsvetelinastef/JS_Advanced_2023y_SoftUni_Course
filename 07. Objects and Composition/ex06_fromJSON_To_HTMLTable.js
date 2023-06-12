/* 50 out of 100 here :'( .... */

function fromJSON_To_HTMLTable(json){

    let parsed = JSON.parse(json);
	let columNames = Object.keys(parsed[0]);
	let values = parsed.map((obj) => Object.values(obj));
	let result = "<table>\n";

	appendHeaders(columNames);
	appendValues(values);

	result += "</table>";

	function appendValues(values) {
		for (let currentValue of values) {
			result += `    <tr>`;
			for (const value of currentValue) {
				result += `<td>${escape(value)}</td>`;
			}
			result += "</tr>\n";
		}
	}

	function appendHeaders(columNames) {
		result += `    <tr>`;
		for (let column of columNames) {
			result += `<th>${column}</th>`;
		}
		result += "</tr>\n";
	}

	function escape(value) {
		return value
			.toString()
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");
	}
	console.log(result);
}

// jsonToHtmlTable(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`);
fromJSON_To_HTMLTable(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);

// <table>
//     <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
//     <tr><td>Pesho</td><td>4</td><td>8</td></tr>
//     <tr><td>Gosho</td><td>5</td><td>8</td></tr>
//     <tr><td>Angel</td><td>5.5</td><td>10</td></tr>
// </table>
