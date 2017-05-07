      new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
      });

      function handleResize() {
        var h = $(window).height();
        $('.fullpage').css({'height':h+'px'});
        $('.content-body').css({'top':h+'px'});
      }

      $(function(){
        handleResize();
        $(window).resize(function(){
        handleResize();
        });
      });



      jQuery(document).ready(function($) {
 
    $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800,'swing');
    });
    });

    // click en los LI  del grid
    $(".inicio #grid").find(".overlay").click(function(){
      $t=$(this);
      $a=$t.find('a').attr('href');
      window.open($a, '_blank');
      //window.location.href = $a;
    });
    // click en los LI  del grid    


    $(".detail #grid .overlay").click(function(){
      $img=$(this).parent().find('img');
      $src=$img.attr('src');
      $(".modal-body").find('img').attr('src',$src);
    });

 // animation
$(window).scroll(function() {
    $('h2,h3').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+600) {
        $(this).addClass("animated slideInDown");
      }
    });


  });