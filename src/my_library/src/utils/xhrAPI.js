function loadingBooks() {
 var requestURL = new XMLHttpRequest();
 requestURL.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
 requestURL.send();
    return JSON.parse(requestURL.responseText);
}
