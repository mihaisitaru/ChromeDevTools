(function(url) {
  'use strict';
  //console.clear();
  // Create a new `Image` instance
  let image = new Image();

  image.onload = function() {
    // Inside here we already have the dimensions of the loaded image
    let style = [
      // Hacky way of forcing image's viewport using `font-size` and `line-height`
      'font-size: 1px;',
      'line-height: ' + this.height + 'px;',

      // Hacky way of forcing a middle/center anchor point for the image
      'padding: 0 ' + Math.floor(this.width/2) + 'px;',

      // Set image dimensions
      'background-size: ' + this.width + 'px ' + this.height + 'px;',

      // Set image URL
      'background: #fffff0 url('+ url +');'
     ].join(' ');

      console.log('%c Welcome to', 'background-color: #fffff0; color: white; font-size: 100px; font-weight: bold; text-shadow: 1px 2px 5px rgba(0,0,0,0.7);');
     // notice the space after %c
     console.log('%c ', style);
  };

  // Actually loads the image
  image.src = url;
})('https://itarena.ua/wp-content/uploads/2016/08/levi9.png');