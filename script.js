// Your JS goes here
(function makeBoard() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var squares = document.createElement('div');

      squares.style.height = '11.1%';
      squares.style.width = '11.1%';
      squares.style.float = 'left';
      squares.style.paddingTop = '10%';
      if ((j + i) % 2 === 0) {
        squares.style.backgroundColor = 'black';
      }
      else {
        squares.style.backgroundColor = 'red';
      }
      body.appendChild(squares);
    }
  }
})();
