// optional
interface ISquareConfig {
  color?: string
  width?: number
}

// readonly
interface ISquare {
  readonly color: string
  readonly area: number
}

// function type
function createSquare(config: ISquareConfig): ISquare {
  const newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black' })

interface ICompare {
  compare(y: ICompare): number
}
function mySort<T extends ICompare>(array: T[]): T[] {
  array.sort((x, y) => x.compare(y))
  return array
}
