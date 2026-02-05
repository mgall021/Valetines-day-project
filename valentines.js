'use strict';
let clickCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gifImage = document.getElementById('mainGif');
const header = document.getElementById('mainHeader');

noBtn.addEventListener('click', function () {
  clickCount++;

  switch (clickCount) {
    case 1:
      firstAction();
      break;
    case 2:
      secondAction();
      break;
    case 3:
      thirdAction();
      clickCount = 0;
      break;
  }
});

yesBtn.addEventListener('click', function () {
  header.remove();
  yesBtn.remove();
  noBtn.remove();
  gifImage.src = 'pokemon-pika-love.gif';
  console.log(gifImage);
  gifImage.classList.add('celebration-gif');

  // gifImage.after("Thanks for being my Valentine ! ⸜(｡˃ ᵕ ˂ )⸝♡EHEH");
  const newText = document.createElement('p');
  newText.textContent = 'Thanks for being my Valentine ! ⸜(｡˃ ᵕ ˂ )⸝♡HEHEH';
  newText.classList.add('success-message');
  gifImage.after(newText);
});

function firstAction() {
  noBtn.textContent = 'Prettyy plzz';
  noBtn.style.width = '72px';
  noBtn.style.height = '50px';
  yesBtn.style.width = '200px';
  yesBtn.style.height = '200px';
  yesBtn.style.fontSize = '50px';
}

function secondAction() {
  noBtn.textContent = 'cmon now:(';
  noBtn.style.width = '72px';
  noBtn.style.height = '50px';
  yesBtn.style.width = '400px';
  yesBtn.style.height = '300px';
  yesBtn.style.fontSize = '75px';
}

function thirdAction() {
  noBtn.textContent = 'reallyy now:(';
  noBtn.style.width = '72px';
  noBtn.style.height = '50px';
  yesBtn.style.width = '400px';
  yesBtn.style.height = '400px';
  yesBtn.style.fontSize = '85px';
}


// this is for my git commit 