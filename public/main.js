$(document).ready(function() {

	// everything below here is for the homepage

	$('#gamesSection span').css('opacity', '0.2');

 		$('#img1').hover(function() {
			$('#Fallout').animate({opacity: '1'});	
		});

  		$('#img1').mouseleave(function () {
  			$('#Fallout').stop().animate({opacity: '0.2'});
  		});
	  	
 		$('#img2').hover(function() {
 			$('#Dishonored').animate({opacity: '1'});
 		});
	 	
  		$('#img2').mouseleave(function () {
  			$('#Dishonored').stop().animate({opacity: '0.2'});
  		});
	 	
 		$('#img3').hover(function() {
 			$('#DragonAge2').animate({opacity: '1'});
 		});
	 	
  		$('#img3').mouseleave(function () {
  			$('#DragonAge2').stop().animate({opacity: '0.2'});
  		});
 		  	
 		$('#img4').hover(function() {
 			$('#MassEffect').animate({opacity: '1'});
 		});
 	
  		$('#img4').mouseleave(function () {
  			$('#MassEffect').stop().animate({opacity: '0.2'});
  		}); 
 	  	
 		$('#img5').hover(function() {
 			$('#Skyrim').animate({opacity: '1'});
 		});
 	 	
  		$('#img5').mouseleave(function () {
  			$('#Skyrim').stop().animate({opacity: '0.2'});
  		});
 	 	  	
 		$('#img6').hover(function() {
 			$('#DragonAge').animate({opacity: '1'});
 		});

  		$('#img6').mouseleave(function () {
  			$('#DragonAge').stop().animate({opacity: '0.2'});
  		});

      //gamesSectiona animations

      $('#gamesSectiona span').css('opacity', '0.2');

    $('#img1a').hover(function() {
      $('#Fallouta').animate({opacity: '1'});  
    });

      $('#img1a').mouseleave(function () {
        $('#Fallouta').stop().animate({opacity: '0.2'});
      });
      
    $('#img2a').hover(function() {
      $('#Dishonoreda').animate({opacity: '1'});
    });
    
      $('#img2a').mouseleave(function () {
        $('#Dishonoreda').stop().animate({opacity: '0.2'});
      });
    
    $('#img3a').hover(function() {
      $('#DragonAge2a').animate({opacity: '1'});
    });
    
      $('#img3a').mouseleave(function () {
        $('#DragonAge2a').stop().animate({opacity: '0.2'});
      });
        
    $('#img4a').hover(function() {
      $('#MassEffecta').animate({opacity: '1'});
    });
  
      $('#img4a').mouseleave(function () {
        $('#MassEffecta').stop().animate({opacity: '0.2'});
      }); 
      
    $('#img5a').hover(function() {
      $('#Skyrima').animate({opacity: '1'});
    });
    
      $('#img5a').mouseleave(function () {
        $('#Skyrima').stop().animate({opacity: '0.2'});
      });
        
    $('#img6a').hover(function() {
      $('#DragonAgea').animate({opacity: '1'});
    });

      $('#img6a').mouseleave(function () {
        $('#DragonAgea').stop().animate({opacity: '0.2'});
      });

      //See-all button animations

      $('#gamesSectiona').hide();

      $('#see').click(function() {
        $('#gamesSectiona').slideToggle("slow");
      });
 	
});