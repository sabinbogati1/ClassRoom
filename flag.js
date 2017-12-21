var hello = "Hello ";

function greetings(name){
	var greetingWord = "welcome";


	function sayHello(location){

		var innerFunctionWord = "inner word";
		return hello + name + " you are from " + location;

	}


 return sayHello;

	
}


var callOuterFun = greetings("Ramesh");


console.log(callOuterFun("kathmandu"));