$(document).ready(function () {

			// check for saved data
			if (localStorage.getItem("playerName") !== null) {
				$("#name").val(localStorage.getItem("playerName"));
				$("#num_stations").val(localStorage.getItem("numStations"));
				$("#targets").val(localStorage.getItem("numTargets"));
				generateScorecard();
			}

			// form submission
			$("form").submit(function (e) {
				e.preventDefault();
				localStorage.setItem("playerName", $("#name").val());
				localStorage.setItem("numStations", $("#num_stations").val());
				localStorage.setItem("numTargets", $("#targets").val());
				generateScorecard();
			});

			// generate scorecard
			function generateScorecard() {
				var name = localStorage.getItem("playerName");
				var numStations = localStorage.getItem("numStations");
				var numTargets = localStorage.getItem("numTargets");
				var tableHTML = '<table class="table">';
				tableHTML += '<thead><tr><th colspan="' + (parseInt(numTargets) + 2) + '">Skeet Scorecard</th></tr></thead>';
				tableHTML += '<tbody><tr><td>Name:</td><td colspan="' + numTargets + '">' + name + '</td><td>Total</td></tr>';
				tableHTML += '<tr><td>Station:</td>';
				for (var i = 1; i <= numTargets; i++) {
					tableHTML += '<td>' + i + '</td>';
				}
			}
		})