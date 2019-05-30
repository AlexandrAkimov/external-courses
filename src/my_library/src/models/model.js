var model = {
  state : {
      books : loadingBooks(),
      activeFilter : '',
      search : ''
    },
	updateBooks: function(){
		controller.receiveModelClearBooks();
		for (var i = 0; i < this.state.books.length; i++) {
			myContentBookImage = this.state.books[i].image_url;
    		myContentBookTitle = this.state.books[i].title;
    		myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    		myContentRatingNum = this.state.books[i].rating;
    		this.state.books[i].filterCategory = 'allBooks';
    		controller.receiveModelUpdateBook(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
		}
	},
	updateRating : function(){
		myContentRating = document.querySelectorAll('.fa-star-lib');
		controller.receiveModelClearBooks();
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
		for (var i = 0; i < this.state.books.length; i++) {
			myContentBookImage = this.state.books[i].image_url;
    	myContentBookTitle = this.state.books[i].title;
    	myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    	if(i === targetBook){
    		this.state.books[i].rating = resRating;
    		controller.receiveModelUpdateStar(myContentBookImage, myContentBookTitle, myContentBookAutor, this.state.books[i].rating);
			} else {
				controller.receiveModelUpdateStar(myContentBookImage, myContentBookTitle, myContentBookAutor, this.state.books[i].rating);
		  }
    }   		
	},
	addingBookToPage : function(){
		var date = new Date();
		var dateMs = Date.now() - date.getMilliseconds();
		console.log(dateMs);
		this.state.books.push({
			"title" : view.initialDom.titleBook.value,
			"image_url" : view.initialDom.formCoverBook.value,
			"author" : {
				"firstName" : view.initialDom.authorBookFirstName.value,
				"lastName" : view.initialDom.authorBookLastName.value
			},
			"rating" : view.initialDom.ratingBook.value,
			"createdAt" : date,
			"updatedAt" : dateMs,
			"id" : this.state.books.length + 1
		});
		controller.receiveModelUpdateHistory();
		controller.receiveModelDisableForm();
		controller.receiveModelClearBooks();
		for (var i = 0; i < this.state.books.length; i++) {
			myContentBookImage = this.state.books[i].image_url;
    		myContentBookTitle = this.state.books[i].title;
    		myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    		myContentRatingNum = this.state.books[i].rating;
    		controller.receiveModelAddingBook(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
		}
		
	},
  updateHistory : function(){
    controller.receiveClearHistory();
    for (var i = 0; i < this.state.books.length; i++) {
      var historyTime = (Date.now() - this.state.books[i].createdAt) / 1000 / 60;
      var historyBookDate = '';
      var historyTimeHours = 0;
      if(this.state.books.length - i < 4) {
        historyBookTitle = this.state.books[i].title;
        historyBookAuthor = this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
        controller.receiveModelUpdateHistory(history(historyTime, historyBookDate), historyBookTitle, historyBookAuthor);
      }
    }
  },
	showCategoryBooks : function(category){
		controller.receiveModelClearBooks();
		for (var i = 0; i < this.state.books.length; i++) {
			for (var c = 0; c < this.state.books[i].categories.length; c++) {
      			if(this.state.books[i].categories[c] === category){
      				myContentBookImage = this.state.books[i].image_url;
        			myContentBookTitle = this.state.books[i].title;
        			myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
        			myContentRatingNum = this.state.books[i].rating;
        			controller.receiveModelCategoryBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				}
			}
		}
	},
	sortBooks : function(){
		for (var i = 0; i < this.state.books.length; i++) {
			this.state.books[i].filterCategory = '';
		}
		var target = event.target;
		var menuItems = document.querySelectorAll('.nav_category_list li');
		for (j = 0; j < 4; j++) {
   			if (menuItems[j] === target) {
      			menuItems[j].classList.add('active');
      		if(menuItems[0] === target){
      			this.state.activeFilter = 'allBooks';
      		} else if (menuItems[1] === target){
      			this.state.activeFilter = 'mostRecent';
      		} else if (menuItems[2] === target){
      			this.state.activeFilter = 'mostPopular';
      		} else if (menuItems[3] === target) {
      			this.state.activeFilter = 'freeBooks';
      		}
      		continue;
    		}
    		menuItems[j].classList.remove('active');
  		}
  		if (this.state.activeFilter === 'freeBooks') {
  			controller.receiveModelClearBooks();
  			for (i = 0; i < this.state.books.length; i++) {
  				if(this.state.books[i].cost < 200){
  					myContentBookImage = this.state.books[i].image_url;
    				myContentBookTitle = this.state.books[i].title;
    				myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    				myContentRatingNum = this.state.books[i].rating;
    				this.state.books[i].filterCategory = 'freeBooks';
    				controller.receiveModelSortBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  				}
  			}
  		} else if (this.state.activeFilter === 'mostPopular') {
  			controller.receiveModelClearBooks();
  			for (i = 0; i < this.state.books.length; i++) {
  				if(((this.state.books[i].rating === 4) || (this.state.books[i].rating === 5)) && this.state.books[i].cost >= 200 ){
  					myContentBookImage = this.state.books[i].image_url;
    				myContentBookTitle = this.state.books[i].title;
    				myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    				myContentRatingNum = this.state.books[i].rating;
    				this.state.books[i].filterCategory = 'mostPopular';
    				controller.receiveModelSortBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
  				}
  			}
  		} else if (this.state.activeFilter === 'mostRecent'){
  			controller.receiveModelClearBooks();
  			var arrayUpdateAt = []
  			for (i = 0; i < this.state.books.length; i++) {
  				arrayUpdateAt.push(this.state.books[i].updatedAt)
  				arrayUpdateAt.sort(function(a,b){ 
  					return b - a;
				})
  			}
			console.log(arrayUpdateAt);
			var idBook = 0;
			for (var j = 0; j < arrayUpdateAt.length; j++) {
			 	for(i = 0; i < this.state.books.length; i++) {
			 		if((this.state.books[i].updatedAt === arrayUpdateAt[0]) && (this.state.books[i].id !== idBook)){
			 			idBook = this.state.books[i].id;			 			
			 			myContentBookImage = this.state.books[i].image_url;
    					myContentBookTitle = this.state.books[i].title;
    					myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    					myContentRatingNum = this.state.books[i].rating;
    					this.state.books[i].filterCategory = 'mostRecent';
    					controller.receiveModelSortBooks(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
    					arrayUpdateAt.shift();
    					i = 0;
			 		}  				
  				}
			} 
  		} else if (this.state.activeFilter === 'allBooks'){
  			this.updateBooks();
  		}

	},
	globalSearch : function(){
		controller.receiveModelClearBooks();
		var searchField = document.getElementById('nav_search_field');
		this.state.search = searchField.value;
		if(this.state.search){
			for (var i = 0; i < this.state.books.length; i++) {
				console.log(this.state.books[i].filterCategory)
				if (((this.state.books[i].title.indexOf(this.state.search) >= 0) || (this.state.books[i].author.firstName.indexOf(this.state.search) >= 0) || (this.state.books[i].author.lastName.indexOf(this.state.search) >= 0)) && (this.state.books[i].filterCategory === 'mostPopular')) {
					myContentBookImage = this.state.books[i].image_url;
    				myContentBookTitle = this.state.books[i].title;
    				myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    				myContentRatingNum = this.state.books[i].rating;
    				controller.receiveModelGlobalSearch(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				} else if (((this.state.books[i].title.indexOf(this.state.search) >= 0) || (this.state.books[i].author.firstName.indexOf(this.state.search) >= 0) || (this.state.books[i].author.lastName.indexOf(this.state.search) >= 0)) && (this.state.books[i].filterCategory === 'freeBooks')){
					myContentBookImage = this.state.books[i].image_url;
    				myContentBookTitle = this.state.books[i].title;
    				myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    				myContentRatingNum = this.state.books[i].rating;
    				controller.receiveModelGlobalSearch(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				} else if(((this.state.books[i].title.indexOf(this.state.search) >= 0) || (this.state.books[i].author.firstName.indexOf(this.state.search) >= 0) || (this.state.books[i].author.lastName.indexOf(this.state.search) >= 0)) && (this.state.books[i].filterCategory === 'mostRecent')) {
					myContentBookImage = this.state.books[i].image_url;
    				myContentBookTitle = this.state.books[i].title;
    				myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    				myContentRatingNum = this.state.books[i].rating;
    				controller.receiveModelGlobalSearch(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				} else if (((this.state.books[i].title.indexOf(this.state.search) >= 0) || (this.state.books[i].author.firstName.indexOf(this.state.search) >= 0) || (this.state.books[i].author.lastName.indexOf(this.state.search) >= 0)) && (this.state.books[i].filterCategory === 'allBooks')) {
					myContentBookImage = this.state.books[i].image_url;
    				myContentBookTitle = this.state.books[i].title;
    				myContentBookAutor = "by " + this.state.books[i].author.firstName + " " + this.state.books[i].author.lastName;
    				myContentRatingNum = this.state.books[i].rating;
    				controller.receiveModelGlobalSearch(myContentBookImage, myContentBookTitle, myContentBookAutor, myContentRatingNum);
				}
			}	
		} else if (!this.state.search && this.state.activeFilter === 'freeBooks'){
			this.sortBooks();
		} else if (!this.state.search && this.state.activeFilter === 'mostRecent'){
			this.sortBooks();
		} else if (!this.state.search && this.state.activeFilter === 'mostPopular'){
			this.sortBooks();
		} else if (!this.state.search && this.state.activeFilter === 'allBooks'){
			this.sortBooks();
		} else {
			this.updateBooks();
		}
	}
}