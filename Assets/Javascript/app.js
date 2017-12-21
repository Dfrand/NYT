
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4a142327a02841f28aa4c1a4044054ea";


// AJAX call
$('#searchBtn').on('click', function() {
	console.log('clicked');
$.ajax({
	url: queryURL,
	method: "GET"
})

.done(function(response){
	console.log(response);

})

});