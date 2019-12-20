// string
const sname: string = 'Tom'

// number
let decLiteral: number = 6

// boolean
let isDone: boolean = false

// array
let list: number[] = [1, 2, 3]

// tuple
let x: [string, number?] = ['hello', 10]
const y = [1, 2, 3, 's'] as const

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green

// any
let notSure: any = 4

// unknown
let dontknown: unknown = 1

let b: number = dontknown // Type 'unknown' is not assignable to type 'number'

// void
function warnUser(): void {
  // tslint:disable-next-line:no-console
  console.log('This is my warning message')
}

// null and undefined
let u: undefined
let n: null = null

// never
function error(message: string): never {
  throw new Error(message)
}

// Type assertions 类型断言

let someValue: any = 'this is a string'

// tslint:disable-next-line:no-angle-bracket-type-assertion
let strLength1: number = (<string>someValue).length

let strLength2: number = (someValue as string).length
