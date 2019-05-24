//Initialization of DOM elements
var libraryContentBooks = document.getElementById('scroll');
var libraryContentBooksMustRead = document.getElementById('scrollMustRead');
var libraryContentBooksBests = document.getElementById('scrollBest');
var libraryContentBooksClassic = document.getElementById('scrollClassic');
var libraryContentBooksNonFiction = document.getElementById('scrollNonFiction');
var formAddBook = document.getElementById('main_form_block');
var formButtonBack = document.getElementById('form_button_back');
var addButton = document.getElementById('add_button');
var titleBook = document.getElementById('form_title_book');
var submitAddBook = document.getElementById('form_submit');
var formCoverBook = document.getElementById('form_image_photo');
var libraryNavItem = document.querySelector('.nav_category_item');
var filterNav = document.querySelector('.main_library_nav');
var navList = document.querySelector('.nav_category_list');
var authorBookFirstName = document.getElementById('form_autorFirstName_book');
var authorBookLastName = document.getElementById('form_autorLastName_book');
var ratingBook = document.getElementById('form_rating_book');
var mustRead = document.getElementById('mustRead');
var bests = document.getElementById('bests');
var classic = document.getElementById('classic');
var nonFiction = document.getElementById('non_fiction');
var historyAddBookList = document.getElementById('history_list');

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
  showBooks();
}