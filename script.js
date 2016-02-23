// Your JS goes here
function flashing () {
var body = document.getElementsByTagName('body')[0];
body.innerHTML = '';

  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      var squares = document.createElement('div');
      squares.style.height = '11.1%';
      squares.style.width = '11.1%';
      squares.style.float = 'left';
      squares.style.paddingTop = '10%';


       if((j + i) % 2 === 0){
         squares.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
       } else {
         squares.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
       }

      body.appendChild(squares);
    }
  }
}
flashing();
setInterval(flashing,2000);
