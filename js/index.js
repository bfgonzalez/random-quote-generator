var api = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
var getQuote = function(data) {

  if (data.quoteAuthor === "") {
    	data.quoteAuthor = "Unknown";
  }

  $(".quote-text").text(data.quoteText);
  $(".quote-author").text("- " + data.quoteAuthor);

  $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + data.quoteText + '"' + ' - ' +  data.quoteAuthor));
};

//For the first quote which is the same by default
var firstQuote = "All men by nature desire to know.";
var firstAuthor = "Aristotle";

$(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + firstQuote + '"' + ' - ' + firstAuthor));

$(".get-quote").on("click", function() {

	$.getJSON(api, getQuote, "jsonp");

});