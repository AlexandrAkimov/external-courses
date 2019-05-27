var view = {
  showBooks : function(image, title, author, rating){
    var libraryContentBooks = document.getElementById('scroll');
    var myLibraryContent = document.createElement('div');
      myLibraryContent.classList.add("library_content_book");
      var libraryBlockImage = document.createElement('div');
      libraryBlockImage.classList.add("content_book_image");
      var myContentBookImage = document.createElement('img');
      myContentBookImage.classList.add("book_image_pic");
      myContentBookImage.src = image;
      var myContentBookTitle = document.createElement('h4');
      myContentBookTitle.classList.add("content_book_title");
      myContentBookTitle.textContent = title;
      var myContentBookAutor = document.createElement('p');
      myContentBookAutor.classList.add("content_book_autor");
      myContentBookAutor.textContent = author;
    
    libraryBlockImage.appendChild(myContentBookImage);

      myLibraryContent.appendChild(libraryBlockImage);
      myLibraryContent.appendChild(myContentBookTitle);
      myLibraryContent.appendChild(myContentBookAutor);
      libraryContentBooks.appendChild(myLibraryContent);
      for (var j = 0; j < 5; j++) {
          var myContentRating = document.createElement('i');
          myContentRating.className = 'fa';
          if(j < rating){            
            myContentRating.classList.add("fa-star", "fa-star-lib");           
          } else {            
            myContentRating.classList.add("fa-star-o", "fa-star-lib");              
          }
          myLibraryContent.appendChild(myContentRating);
        }
  },
  clearBooks : function(){
    var libraryContentBooks = document.getElementById('scroll');
    libraryContentBooks.innerHTML = ''; 
  },
  showForm : function(){
    var formAddBook = document.getElementById('main_form_block');
    formAddBook.style.display = 'block';
  },
  disableForm : function(){
    var formAddBook = document.getElementById('main_form_block');
    formAddBook.style.display = 'none';
  },
  clearHistory : function(){
    var historyAddBookList = document.getElementById('history_list');
    historyAddBookList.innerHTML = '';
  },
  showHistory : function(time, title, author){
    var historyAddBookList = document.getElementById('history_list');
    var historyBook = document.createElement('li');
        historyBook.classList.add("sidebar_history_item");
        var historyBookIcon = document.createElement('i');
        historyBookIcon.classList.add("fa", "fa-clock-o", "history_clock");
        var historyBookText = document.createElement('p');
        historyBookText.classList.add("sidebar_history_text");
        var historyBookTitle = document.createElement("span");
        historyBookTitle.classList.add("history_item_title");
        var historyBookAuthor = document.createElement('span');
        historyBookAuthor.classList.add('history_item_autor');
        var historyBookDate = document.createElement('p');
        historyBookDate.classList.add("sidebar_history_date");
        var youAdded = document.createElement('span');
        youAdded.textContent = 'you added ';
        var by = document.createElement('span');
        by.textContent = ' by ';

        historyBookTitle.textContent = author;
        historyBookAuthor.textContent = title;
        historyBookDate.textContent = time;
        historyBookText.appendChild(youAdded);
        historyBookText.appendChild(historyBookTitle);
        historyBookText.appendChild(by);
        historyBookText.appendChild(historyBookAuthor);
        historyBook.appendChild(historyBookIcon);
        historyBook.appendChild(historyBookText);
        historyBook.appendChild(historyBookDate);
        historyAddBookList.appendChild(historyBook);

  }
};