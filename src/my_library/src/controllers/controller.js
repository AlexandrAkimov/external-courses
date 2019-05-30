var controller = {
  handleClick : function(){
    model.updateBooks();
    model.updateHistory();
  },
  receiveModelUpdateBook : function(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum){
    view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  },
  handleStar : function(){
    model.updateRating();
  },
  receiveModelUpdateStar : function(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum){
    view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  },
  handleAddBook : function(){
    view.showForm();
  },
  receiveModelAddingBook : function(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum){
    view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum)
  },
  receiveModelCategoryBooks : function(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum){
    view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  },
  receiveModelSortBooks : function(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum){
    view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  },
  receiveModelGlobalSearch : function(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum){
    view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  },
  receiveModelClearBooks : function(){
    view.clearBooks();
  },
  receiveModelDisableForm : function(){
    view.disableForm();
  },
  receiveModelUpdateHistory : function(historyBookDate, historyBookTitle, historyBookAuthor){
    view.showHistory(historyBookDate, historyBookTitle, historyBookAuthor)
  },
  receiveClearHistory : function(){
    view.clearHistory();
  },
  handleBackButton : function(){
    view.disableForm();
  },
  handleFormAddButton : function(){
    model.addingBookToPage();
    model.updateHistory();
  },
  handleMustRead : function(){
    model.showCategoryBooks("must_read");
  },
  handleBest : function(){
    model.showCategoryBooks("best");
  },
  handleClassic : function(){
    model.showCategoryBooks("classic");
  },
  handleNonFiction : function(){
    model.showCategoryBooks("non_fiction");
  },
  handleMenu : function(){
    model.sortBooks();
  },
  enterField : function(){
    model.globalSearch();
  }
};