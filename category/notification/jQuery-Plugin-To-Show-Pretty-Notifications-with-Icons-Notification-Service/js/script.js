$(document).ready(function(){
	$('#error').click(function(){
		$.NotificationService.showErrorNotification({
			title: "Lorem ipsum",
			message: "Nam finibus velit eu lectus blandit scelerisque.", 
		});
	});

	$('#warn').click(function(){
		$.NotificationService.showWarningNotification({
			title: "Lorem ipsum",
			message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
		});
	});

	$('#notice').click(function(){
		$.NotificationService.showInfoNotification({
			title: "Lorem ipsum",
			message: "Praesent porta neque odio, in interdum lectus facilisis ac. Cras eros neque, consectetur a rutrum sed, pharetra lobortis risus. Aliquam bibendum elementum lobortis.", 
		});
	});

	$('#top').click(function(){
		$.NotificationService.showTopNotification({
			title: "Lorem ipsum",
			message: "nterdum et malesuada fames ac ante ipsum primis in faucibus.",
			type: "top",
			id: "123"
		});
	});
});