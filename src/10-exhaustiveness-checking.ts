interface ISquare {
  kind: 'square'
  size: number
}

interface IRectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface ICircle {
  kind: 'circle'
  radius: number
}

type Shape = ISquare | IRectangle | ICircle

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x)
}

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.height * s.width
    // case 'circle':
    //   return Math.PI * s.radius ** 2
    default:
      return assertNever(s) // error here if there are missing cases
  }
}
