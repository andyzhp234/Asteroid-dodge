import {character} from './character.js'
import {lastRenderTime} from './jump_game.js'

let gameboard = document.getElementById('gameBoard')
let width = gameboard.clientWidth - gameboard.clientWidth/18;
let height = gameboard.clientHeight - gameboard.clientHeight/18;

export const block = []
for (let i = 0; i < 10; i++) {
  block.push({ x: Math.random()*width, y: 0, speed: (Math.random()*4 + 5)})
}

// this function will update the character position in the board
export function update() {
  block.forEach((segment) => {
      let blockLeft = segment.x;
      let blockRight = segment.x + gameboard.clientWidth/18;
      let blockBottom = segment.y + gameboard.clientHeight/18;
      
      let charLeft = character.x;
      let charRight = character.x + gameboard.clientWidth/18;
      let charTop = character.y;

      if (((blockLeft <= charLeft && charLeft <= blockRight) ||
            (blockLeft <= charRight && charRight <= blockRight) ||
            (blockLeft <= charLeft && charRight <= blockRight))
          && 
        (charTop <= blockBottom)
      ) {
        gameboard.style.display = 'none';
        let modal = document.getElementById('modal')
        modal.style.display = 'flex'

        document.getElementById('time_lived').innerHTML = (lastRenderTime/1000).toFixed(2)
      }

      segment.y += segment.speed;
      if (segment.y >= height) {
        segment.y = 0;
        segment.x = Math.random()*width;
        segment.speed = (Math.random()*4 + 5)
      }
  })
}


export function draw() {
  block.forEach((segment) => {
    let blockElement = document.createElement('img')
    blockElement.src="https://img.icons8.com/stickers/344/rock.png"
    blockElement.alt="img"
    blockElement.style.top = segment.y
    blockElement.style.left = segment.x
    blockElement.classList.add('block')
    gameboard.appendChild(blockElement)
  })
}