console.log("hello world")

var sentence = "this is a string!"
var number = 5 + 5

var counter = 0

$("h1").on("click", function(){
	$("h1").html(counter)
	counter = counter + 1
})