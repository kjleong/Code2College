function displayVariablesAndTypes(elementId) {

	// assign designated variable values here
	var numVariable;		//assign a number
	var stringVariable;		//assign a string
	var boolVariable;		//assign a boolean

	// assign any values for these variables
	var anyVariable1;
	var anyVariable2;
	var anyVariable3;

	// assign these during the None,Null,Undefined section
	var nullVariable; 		//assign null
	var undefinedVariable; 	//assign undefined

	// these will be filled out 
	var unassignedVariable;  // leave this unassigned
	var functionVariable = function someFunction() { return 0; };
	var objectVariable = {"FirstName": "John", "LastName": "Smith"};
	var arrayVariable = ["Red","Green","Blue","Cyan","Magenta","Yellow"];

	var outString 
	outString += "numVariable = " + numVariable + ", and the type is " + typeof(numVariable) + "<br/>";
	outString += "stringVariable = " + stringVariable + ", and the type is " + typeof(stringVariable) + "<br/>";
	outString += "boolVariable = " + boolVariable + ", and the type is " + typeof(boolVariable) + "<br/><br/>";

	outString += "anyVariable1 = " + anyVariable1 + ", and the type is " + typeof(anyVariable1) + "<br/>";
	outString += "anyVariable2 = " + anyVariable2 + ", and the type is " + typeof(anyVariable2) + "<br/>";
	outString += "anyVariable3 = " + anyVariable3 + ", and the type is " + typeof(anyVariable3) + "<br/><br/>";

	outString += "unassignedVariable = " + unassignedVariable + ", and the type is " + typeof(unassignedVariable) + "<br/>";
	outString += "functionVariable = " + functionVariable + ", and the type is " + typeof(functionVariable) + "<br/>";
	outString += "objectVariable = " + JSON.stringify(objectVariable) + ", and the type is " + typeof(objectVariable) + "<br/>";
	outString += "arrayVariable = " + JSON.stringify(arrayVariable) + ", and the type is " + typeof(arrayVariable) + "<br/><br/>";

	outString += "null, undefined, and unassigned comparisons<br/>" 
	outString += "nullVariable = " + nullVariable + ", and the type is " + typeof(nullVariable) + "<br/>";
	outString += "undefinedVariable = " + undefinedVariable + ", and the type is " + typeof(undefinedVariable) + "<br/>";
	outString += "unassignedVariable = " + unassignedVariable + ", and the type is " + typeof(unassignedVariable) + "<br/>";

	document.getElementById(elementId).innerHTML = outString;

}