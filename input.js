let hash = {
  'ArrowUp' : false,
  'ArrowDown' : false,
  'ArrowLeft' : false,
  'ArrowRight' : false
}

window.addEventListener('keydown', e => {
  hash[e.key] = true
})


window.addEventListener('keyup', e => {
  hash[e.key] = false
})



export function getInputDirection() {
  let result = { x:0, y:0 }
  if (hash['ArrowUp']) {
    result.y = -5;
  }
  if (hash['ArrowDown']) {
    result.y = 5;
  }
  if (hash['ArrowLeft']) {
    result.x = -5;
  }
  if (hash['ArrowRight']) {
    result.x = 5;
  }

  return result
}