function buttonClickMessage(elementID) {
	var compareMessage = "The javascript function is in a separate .js file, click again";
	 var compareMessage2 = "The javascript function is in a separate .js file, keep clicking";
	var message = document.getElementById(elementID).innerHTML;
	if (message == compareMessage2) {
		document.getElementById(elementID).innerHTML = compareMessage;
	}
	else {
		document.getElementById(elementID).innerHTML = compareMessage2;
	}
}