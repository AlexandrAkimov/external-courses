function showBooks() {
  for (var i = 0; i < state.books.length; i++) {
    console.log(state.books[i]);
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

    
    libraryContentBooks.appendChild(myLibraryContent)
    myLibraryContent.appendChild(libraryBlockImage);
    libraryBlockImage.appendChild(myContentBookImage);
    myLibraryContent.appendChild(myContentBookTitle);
    myLibraryContent.appendChild(myContentBookAutor);
    for (var j = 0; j < 5; j++) {
      if(j < myContentRatingNum){
        var myContentRating = document.createElement('i');
        myContentRating.className = 'fa';
        myContentRating.classList.add("fa-star", "fa-star-lib");
        myLibraryContent.appendChild(myContentRating);
      } else {
          myContentRating = document.createElement('i');
          myContentRating.className = 'fa';
          myContentRating.classList.add("fa-star-o", "fa-star-lib");
          myLibraryContent.appendChild(myContentRating);
        }
      } 
    }
  libraryContentBooks.addEventListener('click', function (event) {
    myContentRating = document.querySelectorAll('.fa-star-lib');
    var target = event.target;
    if (target.classList.contains('fa')) {
      for (i = 0; i < myContentRating.length; i++){
        if (target === myContentRating[i]) {
          var count = i + 1;
          break;              
        }
      }
    if(count % 5 === 0){
      for (i = count - 5; i < count ; i++) {
        if (i <= count) {
          myContentRating[i].classList.remove('fa-star-o');
          myContentRating[i].classList.add('fa-star');
        } else {
            myContentRating[i].classList.add('fa-star-o');
        }
      }
    } else {
        var curCount = count;
        var maxCurCount = count;
        while((count % 5) !== 0){
        count -= 1;
        }
        while((maxCurCount % 5) !== 0){
          maxCurCount += 1;
        }
        for (i = count; i < curCount ; i++) {
          if(myContentRating[i].classList.contains('fa-star')){
            for (var j = i+1; j < maxCurCount; j++) {
              myContentRating[j].classList.remove('fa-star');
              myContentRating[j].classList.add('fa-star-o')
            }
          } else {
            myContentRating[i].classList.remove('fa-star-o');
            myContentRating[i].classList.add('fa-star');
            myContentRating[i].classList.add('fa-star-o');
            myContentRating[i].classList.remove('fa-star-o');
          }  
        }
      }
    }
  });
  var menuItems = document.querySelectorAll('.nav_category_list li');
function setMenuClass () {
  for (j = 0; j < 4; j++) {
    if (menuItems[j] === this) {
      menuItems[j].classList.add('active');
      continue;
    }
    menuItems[j].classList.remove('active');
  }
}

for (i = 0; i < 4; i++) {
  menuItems[i].addEventListener('click', setMenuClass);
}
}
addButton.onclick = function () {
  formAddBook.style.display = "block";
}
formButtonBack.onclick = function () {
   formAddBook.style.display = "none";
}
submitAddBook.onclick = function () {
  formAddBook.style.display = "none";
  while(libraryContentBooks.firstChild){
    libraryContentBooks.removeChild(libraryContentBooks.firstChild);
  }
  while(historyAddBookList.firstChild){
    historyAddBookList.removeChild(historyAddBookList.firstChild);
  }
  var date = new Date()
  formAddBook.style.display = "none";
  state.books.push({"title" : titleBook.value,
   "image_url" : formCoverBook.value,
   "author" : {"firstName" : authorBookFirstName.value, "lastName" : authorBookLastName.value},
   "rating" : ratingBook.value, "createdAt" : date
 });
  showBooks();
}