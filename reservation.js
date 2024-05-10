$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	

	$("#tabs").tabs();
	
	
	$("#arrival_date").datepicker({
		minDate: 0, 
		maxDate: "+90D", 
				dateFormat: "yy-mm-dd" 
	});

	
		$("#policies").click(function() {
			$("#dialog").dialog({
				modal: true 
		});
	});

	
	$("#reservation_form").submit(function(event) {
		var isValid = true;





		if (!isValid) {
			event.preventDefault();
		}
	});
});