var model = {
	renderBooks: function(){
		view.clearBooks();
		for (var i = 0; i < state.books.length; i++) {
			myContentBookImage = state.books[i].image_url;
    		myContentBookTitle = state.books[i].title;
    		myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    		myContentRatingNum = state.books[i].rating;
    		state.books[i].filterCategory = 'allBooks';
    		view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
		}
	},
	updateRating : function(){
		myContentRating = document.querySelectorAll('.fa-star-lib');
		view.clearBooks();
		var target = event.target;
    	if (target.classList.contains('fa')) {
      		for (i = 0; i < myContentRating.length; i++){
       			if (target === myContentRating[i]) {
          			var count = i + 1;
          			var curCountBook = count / 5;
          			console.log(curCountBook);
          			if((curCountBook ^ 0) === curCountBook){
          				var targetBook = curCountBook - 1;
          			} else {
          				targetBook = Math.floor(curCountBook);
          			}		
          			console.log(targetBook);
          			break;              
        		}
      		}
      		var targetCount = count;
    		while((count % 5) !== 0){
    			count -= 1;
    		};
    		console.log(count);
    		var resRating = targetCount - count;
    		if(resRating === 0){
    			resRating = 5;
    		}    		
		}
		for (var i = 0; i < state.books.length; i++) {
			myContentBookImage = state.books[i].image_url;
    		myContentBookTitle = state.books[i].title;
    		myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    		if(i === targetBook){
    			state.books[i].rating = resRating;
    			view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, resRating);
			} else {
				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, state.books[i].rating);
			}
    	}    		
	},
	showFormAddingBook : function(){
		view.showForm();
	},
	disableFormAddingBook : function(){
		view.disableForm();
	},
	addingBookToPage : function(){
		var titleBook = document.getElementById('form_title_book');
		var formCoverBook = document.getElementById('form_image_photo');
		var authorBookFirstName = document.getElementById('form_autorFirstName_book');
		var authorBookLastName = document.getElementById('form_autorLastName_book');
		var ratingBook = document.getElementById('form_rating_book');
		var date = new Date();
		var dateMs = Date.now() - date.getMilliseconds();
		console.log(dateMs);
		state.books.push({
			"title" : titleBook.value,
			"image_url" : formCoverBook.value,
			"author" : {
				"firstName" : authorBookFirstName.value,
				"lastName" : authorBookLastName.value
			},
			"rating" : ratingBook.value,
			"createdAt" : date,
			"updatedAt" : dateMs,
			"id" : state.books.length + 1
		});
		renderHistory();
		view.disableForm();
		view.clearBooks();
		for (var i = 0; i < state.books.length; i++) {
			myContentBookImage = state.books[i].image_url;
    		myContentBookTitle = state.books[i].title;
    		myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    		myContentRatingNum = state.books[i].rating;
    		view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
		}
		
	},
	showCategoryBooks : function(category){
		view.clearBooks();
		for (var i = 0; i < state.books.length; i++) {
			for (var c = 0; c < state.books[i].categories.length; c++) {
      			if(state.books[i].categories[c] === category){
      				myContentBookImage = state.books[i].image_url;
        			myContentBookTitle = state.books[i].title;
        			myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
        			myContentRatingNum = state.books[i].rating;
        			view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				}
			}
		}
	},
	sortBooks : function(){
		for (var i = 0; i < state.books.length; i++) {
			state.books[i].filterCategory = '';
		}
		var target = event.target;
		var menuItems = document.querySelectorAll('.nav_category_list li');
		for (j = 0; j < 4; j++) {
   			if (menuItems[j] === target) {
      			menuItems[j].classList.add('active');
      		if(menuItems[0] === target){
      			state.activeFilter = 'allBooks';
      		} else if (menuItems[1] === target){
      			state.activeFilter = 'mostRecent';
      		} else if (menuItems[2] === target){
      			state.activeFilter = 'mostPopular';
      		} else if (menuItems[3] === target) {
      			state.activeFilter = 'freeBooks';
      		}
      		continue;
    		}
    		menuItems[j].classList.remove('active');
  		}
  		if (state.activeFilter === 'freeBooks') {
  			view.clearBooks();
  			for (i = 0; i < state.books.length; i++) {
  				if(state.books[i].cost < 200){
  					myContentBookImage = state.books[i].image_url;
    				myContentBookTitle = state.books[i].title;
    				myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    				myContentRatingNum = state.books[i].rating;
    				state.books[i].filterCategory = 'freeBooks';
    				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  				}
  			}
  		} else if (state.activeFilter === 'mostPopular') {
  			view.clearBooks();
  			for (i = 0; i < state.books.length; i++) {
  				if(((state.books[i].rating === 4) || (state.books[i].rating === 5)) && state.books[i].cost >= 200 ){
  					myContentBookImage = state.books[i].image_url;
    				myContentBookTitle = state.books[i].title;
    				myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    				myContentRatingNum = state.books[i].rating;
    				state.books[i].filterCategory = 'mostPopular';
    				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  				}
  			}
  		} else if (state.activeFilter === 'mostRecent'){
  			view.clearBooks();
  			var arrayUpdateAt = []
  			for (i = 0; i < state.books.length; i++) {
  				arrayUpdateAt.push(state.books[i].updatedAt)
  				arrayUpdateAt.sort(function(a,b){ 
  					return b - a;
				})
  			}
			console.log(arrayUpdateAt);
			var idBook = 0;
			for (var j = 0; j < arrayUpdateAt.length; j++) {
			 	for(i = 0; i < state.books.length; i++) {
			 		if((state.books[i].updatedAt === arrayUpdateAt[0]) && (state.books[i].id !== idBook)){
			 			idBook = state.books[i].id;			 			
			 			myContentBookImage = state.books[i].image_url;
    					myContentBookTitle = state.books[i].title;
    					myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    					myContentRatingNum = state.books[i].rating;
    					state.books[i].filterCategory = 'mostRecent';
    					view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
    					arrayUpdateAt.shift();
    					i = 0;
			 		}  				
  				}
			} 
  		} else if (state.activeFilter === 'allBooks'){
  			this.renderBooks();
  		}

	},
	globalSearch : function(){
		view.clearBooks();
		var searchField = document.getElementById('nav_search_field');
		state.search = searchField.value;
		if(state.search){
			for (var i = 0; i < state.books.length; i++) {
				console.log(state.books[i].filterCategory)
				if (((state.books[i].title.indexOf(state.search) >= 0) || (state.books[i].author.firstName.indexOf(state.search) >= 0) || (state.books[i].author.lastName.indexOf(state.search) >= 0)) && (state.books[i].filterCategory === 'mostPopular')) {
					myContentBookImage = state.books[i].image_url;
    				myContentBookTitle = state.books[i].title;
    				myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    				myContentRatingNum = state.books[i].rating;
    				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				} else if (((state.books[i].title.indexOf(state.search) >= 0) || (state.books[i].author.firstName.indexOf(state.search) >= 0) || (state.books[i].author.lastName.indexOf(state.search) >= 0)) && (state.books[i].filterCategory === 'freeBooks')){
					myContentBookImage = state.books[i].image_url;
    				myContentBookTitle = state.books[i].title;
    				myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    				myContentRatingNum = state.books[i].rating;
    				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				} else if(((state.books[i].title.indexOf(state.search) >= 0) || (state.books[i].author.firstName.indexOf(state.search) >= 0) || (state.books[i].author.lastName.indexOf(state.search) >= 0)) && (state.books[i].filterCategory === 'mostRecent')) {
					myContentBookImage = state.books[i].image_url;
    				myContentBookTitle = state.books[i].title;
    				myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    				myContentRatingNum = state.books[i].rating;
    				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				} else if (((state.books[i].title.indexOf(state.search) >= 0) || (state.books[i].author.firstName.indexOf(state.search) >= 0) || (state.books[i].author.lastName.indexOf(state.search) >= 0)) && (state.books[i].filterCategory === 'allBooks')) {
					myContentBookImage = state.books[i].image_url;
    				myContentBookTitle = state.books[i].title;
    				myContentBookAutor = "by " + state.books[i].author.firstName + " " + state.books[i].author.lastName;
    				myContentRatingNum = state.books[i].rating;
    				view.showBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				}
			}	
		} else if (!state.search && state.activeFilter === 'freeBooks'){
			this.sortBooks();
		} else if (!state.search && state.activeFilter === 'mostRecent'){
			this.sortBooks();
		} else if (!state.search && state.activeFilter === 'mostPopular'){
			this.sortBooks();
		} else if (!state.search && state.activeFilter === 'allBooks'){
			this.sortBooks();
		} else {
			this.renderBooks();
		}

	}
}