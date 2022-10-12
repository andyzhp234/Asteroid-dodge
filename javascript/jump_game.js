import {update as updateCharacter, draw as drawCharacter, character_speed} from './character.js'
import {update as updateBlock, draw as drawBlock} from './block.js'


export let lastRenderTime = 0;

// Game loop
function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / character_speed) return

  lastRenderTime = currentTime;
  update()
  draw()
}

// Start the game loop
window.requestAnimationFrame(main)


// update the game (character position / block position)
function update() {
  updateBlock()
  updateCharacter()
}


// Draw / Rerender the board
function draw() {
  let gameboard = document.getElementById('gameBoard')
  let blockElement = document.createElement('div')
  blockElement.innerHTML = `survived ${(lastRenderTime/1000).toFixed(2)}`;
  blockElement.classList.add('counter');

  // clear the board and render new position
  gameboard.innerHTML = ''
  gameboard.appendChild(blockElement);
  drawCharacter()
  drawBlock()
}