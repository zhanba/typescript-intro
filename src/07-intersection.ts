function merge<T, U>(fst: T, snd: U): T & U {
  const ret = {} as any
  // tslint:disable-next-line:forin
  for (const id in fst) {
    ret[id] = fst[id]
  }
  // tslint:disable-next-line:forin
  for (const id in snd) {
    ret[id] = snd[id]
  }
  return ret
}

// no annotation!
const s = merge({ name: 'moe' }, { age: 50 })

interface A {
  name: string
  age: string
}

interface B {
  age: number
}

type C = A & B

const a: C = {
  age: 1,
  name: 'a',
}
