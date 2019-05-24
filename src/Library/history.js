setInterval(function(){
  while(historyAddBookList.firstChild){
    historyAddBookList.removeChild(historyAddBookList.firstChild);
  }
  for (var i = 0; i < state.books.length; i++) {
  if(state.books.length - i < 4) {
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
      var historyTime = (Date.now() - state.books[i].createdAt) / 1000 / 60;
      if(historyTime < 1){
        historyBookDate.textContent = "just added"
      } else if (historyTime > 1 && historyTime < 60){
        historyTimeRound = Math.round(historyTime);
        historyBookDate.textContent = historyTimeRound + " minutes ago"
      } else if (historyTime > 60 && historyTime < 1440){
        historyTimeHours = historyTime / 60;
        historyTimeRound = Math.round(historyTimeHours);
        historyBookDate.textContent = historyTimeRound + " hours ago"
      } else if (historyTime > 1440 && historyTime < 43200){
        historyTimeHours = historyTime / 1440;
        historyTimeRound = Math.round(historyTimeHours);
        historyBookDate.textContent = historyTimeRound + " days ago"
      } else if (historyTime > 43200 && historyTime < 518400){
        historyTimeHours = historyTime / 43200;
        historyTimeRound = Math.round(historyTimeHours);
        historyBookDate.textContent = historyTimeRound + " month ago"
      } else if (historyTime > 518400){
        historyBookDate.textContent = " over a year ago"
      }
      
      historyBookDate.classList.add("sidebar_history_date");

      historyBookTitle.textContent = state.books[i].title;
      historyBookAuthor.textContent = state.books[i].author.firstName + " " + state.books[i].author.lastName;
      var youAdded = document.createElement('span');
      youAdded.textContent = 'you added ';
      var by = document.createElement('span');
      by.textContent = ' by ';

      historyBookText.appendChild(youAdded);
      historyBookText.appendChild(historyBookTitle);
      historyBookText.appendChild(by);
      historyBookText.appendChild(historyBookAuthor);


      historyBook.appendChild(historyBookIcon);
      historyBook.appendChild(historyBookText);
      historyBook.appendChild(historyBookDate);

      historyAddBookList.appendChild(historyBook);

    }
  }
}, 5000)