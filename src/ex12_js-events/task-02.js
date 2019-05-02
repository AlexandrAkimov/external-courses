function events(){
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
	function shadow(){
		topMenu.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)"
	}
	function disShadow(){
		topMenu.style.boxShadow = "none";
	}
	
	function itemHover(e){
		var event = e;
		event.target.style.background = '#03a9f5';
	}
	function itemHideHover(e){
		var event = e;
		event.target.style.background = '#35baf5';
	}	
	topMenu.addEventListener('click', show);	
	item.addEventListener('mouseover', itemHover);
	item.addEventListener('mouseout', itemHideHover);
	topMenu.addEventListener('mouseover', shadow);
	topMenu.addEventListener('mouseout', disShadow);
}
events();
