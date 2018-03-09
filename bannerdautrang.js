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
			$("#myModal").html("<a href='https://khunghiduongbaoloc.blogspot.com/' target='_blank'><img src='data:image/jpeg;base64,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' width='500px'/><br/> đất nền giá rẻ </a>. hotline 123456789. <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
