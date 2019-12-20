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
    case 'circle':
      return Math.PI * s.radius ** 2
    default:
      return assertNever(s) // error here if there are missing cases
  }
}

/**
 * 模式匹配!!
 * @param m
 */
type Matcher<T extends string, R> = { [K in T]: (k: K) => R }

export const match = <T extends string, R = void>(m: Matcher<T, R>) => (t: T) => m[t](t)

// example
type DemoType = 'cat' | 'dog' | 'bird' | 'sd'

// const aa: { [name in DemoType]: string } = {
//   cat: 'mao',
//   dog: '',
//   bird: '',
// }

const result = match<DemoType, string>({
  cat: () => 'return a string',
  dog: () => 'return another string',
  bird: () => 'oh',
  sd: () => '',
})

const result2 = match<DemoType, boolean>({
  cat: () => true,
  dog: () => false,
  bird: () => true,
})
