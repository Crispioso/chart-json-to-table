
function getData() {
	$.ajax({
	url: "figure3-1.json",
	type: "get",
	dataType: "JSON",
	success: function(response) {
		buildTable(response);
	},
	error: function(xhr, status, errorThrown) {
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	}
 })	
}

function buildTable(data) {
	// Store variables
	var headersLength = data.headers.length,
		heading;
	
	// Body structure of table
	$(".table-container").append("<table><thead><tbody>");
	$(".table-container thead").append("<tr>");
	
	// Build headers
	$(data.headers).each(function(i) {
		heading = data.headers[i];
		if (heading == 'undefined' || heading === '') {
			$(".table-container tr").append("<td>");
		}
		if (heading) {
			$(".table-container tr").append("<th scope='col'>" + data.headers[i] + "</th>");	
		}
		heading = data.headers;
	});
	
	// Build tbody
	$(data.data).each(function(i) {
		var dataCells = '';
		
		$.each(this, function(key) {
			if (key === '') {
				dataCells = dataCells + "<th scope='row'>" + this + "</th>";
			} else if ($.inArray(key, heading) >= 0) {
				dataCells = dataCells + "<td>" + this + "</td>";	
			}
		});
		$(".table-container tbody").append("<tr>" + dataCells + "</tr>");
	})
}

$(function() {
	getData();	
});