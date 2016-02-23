// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for(var i = 0; i < 9; i++){
  for(var j = 0; i < 9; j++){
    var squares = document.createElement('div');
    squares.style.height = '11.1%';
    squares.style.width = '11.1%';
    squares.style.float = 'left';
    squares.style.paddingTop = '10%';
    squares.style.border = '2px black solid'
    squares.style.backgroundColor = 'green';
    body.appendChild(squares);
  }
}
