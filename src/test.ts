class C {
  //
}

type A = InstanceType<typeof C>

type F = Record<'ss' | 'dsds', number>

const a: F = {
  dsds: 1,
  ss: 2,
}

const c = a && 1

// let ts treat this file as module instead of global script
export {}
