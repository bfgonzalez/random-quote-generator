var api = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
var getQuote = function(data){
  
  if (data.quoteAuthor === "") {
    data.quoteAuthor = "Unknown";
  }

  $("#quote").text(data.quoteText);
  $("#author").text("- " + data.quoteAuthor);
  
  $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data.quoteText + '"' + '- ' +  data.quoteAuthor));
};  

//For the first quote which is the same by default 
var firstQuote = "All men by nature desire to know.";
var firstAuthor = "Aristotle";

$('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + firstQuote + '"' + '- ' + firstAuthor));
  
$("#get-quote").on("click", function() {

	$.getJSON(api, getQuote, 'jsonp');

});

/*
var api_url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {

	if (data.quoteAuthor === "") {
		data.quoteAuthor = "Unknown";
	}

	$("#author").text("- " + data.quoteAuthor);
	$("#text").text(data.quoteText);
	
	$('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor));

	
};

// first quote, hardcoded
var firstQuote = "Not all treasure is silver and gold, mate.";
var firstAuthor = "Captain Jack Sparrow";

$('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + firstQuote  + '" ' +  firstAuthor));



$("#new-quote").on("click", function() {

	$.getJSON(api_url, getQuote, 'jsonp');
}); */