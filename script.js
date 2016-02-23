// Your JS goes here
var body = document.getElementsByTagName('body')[0];
// body.style.background = linearGradient(135, red, blue);

for(var i = 0; i < 9; i++){
  for(var j = 0; j < 9; j++){
    var gradientValue = (i / 10);
    var squares = document.createElement('div');
    squares.style.height = '11.1%';
    squares.style.width = '11.1%';
    squares.style.float = 'left';
    squares.style.paddingTop = '10%';
      if((j + i) % 2 === 0){
        squares.style.backgroundColor = `rgba(0, 0, 255, ${gradientValue})`;
      } else {
        squares.style.backgroundColor = 'rgba(0, 255, 0, ' + gradientValue  + ')';
      }
    body.appendChild(squares);
  }
}
