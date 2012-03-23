;(function($, window, document){


	function AllImagesCompleteChecker(imageSourceArray){
		
		var _instance = this;
		
		this.allImagesLoadet = 'ALLIMAGESLOADET';
		
		init();
		
		function init(){
			
			
			//add all extra images, maybe from css ore later requried in browsercache
			
			for (var i in imageSourceArray){
				var image = new Image()
				image.src = imageSourceArray[i]
			}
			console.log('checkinitend')
		}
		
		this.check = function() {
				n = 0;
				l = document.images.length;
				for(i=0; i < l; i++) if(document.images[i].complete == true) n++;
				if(n < l) setTimeout(_instance.check,100); else $(_instance).trigger(_instance.allImagesLoadet);
		}
	}
	
	window.AllImagesCompleteChecker = AllImagesCompleteChecker;	

}(jQuery, window, document));
