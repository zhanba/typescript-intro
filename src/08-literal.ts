// String Literal Types
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
  public animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
      // ...
    } else if (easing === 'ease-in-out') {
      // ...
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // error: "uneasy" is not allowed here

// Numeric Literal Types
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
  // ...
  return 1
}
