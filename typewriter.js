"use strict";
const text = document.querySelector("#typewriter").textContent;
console.log(text);
function init() {
  removeText();
}

function removeText() {
  document.querySelector("#typewriter").textContent = " ";

  writeText();
}
function writeText() {
  let i;
  for (i = 0; i <= text.length; i++) {
    (function(i) {
      setTimeout(function() {
        document.querySelector("#typewriter").textContent = text.slice(0, i);
        let snd = document.getElementById("typekey2");
        snd.play();
        if (text[i] === " ") {
          let sndSpace = document.getElementById("typespace");
          sndSpace.play();
          snd.stop();
        }
      }, 400 * i);
    })(i);
  }
}

init();
