mustRead.onclick = function(){
  showBooksMustRead();
}
bests.onclick = function(){
  showBooksBests();    
}
classic.onclick = function(){
  showBooksClassic();
}
nonFiction.onclick = function(){
  showBooksNonFiction();
}
function showBooksBests() {
  showCategoryBooks("best"); 
};
function showBooksMustRead() {
  showCategoryBooks("must_read");  
};
function showBooksNonFiction() {
  showCategoryBooks("non_fiction"); 
};
function showBooksClassic() {
 showCategoryBooks("classic");
};
function showCategoryBooks(category){
  while(libraryContentBooks.firstChild){
    libraryContentBooks.removeChild(libraryContentBooks.firstChild);
  }
  for (var i = 0; i < state.books.length; i++) {
    for (var c = 0; c < state.books[i].categories.length; c++) {
      if(state.books[i].categories[c] === category){
        var myLibraryContent = document.createElement('div');
        myLibraryContent.classList.add("library_content_book");
        var libraryBlockImage = document.createElement('div');
        libraryBlockImage.classList.add("content_book_image");
        var myContentBookImage = document.createElement('img');
        myContentBookImage.classList.add("book_image_pic");
        var myContentBookTitle = document.createElement('h4');
        myContentBookTitle.classList.add("content_book_title");
        var myContentBookAutor = document.createElement('p');
        myContentBookAutor.classList.add("content_book_autor");


        myContentBookImage.src = state.books[i].image_url;
        myContentBookTitle.textContent = state.books[i].title;
        myContentBookAutor.textContent = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
        myContentRatingNum = state.books[i].rating;

        libraryContentBooks.appendChild(myLibraryContent);
        myLibraryContent.appendChild(libraryBlockImage);
        libraryBlockImage.appendChild(myContentBookImage);
        myLibraryContent.appendChild(myContentBookTitle);
        myLibraryContent.appendChild(myContentBookAutor);
        for (var j = 0; j < myContentRatingNum; j++) {
          var myContentRating = document.createElement('i');
          myContentRating.classList.add("fa", "fa-star", "fa-star-lib");
          myLibraryContent.appendChild(myContentRating);
        }
      }    
    }
  }  
}