;$(function()
{
	'use strict';

	var sidebar_trigger = $('#sidebar_trigger');
	var mask = $('.mask');
	var sidebar = $('#sidebar');
	var backButton = $('.back-to-top');
	var content = $('.block-content');

	sidebar_trigger.on('click',showSidebar);
    mask.on('click',hideSidebar);
    
    backButton.on('click',function()
    {
    	$('html,body').animate({
    		'scrollTop':'0px'
    	},800);

    });






	$(window).on('scroll',function()
	{
		if ($(window).scrollTop()>$(window).height()) 
		{
			backButton.fadeIn();
		}
		else
		{
			backButton.fadeOut();
		}
	})
	
	$(window).trigger('scroll');

	function showSidebar()
	{
		mask.fadeIn();
		sidebar.css('transform','translate(0,0)');
	}

	

	function hideSidebar()
	{
		mask.fadeOut();
		sidebar.css('transform','translate('+ sidebar.width() +'px'+',0)');
	}
        
	


});

//相当于自调用函数
// (function(){

// })()
//
