$(document).ready(function(){
  $(function(){
    var myImages = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png'];
    for(var i = 0 ;i < 10;i++){
      var image = myImages[i];
      $('.img-logo'+(i+1)).css({
        'background-image' : 'url(images/'+image+')'
      })
    }
    var x = 0;

    setInterval(function() {
            SetImage(x);
            x++;
            x = x % 2;
        }, 7000);

    function SetImage(x) {

      for(var i = 0 ;i < 10 ;i++){
        var image = myImages[i];
        $('.img-logo'+(i+1)).fadeOut(2000)
      }

      setTimeout(function () {
        if(x == 1){
          for(var i = 0 ;i < 10;i++){
            var image = myImages[i];
            $('.img-logo'+(i+1)).css({
              'background-image' : 'url(images/'+image+')'
            }).fadeIn(2000).delay(2000)
          }
        } else {
          for(var i = 10 ;i < 20 ;i++){
            var image = myImages[i];
            $('.img-logo'+((i+1)-10)).css({
              'background-image' : 'url(images/'+image+')'
            }).fadeIn(2000).delay(2000)
          }  
        }
        
      }, 4000);
    }

    $('.where').slimScroll({
        height: '60vh'
    });

    function isScrolledIntoView(elem) {
      var $elem = $(elem);
      var $window = $(window);
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();
      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    var count = 0;
    $(window).scroll(function(){
      if (isScrolledIntoView(document.getElementById("map_start")) == true && count == 0) {
        count++;
        var scope = angular.element(document.getElementById("Ctrl")).scope();
        scope.$apply(function () {
            scope.mapLoader('1','23.0395677','72.5660045','map','',count);
        });
      }
    });

    var $items = $('.marker-link>a');
    $items.click(function() {
      $items.removeClass('selected-link');
      $(this).addClass('selected-link');
    });

  });
});