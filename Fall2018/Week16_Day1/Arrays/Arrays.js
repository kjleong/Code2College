

function arrayExample(elementId) {

	var outputString = ""

	// populate an the array with 5 String elements
	var stringArray = ['honda','hyundai','toyota','ford','mercedes'];

	outputString += "Your stringArray is " + JSON.stringify(stringArray) 
	outputString += "<br/>";

	//[Try] add the length function on stringArray to the end of this string
	var stringArrayLength ;
	outputString += "The length of stringArray is " + stringArrayLength
	outputString += "<br/>";

	//[Try] use sort on stringArray and assign it to sortedStringArray
	var sortedStringArray  ;//  replace [] with sort() on stringArray
	outputString += "stringArray sorted is " + JSON.stringify(sortedStringArray);
	outputString += "<br/>";

	//[Try] append a string element to the end of string using push()

	outputString += "Your stringArray with an added element to the end is " + JSON.stringify(stringArray); 
	outputString += "<br/>";

	//[Try] append a string element to the beginning of the string using unshift()

	outputString += "Your stringArray with an added element to the beginning is " + JSON.stringify(stringArray);
	outputString += "<br/>"; 

	//[Try] feel free to try out the other functions as well
	//use outputString += 
	//and outputString += <br/>
	//to see your results

	document.getElementById(elementId).innerHTML = outputString;


}