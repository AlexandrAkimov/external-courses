var requestURL = 'https://rsu-library-api.herokuapp.com/books';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var state = {
  		books: [],
  		search: '',
  		activeFilter: ''
	}
request.onload = function () {
  var books = request.response;
  state.books = books;
}