var boxesContainer = document.querySelector('.boxes');
var boxes = [];

for (var column = 0; column < 40; column+=4) {
  for (var row = 0; row < 20; row+=4) {
    var box = document.createElement('div');
    box.classList.add('box');
    box.style.position = 'absolute';
    box.style.top = row + 'em';
    box.style.left = column + 'em';
    //box.addEventListener('transitionend', onTransitionEnd);
    //box.addEventListener('-webkit-transitionend', onTransitionEnd);
    boxesContainer.appendChild(box);
    boxes.push(box);
    var opacity = Math.random() * (0.7 - 0.2) + 0.2;
    box.style.background = 'rgba(33, 33, 33, ' + opacity + ')';
  }
}

/*function onTransitionEnd(event) {
  var box = boxes[b];
  var opacity = Math.random() * (0.8 - 0.2) + 0.2;
  box.style.background = 'rgba(33, 33, 33, ' + opacity + ')';
}*/

function timeout() {
    setTimeout(function () {
      for (var b = 0; b < boxes.length; b++) {
        var box = boxes[b];
        var opacity = Math.random() * (0.7 - 0.2) + 0.2;
        box.style.background = 'rgba(33, 33, 33, ' + opacity + ')';
      }
      timeout();
    }, 300);
}

timeout();