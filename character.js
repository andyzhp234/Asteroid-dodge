import {getInputDirection} from './input.js'

let gameboard = document.getElementById('gameBoard')
let width = gameboard.clientWidth - gameboard.clientWidth/18;
let height = gameboard.clientHeight - gameboard.clientHeight/18;


export let character_speed = 120;
export const character = { x:width/2, y:height - 10 }


// this function will update the character position in the 
// board
export function update() {
  let inputDirection = getInputDirection()
 
  character.x += inputDirection.x
  // character.y += inputDirection.y

  if (character.x >= width) {
    character.x = width;
  }
  if (character.x <= 0) {
    character.x = 0;
  }
  if (character.y >= height) {
    character.y = height;
  }
  if (character.y <= 0) {
    character.y = 0;
  }
}


export function draw() {
  let characterElement = document.createElement('img')
  characterElement.src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-rocket-achievements-flaticons-flat-flat-icons-2.png"
  characterElement.alt="img"
  characterElement.style.top = character.y
  characterElement.style.left = character.x
  characterElement.classList.add('character')
  gameboard.appendChild(characterElement)
}