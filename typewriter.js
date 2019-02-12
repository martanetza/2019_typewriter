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
// function writeText() {
//   for (let i = 0; i <= text.length; i++) {
//     (function(i) {
//       setTimeout(function() {
//         document.querySelector("#typewriter").textContent = text.slice(0, i);
//         let snd = document.getElementById("typekey1");
//         snd.play();
//         if (text[i] === " ") {
//           let snd = document.getElementById("typespace");
//           snd.play();
//         }
//         console.log(i);
//         if (i == text.length) {
//           writeText();
//         }
//       }, 400 * i);
//     })(i);
//   }
// }

let i = 0;
console.log(i);

function writeText() {
  setTimeout(function() {
    if (i <= text.length) {
      document.querySelector("#typewriter").textContent = text.slice(0, i);
      i++;
      let snd = document.getElementById("typekey1");
      if (text[i] === " ") {
        let snd = document.getElementById("typespace");
        snd.play();
      }
      console.log(i);
      if (i == text.length) {
        i = 0;
      }
      writeText();
    }
  }, 400);
}

init();
