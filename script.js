const fullpageEl = document.getElementById("fullpage");
const menuBtn = document.querySelector(".menu__btn");
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");
const blurOverlay = document.querySelector(".blur__overlay");

// document.addEventListener('keydown', keyHandler, true);

// var keyHandler = function (event) {
// 	console.log(event.key);
//     // If the key isn't in the pattern, or isn't the current key in the pattern, reset
// 	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
//         current = 0;
// 		return;
// 	}
//     	// Update how much of the pattern is complete
// 	current++;

// 	// If complete, alert and reset
// 	if (pattern.length === current) {
// 		current = 0;
// 		window.alert('You found it!');
// 	}
// };

// var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
// var current = 0;

let keys = {
    13: "enter",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
  };
  
  let konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a", "enter"];
  let keyCount = 0;
  
  document.addEventListener("keydown", checkCode, false);
  
  function checkCode(e) {
    let keyPressed = keys[e.keyCode];
  
    if (keyPressed === konamiCode[keyCount]) {
      keyCount++;
  
      // check if we are still on the right path
      if (keyCount === konamiCode.length) {
        cheatCodeActivated();
        resetKeyState();
      }
    } else {
      resetKeyState();
    }
  }
  
  function cheatCodeActivated() {
    const falseFace = document.getElementById("tesla");
    alert("Activated!");
    falseFace.style.visibility = hidden;
    document.body.style.background = color;
  }

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE);
	blurOverlay.classList.toggle(IS_ACTIVE);
	fullpageEl.classList.toggle("no-scroll");
};

const CLICK = "click";

menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

new fullpage("#fullpage", {
	autoScrolling: true,
	scrollBar: true
});



