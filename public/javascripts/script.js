new WOW().init();

    $(document).ready(function () {
        //$("#menuContainer").sticky({ topSpacing: 0 });

      /*  var x = 1;
        $(window).scroll(function () {
           
            x += 1;
            if (x == 5) {
                $(".navbar").sticky({ topSpacing: 0 });
            }

        });*/
        
		
	/* =================================
	SUPERSLIDES
	=================================== */
	$('#slides').superslides({
		animation: 'fade',
		pagination: false,
		play: 5000
	});
		
		
        /* =================================
	VERTICLE TEXT 
	=================================== */
	var current = 1; 
	var height = $('.roles').height(); 
	var numberDivs = $('.roles').children().length; 
	var first = $('.roles div:nth-child(1)'); 
	setInterval(function() {
		var number = current * -height;
		first.css('margin-top', number + 'px');
		if (current === numberDivs) {
			first.css('margin-top', '0px');
			current = 1;
		} else current++;
	}, 2000);
	
	
	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
	  //alert(batas);
	  
	  if (top > batas) {
		jQuery('.main-menu').addClass('tiny');
		jQuery('.main-menu').css('opacity','1');
	  } else {
	   jQuery('.main-menu').removeClass('tiny'); 
	  }
	});
        
        
        
        
    });