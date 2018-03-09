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
			$("#myModal").html("<a href='https://datnenkhunam.blogspot.com/' target='_blank'><img src='data:image/jpeg;base64,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' width='500px'/><br/> Đất nền giá rẻ tại bình chánh</a>. liên hệ ngay 1256777. <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
