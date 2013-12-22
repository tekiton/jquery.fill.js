/**
 * jQuery Fill
 * 
 * @author tekiton
 * @license MIT License :)
 */
(function($){
	
	$.fn.fill = function(conf){
		
		conf = jQuery.extend({
			target    : window,
			size      : 'cover',
			left      : null,
			top       : null,
			widthDiff : 0,
			heightDiff: 0
		}, conf || {});
		
		return this.each(function(){
			
			var $self  = $(this);
			var $wrap  = $(this).wrap('<div></div>').parent();
			var recalc = function(){
				
				$self.width('').height('');
				
				var targetWidth    = $(conf.target).width() + conf.widthDiff;
				var targetHeight   = $(conf.target).height() + conf.heightDiff;
				var targetRatio    = targetHeight / targetWidth;
				var originalWidth  = $self.width();
				var originalHeight = $self.height();
				var originalRatio  = originalHeight / originalWidth;
				var width          = 0;
				var height         = 0;
				var left           = 0;
				var top            = 0;
				
				switch(conf.size){
				
					case 'cover':
						if(targetRatio > originalRatio){
							width  = targetHeight / originalRatio;
							height = targetHeight;
						}else{
							width  = targetWidth;
							height = targetWidth * originalRatio;
						}
					break;
					
					case 'contain':
						if(targetRatio > originalRatio){
							width  = targetWidth;
							height = targetWidth * originalRatio;
						}else{
							width  = targetHeight / originalRatio;
							height = targetHeight;
						}
					break;
				
					case 'width':
						width  = targetWidth;
						height = targetWidth * originalRatio;
					break;
				
					case 'emulateMaxImage':
						width  = targetWidth + 40;
						height = $self.width(width).height();
						conf.top = 0;
					break;
				
				}
				
				$self.css({
					width : width,
					height: height,
					left  : conf.left==null? (targetWidth-width)/2   :conf.left,
					top   : conf.top ==null? (targetHeight-height)/2 :conf.top
				});
				
				$wrap.css({
					width : targetWidth,
					height: targetHeight
				});
				
			};
			
			$wrap.css({ position:'absolute', overflow:'hidden' });
			$self.css({ position:'absolute' });
			recalc();
			
			$(window).load(function(){ recalc(); });
			$(window).resize(function(){ recalc(); });
			
		});
		
	};
	
}).call(this, jQuery);
