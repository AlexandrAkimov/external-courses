function toggleMenu(){
	var topList = document.getElementById('top_list_block');
	var topMenu = document.getElementById('top_menu');
	var item = document.querySelector('.top_list'); 
	function show(){
		if (topList.style.display === "block") {
		topList.style.display = "none";
		} else {
		topList.style.cssText = "display : block;";
		topMenu.style.borderTop = '1px solid #fff'	
		}
	}
	function addItemShadow(){
		topMenu.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)"
	}
	function removeItemShadow(){
		topMenu.style.boxShadow = "none";
	}
	
	function setItemBackground(e){
		var event = e;
		event.target.style.background = '#03a9f5';
	}
	function restoreItemBackground(e){
		var event = e;
		event.target.style.background = '#35baf5';
	}	
	topMenu.addEventListener('click', show);	
	item.addEventListener('mouseover', setItemBackground);
	item.addEventListener('mouseout', restoreItemBackground);
	topMenu.addEventListener('mouseover', addItemShadow);
	topMenu.addEventListener('mouseout', removeItemShadow);
}
toggleMenu();