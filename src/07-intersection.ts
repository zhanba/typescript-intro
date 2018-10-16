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
merge({ name: 'moe' }, { age: 50 })
