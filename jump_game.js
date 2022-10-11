import {update as updateCharacter, draw as drawCharacter, character_speed} from './character.js'
import {update as updateBlock, draw as drawBlock} from './block.js'

export let lastRenderTime = 0;
let gameboard = document.getElementById('gameBoard')


window.requestAnimationFrame(main)



function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / character_speed) return
  

  // window.getComputedStyle(pix).getPropertyValue("top")

  lastRenderTime = currentTime

  update()
  draw()
}





function update(secondsSinceLastRender) {
  updateBlock()
  updateCharacter()
}


function draw() {
  gameboard.innerHTML = ''
  drawCharacter()
  drawBlock()
  let blockElement = document.createElement('div')
  blockElement.innerHTML = `survived ${(lastRenderTime/1000).toFixed(2)}`;
  blockElement.classList.add('counter');
  gameboard.appendChild(blockElement);
}