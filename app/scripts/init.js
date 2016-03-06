// fastclick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

// detect swipe
var swipeFunc = {
  touches : {
    "touchstart": {"x":-1, "y":-1},
    "touchmove" : {"x":-1, "y":-1},
    "touchend"  : false,
    "direction" : "undetermined"
  },
  touchHandler: function(event) {
    if(event.target.className.match(/^orders-list__item--.*/)){
      return
    }
    var touch;
    if (typeof event !== 'undefined'){
      if (typeof event.touches !== 'undefined') {
        touch = event.touches[0];
        switch (event.type) {
          case 'touchstart':
          case 'touchmove':
            swipeFunc.touches[event.type].x = touch.pageX;
            swipeFunc.touches[event.type].y = touch.pageY;
            break;
          case 'touchend':
            swipeFunc.touches[event.type] = true;
            if (swipeFunc.touches.touchstart.y > -1 && swipeFunc.touches.touchmove.y > -1) {
              swipeFunc.touches.direction = swipeFunc.touches.touchstart.y < swipeFunc.touches.touchmove.y ? "top" : "bottom";
              if(swipeFunc.touches.direction == 'bottom'){
                angular.element(document.querySelector('section.orders')).removeClass('open')
              } else {
                angular.element(document.querySelector('section.orders')).addClass('open')
              }
            }

        }
      }
    }
  },
  init: function() {
    document.addEventListener('touchstart', swipeFunc.touchHandler, false);
    document.addEventListener('touchmove', swipeFunc.touchHandler, false);
    document.addEventListener('touchend', swipeFunc.touchHandler, false);
  }
};
swipeFunc.init();
