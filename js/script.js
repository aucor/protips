$(document).ready(function() {
  $('#slides').cycle({ 
    random:  1,
    slideResize: 0,
    containerResize: 0,
    timeout: 0,
    next: $('#getnext .bigbutton'),
    before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
      $('#slides').animate({'height': $(nextSlideElement).css('height')}, 400);
    }
  });
  
});