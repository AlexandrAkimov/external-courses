function updateHistory(){
  view.clearHistory();
  for (var i = 0; i < this.model.state.books.length; i++) {
    if(this.model.state.books.length - i < 4) {
      var historyTime = (Date.now() - this.model.state.books[i].createdAt) / 1000 / 60;
      var historyBookDate = '';
      if(historyTime < 1){
        historyBookDate = "just added"
      } else if (historyTime > 1 && historyTime < 60){
          var historyTimeRound = Math.round(historyTime);
          historyBookDate = historyTimeRound + " minutes ago"
      } else if (historyTime > 60 && historyTime < 1440){
          var historyTimeHours = historyTime / 60;
          historyTimeRound = Math.round(historyTimeHours);
          historyBookDate = historyTimeRound + " hours ago"
      } else if (historyTime > 1440 && historyTime < 43200){
          historyTimeHours = historyTime / 1440;
          historyTimeRound = Math.round(historyTimeHours);
          historyBookDate = historyTimeRound + " days ago"
      } else if (historyTime > 43200 && historyTime < 518400){
          historyTimeHours = historyTime / 43200;
          historyTimeRound = Math.round(historyTimeHours);
          historyBookDate = historyTimeRound + " month ago"
      } else if (historyTime > 518400){
          historyBookDate = " over a year ago"
      }
      historyBookTitle = this.model.state.books[i].title;
      historyBookAuthor = this.model.state.books[i].author.firstName + " " + this.model.state.books[i].author.lastName;
      view.showHistory(historyBookDate, historyBookTitle, historyBookAuthor);
    }
  }
}
