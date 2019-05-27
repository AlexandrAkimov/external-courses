var controller = {
  handleClick : function(){
    var el = document.getElementById('show_books');
    el.remove();
    model.renderBooks();
    renderHistory();
  },
  handleStar : function(){
    model.updateRating();
  },
  handleAddBook : function(){
    model.showFormAddingBook();
  },
  handleBackButton : function(){
    model.disableFormAddingBook();
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