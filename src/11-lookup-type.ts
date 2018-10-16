// We can query property name of a Type
interface IPerson {
  name: string
  age: number
  address: string
}

type K1 = keyof IPerson
// "name" | "age" | "address"

type Pluck<T, K extends keyof T> = T[K]
type Address = Pluck<IPerson, 'address'>
// string
