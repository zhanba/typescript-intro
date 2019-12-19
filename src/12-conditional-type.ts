// T extends U ? X : Y
// when T is assignable to U the type is X, otherwise the type is Y

type Diff<T, U> = T extends U ? never : T // Remove types from T that are assignable to U
type Filter<T, U> = T extends U ? T : never // Remove types from T that are not assignable to U

type T30 = Diff<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'> // "b" | "d"
type T31 = Filter<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'> // "a" | "c"
type T32 = Diff<string | number | (() => void), Function> // string | number
type T33 = Filter<string | number | (() => void), Function> // () => void

type NonNullableCopy<T> = Diff<T, null | undefined> // Remove null and undefined from T

type T34 = NonNullable<string | number | undefined> // string | number
type T35 = NonNullable<string | string[] | null | undefined> // string | string[]

function f1<T>(x: T, y: NonNullable<T>) {
  x = y // Ok
  y = x // Error
}

function f2<T extends string | undefined>(x: T, y: NonNullable<T>) {
  x = y // Ok
  y = x // Error
  const s1: string = x // Error
  const s2: string = y // Ok
}

//
type ReturnTypeCopy<T> = T extends (...args: any[]) => infer R ? R : any
