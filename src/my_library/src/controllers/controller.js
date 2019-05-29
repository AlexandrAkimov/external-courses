var controller = {
  handleClick : function(){
    model.updateBooks();
    updateHistory();
  },
  handleStar : function(){
    model.updateRating();
  },
  handleAddBook : function(){
    view.showForm();
  },
  handleBackButton : function(){
    view.disableForm();
  },
  handleFormAddButton : function(){
    model.addingBookToPage();
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