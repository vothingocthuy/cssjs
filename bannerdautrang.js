//please contact me giaiphapthuonghieu.org@gmail.com
//website http://giaiphapthuonghieu.vn or http://faceseo.vn

(function($) {
    $.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = $('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
$(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			$(divpopup).attr('id', 'myModal');
			$(divpopup).attr('class', 'linhnguyen-modal');
			$( "body" ).append(divpopup);
			$("#myModal").html("<a href='https://taylandatnenbinhtan.blogspot.com/' target='_blank'><img src='data:image/jpeg;base64,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' width='500px'/><br/> Đát nền giá rẻ </a>. liên hệ thủy 000000. <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
