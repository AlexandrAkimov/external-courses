(function(){
	var app = {
		init : function(){
			this.event();
		},
		event: function(){
			var el = document.getElementById('button_show_books');
			el.onclick = controller.handleClick;

  			var libraryContentBooks = document.getElementById('scroll');
			libraryContentBooks.addEventListener('click', function(event){
				controller.handleStar();
			});

			var addButton = document.getElementById('add_button');
			addButton.addEventListener('click', controller.handleAddBook);

			var formBackButton = document.getElementById('form_button_back');
			formBackButton.addEventListener('click', controller.handleBackButton);

			var buttonAddingBook = document.getElementById('form_submit');
			buttonAddingBook.addEventListener('click', controller.handleFormAddButton);

			var mustRead = document.getElementById('mustRead');
			mustRead.addEventListener('click', controller.handleMustRead);
			var bests = document.getElementById('bests');
			bests.addEventListener('click', controller.handleBest);
			var classic = document.getElementById('classic');
			classic.addEventListener('click', controller.handleClassic);
			var nonFiction = document.getElementById('non_fiction');
			nonFiction.addEventListener('click', controller.handleNonFiction);

			var menuList = document.getElementById('nav_menu_list');
			menuList.addEventListener('click', function(event){
				controller.handleMenu();
			});

			var searchField = document.getElementById('nav_search_field');
			searchField.addEventListener('keyup', controller.enterField);
		}
	}

	app.init();
}());





