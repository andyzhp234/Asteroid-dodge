let pressed = {
  'ArrowUp' : false,
  'ArrowDown' : false,
  'ArrowLeft' : false,
  'ArrowRight' : false
}

window.addEventListener('keydown', e => {
  pressed[e.key] = true
})


window.addEventListener('keyup', e => {
  pressed[e.key] = false
})



export function getInputDirection() {
  let result = { x:0, y:0 }
  
  if (pressed['ArrowUp']) {
    result.y = -5;
  }
  if (pressed['ArrowDown']) {
    result.y = 5;
  }
  if (pressed['ArrowLeft']) {
    result.x = -5;
  }
  if (pressed['ArrowRight']) {
    result.x = 5;
  }

  return result
}