let pressed = {
  w: false,
  s: false,
  a: false,
  d: false,
};

window.addEventListener("keydown", (e) => {
  pressed[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  pressed[e.key] = false;
});

export function getInputDirection() {
  let result = { x: 0, y: 0 };

  if (pressed["w"]) {
    result.y = -5;
  }
  if (pressed["s"]) {
    result.y = 5;
  }
  if (pressed["a"]) {
    result.x = -5;
  }
  if (pressed["d"]) {
    result.x = 5;
  }

  return result;
}
