// var $carousel = $('.center').flickity({"wrapAround": true, "pageDots": false});
//
// var $imgs = $carousel.find('.gutter img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';
// // get Flickity instance
// var flkty = $carousel.data('flickity');
// var size = $imgs.length;
//
// $carousel.on( 'scroll.flickity', function(event, progress) {
//   var totalProgress = progress * (size - 1);
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     if (1 <= Math.abs(totalProgress - i) <= 2) {
//       var scale = 1 - ((Math.abs(totalProgress - i) - 1) * 0.4)
//       img.style[transformProp] = 'scale(' + scale + ',' + scale + ')';
//     } else {
//       img.style[transformProp] = 'scale(1.0, 1.0)';
//     }
//   });
// });
